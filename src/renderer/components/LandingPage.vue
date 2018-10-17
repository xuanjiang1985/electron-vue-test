<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <br><br>
    <router-link :to="{ name: 'about-us' }">按钮</router-link>
    <div>
      <router-link :to="{ name: 'get-here' }">
      <el-button type="primary" class="right">获取数据</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
#logo {width: 200px;height: auto;}
.right {float:right;}
</style>
