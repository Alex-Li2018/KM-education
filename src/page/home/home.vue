<template>
    <!-- 版心布局 1200 -->
    <div class="home">
        <!-- 轮播图 -->
        <section class="carousel">
            <el-carousel :autoplay="true" indicator-position="none">
                <el-carousel-item v-for="item in imgArr" :key="item.id">
                <img :src="item.src" />
                </el-carousel-item>
            </el-carousel>
        </section>
        <!-- 星级服务 -->
        <section class="star-service">
            <section class="star-service-head">
                <span class="line"></span>
                <h2>全面专业的星级服务</h2>
                <span class="line"></span>
            </section>
            <section class="star-service-list"> 
                <template v-for="item in starServicelist">
                    <div :class="animateId == item.id ? 'breathing-light' : ''" 
                        @mouseenter="breathingLightEnter(item.id)" 
                        @mouseleave="breathingLightleave" 
                        class="star-service-item" 
                        :key="item.id">
                        <div class="content">
                            <img :src="item.src" />
                            <h3>{{item.txt}}</h3>
                            <p>{{item.subTxt}}</p>
                            <p>{{item.thirdTxt}}</p>
                        </div>
                    </div>
                </template>
            </section>
        </section>
        <!-- 理由列表 -->
        <section class="reason-list">
            <header class="title">
                <p>专业的事, 交给专业的人做</p> 
                <p>Professional things,to do professional people</p> 
            </header>
            <!-- whyme -->
            <img src="../../img/other/whyMe.jpg" />
        </section>
        <!-- 运营流程 -->
        <section class="operation-list">
            <header class="title">
                <p>运营流程</p> 
                <p>分为6个阶段</p> 
            </header>
            <img class="operation-content" src="../../img/other/operation-content.jpg" />
        </section>
        <!-- 免费检查 -->
        <section class="free-check">
            <img class="free-img" src="../../img/other/free-check.jpg" />
            <!-- 表单数据提交 --> 
            <section class="form-list">
                <section class="form-title">
                    <h2>请准确填写</h2>
                    <h2>以便于我们安排合适的运营经理为你诊断店铺</h2>
                </section>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="你的联系方式">
                        <el-input v-model="form.link"></el-input>
                    </el-form-item>
                    <el-form-item label="怎么称呼您">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="您的店铺名字/链接">
                        <el-input v-model="form.shopNameOrAdder"></el-input>
                    </el-form-item>
                    <el-form-item label="您的店铺在以下哪个平台">
                        <el-radio-group v-model="form.platform">
                            <template v-for="item in platformList">
                                <el-radio :key="item.id" :label="item.label"></el-radio>
                            </template>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="有没有想了解的服务">
                        <template v-for="item in serviceList">
                            <el-radio :key="item.id" :label="item.label"></el-radio>
                        </template>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">免费诊断店铺</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </section>
    </div>
</template>

<script>
import breathingLightMixin from "../../mixin/breathing-light.js"

