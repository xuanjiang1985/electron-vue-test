<template>
  <div id="wrapper">
    <!-- 窗口坐标 -->
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="横坐标">
        <el-input v-model="formData.co_x" placeholder="横坐标" id="co_x_input"></el-input>
      </el-form-item>
      <el-form-item label="纵坐标">
        <el-input v-model="formData.co_y" placeholder="纵坐标" id="co_y_input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveSubmit">保存</el-button>
      </el-form-item>
    </el-form>
    <div id="msg" v-html="message">
    </div>
    <div id="btn-script">
      <el-button type="success" @click="runScript" v-bind:disabled="btnRunState">启动</el-button>
      <el-button type="info" @click="pauseScript">暂停</el-button>
      <el-button type="danger" @click="stopScript">停止</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formData: {
          co_x: '',
          co_y: ''
        },
        message: '',
        btnRunState: false
      }
    },
    name: 'index',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      checkForm () {
        let x = parseInt(this.formData.co_x)
        let y = parseInt(this.formData.co_y)
        if (!Number.isInteger(x)) {
          this.$message({
            showClose: true,
            message: '坐标请填整数',
            type: 'error'
          })
          return false
        }
        if (!Number.isInteger(y)) {
          this.$message({
            showClose: true,
            message: '坐标请填整数',
            type: 'error'
          })
          return false
        }

        if (x < 0 || y < 0) {
          this.$message({
            showClose: true,
            message: '坐标必须大于0',
            type: 'error'
          })
          return false
        }
        return true
      },
      saveSubmit () {
        if (this.checkForm()) {
          console.log('submit!')
          this.$message({
            showClose: true,
            message: '保存成功',
            type: 'success'
          })
        }
      },
      runScript () {
        this.appendMsg('<div>脚本启动成功</div>')
        this.btnRunState = true
      },
      pauseScript () {
        this.appendMsg('<div>脚本启动暂停</div>')
      },
      stopScript () {
        this.appendMsg('<div>脚本启动成功</div>')
        this.btnRunState = false
      },
      appendMsg (msg) {
        let tempMessage = this.message
        let a = tempMessage.split('<div>')
        if (a.length > 21) {
          this.message = ''
        }
        this.message += msg
      }
    }
  }
</script>

<style>
#logo {width: 200px;height: auto;}
.right {float:right;}
#co_x_input, #co_y_input {width: 80px;}
#msg {
  font-size: 14px;
  border: 1px #ccc solid;
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0 10px;
  height: 450px;
  }
#btn-script {
  margin-top: 10px;
}
#btn-script button {
  margin-right: 50px;
}
</style>
