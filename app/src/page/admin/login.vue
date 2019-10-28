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
export default {
    data() {
      const checkusername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else {
            callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
    //   const validatePassCopy = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请再次输入密码'));
    //     } else if (value !== this.ruleForm.pass) {
    //       callback(new Error('两次输入密码不一致!'));
    //     } else {
    //       callback();
    //     }
    //   };
      return {
        ruleForm: {
          pass: '',
        //   checkPass: '',
          username: ''
        },
        rules: {
          pass: [{ validator: validatePass, trigger: 'blur' }],
        //   checkPass: [{ validator: validatePassCopy, trigger: 'blur' }],
          username: [{ validator: checkusername, trigger: 'blur' }]
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
              let { code } = res;
              if(code == 200) {
                this.$router.push({ name: 'Admin'});
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
