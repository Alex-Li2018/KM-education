<template>
    <!-- 表单数据提交 -->
    <div class="box">
        <el-dialog
            title="免费诊断店铺"
            :visible.sync="show"
            width="1200"
            :before-close="handleClose">
            <section class="form-list">
                <section class="form-title">
                    <h2>请准确填写</h2>
                    <h2>以便于我们安排合适的运营经理为你诊断店铺</h2>
                </section>
                <el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px">
                    <el-form-item label="你的联系方式" prop="link">
                        <el-input v-model="form.link"></el-input>
                    </el-form-item>
                    <el-form-item label="怎么称呼您" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="您的店铺名字/链接">
                        <el-input v-model="form.shopNameOrAdder"></el-input>
                    </el-form-item>
                    <el-form-item label="您的店铺在以下哪个平台">
                        <el-radio-group v-model="form.platform">
                            <template v-for="item in platformList">
                                <el-radio :key="item.id" :label="item.id">{{ item.label }}</el-radio>
                            </template>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="有没有想了解的服务">
                        <el-radio-group v-model="form.service">
                            <template v-for="item in serviceList">
                                <el-radio :key="item.id" :label="item.id">{{ item.label }}</el-radio>
                            </template>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">免费诊断店铺</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </el-dialog>
    </div>
</template>

<script>
import { freeCheckAPI } from "@API/free-check"
import { mutations } from "../../store/store"
import { isPhone } from '@until/until-tool'

export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        const validateLink = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请填写联系方式'));
            } else if (!isPhone(value)) {
                callback(new Error('请输入正确的手机号码'));
            } else {
                callback();
            }
        };
        return {
            form: {
                link: '',
                name: '',
                shopNameOrAdder: '',
                platform: '',
                service: ''
            },
            rules: {
                link: [
                    // { required: true, message: '请填写联系方式', trigger: 'blur' },
                    { required: true, validator: validateLink, trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请填写您的称呼', trigger: 'blur' }
                ]
            },
            //平台
            platformList: [
                {id: 1, label: '淘宝'},
                {id: 2, label: '天猫'},
                {id: 3, label: '京东'},
                {id: 4, label: '拼多多'},
                {id: 5, label: '阿里巴巴'}
            ],
            //服务
            serviceList: [
                {id: 1, label: '网点运营推广'},
                {id: 2, label: '店铺装修设计'},
                {id: 3, label: '直通车/砖展'},
                {id: 4, label: '店铺诊断'},
                {id: 5, label: '打造爆款'},
                {id: 6, label: '其他'}
            ],
        }
    },
    methods: {
        // 提交
        onSubmit() {
            this.$refs['ruleForm'   ].validate((valid) => {
                if (valid) {
                    let params = {
                        "concatlink": this.form.link, 
                        "username": this.form.name, 
                        "shopname": this.form.shopNameOrAdder, 
                        "shopplatform": this.form.platform, 
                        "wantservice": this.form.service
                    }
                    freeCheckAPI(params).then(res => {
                        mutations.setShowDialog(false);
                         this.$notify({
                            title: '成功',
                            message: '数据新增成功',
                            type: 'success'
                        });
                        this.$refs['ruleForm'].resetFields();
                        this.form = {
                            link: '',
                            name: '',
                            shopNameOrAdder: '',
                            platform: '',
                            service: ''
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleClose() {
            this.show = false;
            mutations.setShowDialog(false);
        }
    } 
}
</script>

<style lang="scss" scoped>
.box {
    ::v-deep .el-dialog__title {
        font-weight: 600;
    }
    ::v-deep .el-dialog__body {
        padding-top: 0;
    }
}
//免费体检
.form-list {
    padding: 0 50px;
    .form-title {
        margin-bottom: 25px;
        h2 {
            font-size: 16px;
            line-height: 16px;
            text-align: center;
            &:nth-of-type(1) {
                color: #fb4200;
                font-weight: 600;
            }
            &:nth-of-type(2) {
                margin-top: 10px;
            }
        } 
    }
    ::v-deep .el-form {
        padding-bottom: 20px;
        .el-form-item__label {
            display: block !important;
            width: 100% !important;
            text-align: left !important;
            line-height: 25px !important;
            color: #000;
            font-weight: 600;
        }
        .el-form-item__content {
            margin-left: 0 !important; 
            
        }
        .el-form-item {
            margin-bottom: 22px;
            &:nth-of-type(6) {
                .el-form-item__content {
                    text-align: center;
                    button {
                        background-color: #ff4200;
                        border-color: #ff4200;
                        font-size: 18px;
                        span {
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}
</style>
