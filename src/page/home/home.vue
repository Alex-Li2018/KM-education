<template>
    <!-- 版心布局 1200 -->
    <div class="home">
        <!-- 头部 -->
        <header-fix></header-fix>
        <!-- 轮播图 -->
        <section class="carousel">
            <el-carousel :autoplay="false" indicator-position="none">
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
                    <div class="star-service-item" :key="item.id">
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
    </div>
</template>

<script>
    import headerFix from "../component/header.vue";

    export default {
        components: {
            headerFix
        },
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
                }]
            }
        },
        methods: {
            
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
    height: 500px;
    width: 1200px;
    // background: red;
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
            margin-top: 30px;
            position: relative;
            display: flex;
            justify-content: center;
            .content {
                @include ct;
                height: 235px;
                width: 250px;
                padding-top: 20px;
                background-color: #efefef;
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
</style>