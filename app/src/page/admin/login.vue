<template>
    <!-- 登录页面 -->
    <div class="login-bg">
        <div class="login-form">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model.number="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                </el-form-item> -->
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>   
    </div>
</template>

<script>
import { loginAPI } from "@API/login"
import { mutations, store } from '../../store/store'

export default {
    data() {
      return {
        ruleForm: {
          pass: '',
          username: ''
        },
        rules: {
          pass: [ { required: true, message: '请输入密码', trigger: 'blur' },],
          username: [ { required: true, message: '请输入用户名', trigger: 'blur' },]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let { pass, username  } = this.ruleForm;
            let params = {
              username,
              password: pass
            }
            loginAPI(params).then(res => {
              let { code, data } = res;
              if(code == 200) {
                mutations.setName(data.username);
                // 同时将数据存入sessionStorage中
                sessionStorage.setItem('isLogin', true);
                // 判断是否带有重定向路径
                if(this.$route.query.redirect) {
                  this.$router.push({ path: this.$route.query.redirect })
                } else {
                  this.$router.push({ path: '/admin/free-check', });
                }
              } else {
                sessionStorage.setItem('isLogin', false);
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

.login-bg {
    width: 100vw;
    height: 100vh;
    background: url('../../img/admin/bg.jpg') no-repeat center;
    position: relative;
}
.login-form {
    // width: 300px;
    @include center;
    ::v-deep .el-form-item__content {
        width: 300px;
    }
    ::v-deep .el-form-item__label {
        color: #fff;
    }
    ::v-deep .el-form-item__content {
        text-align: center;
        span {
            // color: #fff;
        }
    }
}
</style>
