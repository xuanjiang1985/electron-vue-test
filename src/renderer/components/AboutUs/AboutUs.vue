<template>
  <div>
    I am a page about us.
    <br>
    <br>
    <router-link :to="{ name: 'home' }">返回</router-link>
    <br>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: 'about-us',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>

</style>
