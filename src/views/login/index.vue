<template>
  <div class="login">
    <div class="loginForm">

      <el-form :model="formData" :rules="rules" ref="login" label-position="left">
        <el-form-item prop="name" label="用户名">
          <!-- <i class="el-icon-user"></i> -->
          <el-input v-model="formData.name" type="text" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <!-- <i class="el-icon-password"></i> -->
          <el-input v-model="formData.password" type="password"  placeholder="密码"></el-input>
        </el-form-item>
      </el-form>

      <el-button type="primary" @click="login" class="w-100 m-t-20"> 登陆 </el-button>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {

      formData:{},

      rules:{
        password:[{required:true,message:'请输入密码',trigger:'blur'}],
        name:[{required:true,message:'请输入姓名',trigger:'blur'}]
      }
    }
  },
    created () {},
  methods: {
    login(){
      this.$refs.login.validate((valid)=>{
        if(valid) {
          console.log('111111');
          this.$store.dispatch('login',this.formData)
        }
      })
    }
  },
 
}
</script>
<style lang="scss" scoped>
  .login {
    width: 100vw;
    height: 100vh;
    background-color: #2d3a4b;
    overflow: hidden;
  }
  .loginForm{
    width: 520px;
    margin: 165px auto;
  }
</style>
