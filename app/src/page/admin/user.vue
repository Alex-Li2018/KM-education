<template>
    <div class="user">
        <!-- 底部导航 -->
        <section class="nav">
            <span>用户管理</span>
        </section>
        <section @click="showCreateUser" class="btn">
            <el-button type="primary">增加用户</el-button>
        </section>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                prop="username"
                label="用户名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="nickname"
                label="昵称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="createtime"
                label="创建时间">
                <template slot-scope="scope">
                  <span>{{ scope.row.createtime &&　new Date(parseInt(scope.row.createtime)).toLocaleDateString() }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="state"
                label="角色">
                <template slot-scope="scope">
                  <span>{{ scope.row.state | filterState }}</span>
                </template>
            </el-table-column>
            <el-table-column
              label="操作"
              width="200">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.row)"
                  type="danger" 
                  plain
                  size="small">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="创建用户"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <el-form :model="ruleForm" 
                status-icon 
                :rules="rules" 
                ref="ruleForm" 
                label-width="80px" 
                class="demo-ruleForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model.number="ruleForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="昵称" prop="nickName">
                    <el-input v-model.number="ruleForm.nickName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import { queryUserAPI, deleteUserAPI, createUserAPI } from '@API/login'

export default {
    data() {
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
        const validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return {
            tableData: [],
            pageSize: 5,
            currentPage: 1,
            total: 0,
            dialogVisible: false,
            ruleForm: {
                userName: '',
                nickName: '',
                pass: '',
                checkPass: ''
            },
            rules: {
                pass: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, validator: validatePass2, trigger: 'blur' }
                ],
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                nickName: [
                    { required: true, message: '请输入昵称', trigger: 'blur' }
                ]
            }
        }
    },
    filters: {
       filterState(newVal) {
           return !newVal ? '普通用户' : '超级管理员';
       } 
    },
    created() {
        this.queryList();
    },
    methods: {
        deleteRow(data) {
            let { nickname, username } = data;
            let params = {
                nickname,
	            username
            }
            deleteUserAPI(params).then(res => {
                if(res.code == 200) {
                    this.$notify.success({
                        title: '成功',
                        message: '删除用户成功!'
                    });
                    this.queryList();
                } else {
                   this.$notify.error({
                        title: '失败',
                        message: '超级管理员不能被删除!'
                    }); 
                }
            })
        },
        handleSizeChange(pageSize) {
            this.pageSize = pageSize;
            this.queryList();   
        },
        handleCurrentChange(pageindex) {
            this.currentPage = pageindex;
            this.queryList();
        },
        queryList() {
            queryUserAPI().then(res => {
                if(res.code == 200) {
                    this.tableData = res.data;
                }
            })
        },
        showCreateUser() {
            this.dialogVisible = true;
        },
        handleClose() {
            this.dialogVisible = false;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let { userName: username, nickName: nickname, pass: password } = this.ruleForm;
                    let params = {
                        username,
                        nickname,
                        password
                    }
                    createUserAPI(params).then(res => {
                        if(res.code == 200) {
                            this.$notify.success({
                                title: '成功',
                                message: '新增用户成功'
                            });
                            this.dialogVisible = false;
                        }else {
                            this.$notify.error({
                                title: '失败',
                                message: '新增用户成功'
                            });
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs['ruleForm'].resetFields();
        }
    },
}
</script>

<style lang="scss" scoped>
.user {
    .nav {
        font-family: MicrosoftYaHei-Bold;
        margin-bottom: 40px;
        // border-radius: 10px;
        color: #1d1e28;
        height: 60px;
        line-height: 60px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.08);
        width: 100%;
        box-sizing: border-box;
        padding-left: 30px;
        span {
          font-weight: 600;
          font-size: 18px;
        }
    }
    .btn {
        margin-bottom: 30px;
    }
    ::v-deep .el-form-item__content {
        text-align: center;
    }
}
</style>