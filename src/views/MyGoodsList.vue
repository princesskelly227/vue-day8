<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #content="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputVisible"
            v-focus
            v-model="scope.row.inputValue"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            style="margin-right: 8px"
            v-for="(str, index) in scope.row.tags"
            :key="index"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="del(scope.row.id)"
            v-perm="current"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
export default {
  data() {
    return {
      list: [],
      permission: ['user', 'visitor', 'admin', 'developer'],
    }
  },
  computed: {
    current() {
      let index = Math.floor(Math.random() * 6)
      return this.permission[index]
    },
  },
  components: {
    MyTable,
  },
  created() {
    this.$axios({
      url: '/api/goods',
    }).then((res) => {
      // console.log(res.data.data);
      this.list = res.data.data
    })
  },
  methods: {
    del(id) {
      let index = this.list.findIndex((ele) => (ele.id = id))
      this.list.splice(index, 1)
    },
    enterFn(obj) {
      if (obj.inputValue.trim().length === 0) {
        return alert('请输入数据')
      }
      obj.tags.push(obj.inputValue)
      obj.inputValue = ''
    },
  },
  directives: {
    perm: {
      inserted(el, binding) {
        // console.log(VNode.context.permission);
        console.log(binding.value)
        switch (binding.value) {
          case "user":
            el.disabled = true
            break
          case "visitor":
            el.disabled = true
            break
          case "admin":
            el.disabled = false
            break
          case "developer":
            el.disabled = false
            break
          default:
            el.disabled = true
        }
      },
      updated(el, binding) {
        switch (binding.value) {
          case "user":
            el.disabled = true
            break
          case "visitor":
            el.disabled = true
            break
          case "admin":
            el.disabled = false
            break
          case "developer":
            el.disabled = false
            break
          default:
            el.disabled = true
            break
        }
      },
    },
  },
}
</script>

<style lang="less" scoped></style>
