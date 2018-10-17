<template>
  <div>
   <h1 v-loading="loading">我是测试axios那数据</h1>
   <h2>{{ name + ' ' + age }}</h2>
   <h3><router-link :to="{ name: 'home' }">返回</router-link></h3>
  </div>
</template>

<script>
    import config from '../store/config.js'
    export default {
      name: 'get-here',
      data () {
        return {
          name: 'zhougang',
          age: 32,
          loading: false
        }
      },
      created () {
        this.getList()
      },
      methods: {
        open (link) {
          this.$electron.shell.openExternal(link)
        },
        getList () {
          this.loading = true
          this.$http.get(config.localHost + 'user/zhougang123').then(response => {
            let data = response.data
            if (data.code === 0) {
              this.$message('请求成功')
              this.name = data.content.name
            } else {
              this.$message.error('请求错误')
            }
          })
          this.loading = false
        }
      }
    }
</script>

<style>

</style>
