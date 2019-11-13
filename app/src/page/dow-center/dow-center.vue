<template>
    <div class="dow-center">
        <!-- banner -->
        <img class="img" src="../../img/dow-center/banner_01.jpg" alt="">
        <!-- 入驻 -->
        <section class="strong-center">
            <h3 class="title">
                <span>强势入驻<i class="color-menu">天猫商城</i>各大类目</span>
            </h3>
            <ul class="stong-list">
                <li v-for="item in strongList" :key="item.id">
                    <img :src="item.src" alt="" />
                    <h4>{{ item.name }}</h4>
                </li>
            </ul>
        </section>
        <!-- 答案 -->
        <section class="answer">
            <h3 class="title">
                <div>关于天猫入驻</div>
                <div>你<i class="color-menu">必须</i>了解几个问题</div>
                <div>入驻案例请咨询下面的联系方式</div>
            </h3>
            <ul class="content">
                <li v-for="item in answerList" :key="item.id">
                    <div class="first">
                        <span class="tit">{{ item.ch }}</span>
                        <span class="color-menu">{{ item.subCh }}</span>
                    </div>
                    <div class="second">{{ item.en }}</div>
                </li>
            </ul>
        </section>
        <!-- 3张图片 -->
        <img class="img" src="../../img/dow-center/dow-center_01.jpg" alt="" />
        <img class="img" src="../../img/dow-center/dow-center_02.jpg" alt="" />
        <img class="img" src="../../img/dow-center/dow-center_03.jpg" alt="" />
        <!-- 表单数据提交 --> 
        <section class="form-list">
            <section class="form-title">
                <h2>店铺入驻申请</h2>
            </section>
            <el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px">
                <el-form-item label="您的产品" prop="production">
                    <el-input placeholder="品牌货经营产品" v-model="form.production"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="phoneNum">
                    <el-input placeholder="请输入您的手机号" v-model="form.phoneNum"></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input placeholder="请输入您的手机号/微信号/QQ号" v-model="form.link"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即提交入驻申请</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
import { isPhone } from '@until/until-tool';
import { insertStoreEntryAPI } from "@API/store-entry";

export default {
    data() {
        const validateLink = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请填写联系方式'));
            } else if (isPhone(isPhone)) {
                callback(new Error('请输入正确的手机号码'));
            } else {
                callback();
            }
        };
        return {
            strongList: [
                {id: 1, src: require('../../img/dow-center/icon/icon1.png'), name: '服饰'},
                {id: 2, src: require('../../img/dow-center/icon/icon2.png'), name: '母婴'},
                {id: 3, src: require('../../img/dow-center/icon/icon3.png'), name: '化妆品'},
                {id: 4, src: require('../../img/dow-center/icon/icon4.png'), name: '食品'},
                {id: 5, src: require('../../img/dow-center/icon/icon5.png'), name: '3C'},
                {id: 6, src: require('../../img/dow-center/icon/icon6.png'), name: '图书音像'},
                {id: 7, src: require('../../img/dow-center/icon/icon7.png'), name: '户外运动'},
                {id: 8, src: require('../../img/dow-center/icon/icon8.png'), name: '汽车配件'},
                {id: 9, src: require('../../img/dow-center/icon/icon9.png'), name: '服务大类'},
                {id: 10, src: require('../../img/dow-center/icon/icon10.png'), name: '家用电器'},
                {id: 11, src: require('../../img/dow-center/icon/icon11.png'), name: '珠宝配饰'},
                {id: 12, src: require('../../img/dow-center/icon/icon12.png'), name: '居家日用'},
                {id: 13, src: require('../../img/dow-center/icon/icon13.png'), name: '家装家居家纺'},
                {id: 14, src: require('../../img/dow-center/icon/icon14.png'), name: '鞋类箱包'},
                {id: 15, src: require('../../img/dow-center/icon/icon15.png'), name: '乐器'},
                {id: 16, src: require('../../img/dow-center/icon/icon16.png'), name: '儿童玩具'},
            ],
            answerList: [
                {id: 1, ch: '入驻需要', subCh: '什么条件？', en: 'what are the conditions for check in?'},
                {id: 2, ch: '入驻需要', subCh: '多久时间？', en: 'how long does it take to check in?'},
                {id: 3, ch: '入驻需要', subCh: '成功率有多少？', en: 'what is the occupancy success rate?'},
                {id: 4, ch: '不是热招品牌·入驻需要', subCh: '有机会吗？', en: 'is not there a chance for hot brands to move in?'},
                {id: 5, ch: '需要', subCh: '多少费用？', en: 'how much will it cost?'},
                {id: 6, ch: '怎么付款·在', subCh: '哪里付款？', en: 'how to pay, wehere to pay?'},
            ],
            form: {
                production: '',
                phoneNum: '',
                link: ''
            },
            rules: {
                phoneNum: [
                    { required: true, validator: validateLink, trigger: 'blur' }
                ],
                production: [
                    { required: true, message: '请填写你的产品', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        // 提交
        onSubmit() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    let params = {
                        "production": this.form.production, 
                        "phoneNum": this.form.phoneNum, 
                        "link": this.form.link
                    }
                    insertStoreEntryAPI(params).then(res => {
                        this.$notify({
                            title: '成功',
                            message: '数据新增成功',
                            type: 'success'
                        });
                        this.$refs['ruleForm'].resetFields();
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.dow-center {
    .img {
        width: 100vw;
    }
    .strong-center {
        padding: 50px 0;
        background-color: #f2f1ef;
        .title {
            text-align: center;
            line-height: 50px;
            font-size: 32px;
            margin-bottom: 30px;
        }
    }
    .stong-list {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
            width: 295px;
            height: 200px;
            text-align: center;
            background-color: #ffffff;
            margin: 20px 20px 0 0;
            img {
                width: 100px;
                height: 100px;
                margin-top: 35px;
            }
            h4 {
                font-size: 20px;
                margin-top: 20px;
            }
        }
    }
    .answer {
        margin: 50px 0;
        .title {
            font-size: 32px;
            text-align: center;
            line-height: 50px;
            margin-bottom: 20px;
        }
        .content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            li {
                width: 400px;
                height: 200px;
                background-color: #f8f7f6;
                margin: 20px 20px 0 0;
                .first {
                    font-size: 23px;
                    color: #000;
                    text-align: center;
                    margin-top: 60px;
                }
                .second {
                    color: #908c87;
                    text-align: center;
                    margin-top: 20px;
                }
            }
        }
    }
    .form-list {
        margin-top: 50px;
        padding: 0 300px;
        .form-title {
            margin-bottom: 40px;
            h2 {
                font-size: 32px;
                line-height: 32px;
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
            .el-form-item {
                &:last-of-type {
                    text-align: center;
                    button {
                        background-color:  #ff2a02;
                        border-color: #ff2a02;
                        span {
                            color: #fff;
                            font-weight: 600;
                        }
                    }
                }
            }
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
    .color-menu {
        color: #ff2700;
    }
}
</style>