export default {
    mixins: [breathingLightMixin],
    data(){
        return {
            //图片数据
            imgArr: [
                {id: 1, src: require("../../img/banner/operate.jpg")},
                {id: 2, src: require("../../img/banner/tCat.jpg")},
                {id: 3, src: require("../../img/banner/eTrain.jpg")},
                {id: 4, src: require("../../img/banner/freeCheck.jpg")},
                {id: 5, src: require("../../img/banner/design.jpg")}
            ], 
            //星级服务
            starServicelist: [
                {   id: 1, 
                    src: require("../../img/icon/icon_03.png"), 
                    txt: '网店代运营', 
                    subTxt: '淘宝代运营,天猫代运营',
                    thirdTxt: '京东代运营,阿里代运营'
                },{   id: 2, 
                    src: require("../../img/icon/icon_05.png"),
                    txt: '店铺装修',
                    subTxt: '网店定位、店铺入驻、网店装修',
                    thirdTxt: '产品上架、店铺信誉优化'
                },{
                    id: 3, 
                    src: require("../../img/icon/icon_07.png"),
                    txt: '视觉营销',
                    subTxt: '视觉定位、首页制作 、详情页制',
                    thirdTxt: '作、活动页制作、素材制作等'
                },{
                    id: 4, 
                    src: require("../../img/icon/icon_09.png"),
                    txt: '爆款打造',
                    subTxt: '产品选择、图片拍摄、宝贝描述',
                    thirdTxt: '卖点提炼、商品上下架等'
                },{
                    id: 5, 
                    src: require("../../img/icon/icon_15.png"),
                    txt: '店铺推广', 
                    tTxt: '站内站外优化、直通车、钻展',
                    thirdTxt: '推广、广告投放、活动提报'
                },{
                    id: 6, 
                    src: require("../../img/icon/icon_16.png"),
                    txt: '数据分析',
                    subTxt: '商品分析、活动分析、报表分析',
                    thirdTxt: '竞争分析、消费洞察'
                },{
                    id: 7, 
                    src: require("../../img/icon/icon_17.png"),
                    txt: '信誉优化',
                    subTxt: '优化网店信誉',
                    thirdTxt: '提升店铺销量'
                },{
                    id: 8, 
                    src: require("../../img/icon/icon_18.png"),
                    txt: '免费店铺诊断',
                    subTxt: '诊断店铺基础情况',
                    thirdTxt: '深度解决店铺销量问题'
            }],
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
            form: {
                link: '',
                name: '',
                shopNameOrAdder: '',
                platform: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        // 提交
        onSubmit() {

        } 
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

//轮播
.carousel {
    width: 100vw;
    height: 550px;
    ::v-deep .el-carousel__container {
        width: 100vw;
        height: 550px;
    }
    img {
        width: 100vw;
        height: 550px;
    }
}
//热点服务
.star-service {
    margin: 40px auto 0;
    width: 100vw;
    padding: 0 100px;
    // background-color: #f4f4f4;
    text-align: center;
    .star-service-head {
        height: 40px;
        line-height: 40px;
        margin-bottom: 20px;
        h2 {
            font-size: 30px;
            font-weight: 600;
            display: inline-block;
            color: #454443;
        }
        .line {
            display: inline-block;
            width: 340px;
            height: 2px;
            background-color: #c3c0ba;
            margin: 10px 20px;
        }   
    }
    .star-service-list {
        display: flex;
        flex-wrap: wrap;
        .star-service-item {
            width: 25%;
            height: 235px;
            margin-top: 40px;
            position: relative;
            display: flex;
            justify-content: center;
            transition: all .2s;
            .content {
                @include ct;
                height: 235px;
                width: 250px;
                padding-top: 20px;
                background-color: #f4f4f4;
                border-radius: 20px;
                margin: 0 auto;
            }
            h3 {
                font-size: 20px;
                font-weight: 600;
                line-height: 20px;
                margin: 20px 0 15px;
            }
            p {
                font-size: 16px;
            }
        }
    }
}
//选择理由
.reason-list {
    margin: 40px auto 0;
    width: 100vw;
    padding: 0 100px;
    background-color: #fff;
    img {
        width: 100%;
    }
}
.title {
    height: 140px;
    text-align: center;
    background-color: #ff4200;
    margin: 0 -100px;
    > p {
        height: 70px;
        color: #fff;
        &:nth-of-type(1) {
            font-size: 30px;
            padding-top: 30px;
        }
        &:nth-of-type(2) {
            font-size: 18px;
            line-height: 42px;
        }
    }
}
//运营流程
.operation-list {
    margin: 0 auto;
    width: 100vw;
    padding: 0 100px;
    background-color: #f4f4f4;
    .title {
        height: 140px;
    }
    .operation-content {
        // margin: 40px 100px;
        // padding: 50px;
        padding-top: 20px;
        width: 100%;
        padding-bottom: 0px;
    }
}
//免费体检
.free-check {
    margin: 0 auto;
    width: 100vw;
    padding: 20px 100px 0;
    background-color: #f4f4f4;
    .free-img {
        width: 125%;
        margin: 0 -100px;
    }
    .form-list {
        margin-top: 50px;
        padding: 0 100px;
        .form-title {
            margin-bottom: 40px;
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
                margin-bottom: 10px;
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
}
.breathing-light {
    transform: translateY(-20px);
    transition: all .2s;
}

</style>