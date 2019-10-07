<template>
    <!-- 版心布局 1200 -->
    <div class="home">
        <!-- 头部 -->
        <section class="header">
            <!-- logo区域 -->
            <h1 class="logo">
                <a>柯明教育</a>
            </h1>
            <!-- 主导航 -->
            <ul class="nav">
                <template v-for="(item,index) in navList">
                    <li v-if="index !== navList.length - 1" 
                        @mouseenter="enterEvent(index,'main')"
                        @mouseleave="leaveEvent" 
                        :key="index"
                        :class="currentIndex == index || activeIndex == index ? 'active-color' :''">
                        <span>{{ item }}</span>
                    </li>
                    <li v-else :key="index">
                        <span class="last-border">{{ item }}</span>    
                    </li>
                </template>
                <!-- 子导航 -->
                <div>
                    <!-- 代运营子导航 -->
                    <template v-if="currentIndex == 1 && moveToFlag">
                        <ul @mouseleave="leaveSubNav" 
                            class="sub-nav operation-list" >
                            <li v-for="(con,num) in operationList" 
                                :key="num"
                                :class="currentSubIndex == num ? 'active-color' :''"
                                @mouseenter="enterEvent(num,'sub')"
                                @mouseleave="leaveEvent('sub')" >{{ con }}</li>
                        </ul>
                    </template>
                    <!-- 平台设计子导航 -->
                    <template v-else-if="currentIndex == 2 && moveToFlag">
                        <ul @mouseleave="leaveSubNav"
                            class="sub-nav plane-design" >
                            <li v-for="(con,num) in planeDesignList" 
                                :key="num"
                                :class="currentSubIndex == num ? 'active-color' :''"
                                @mouseenter="enterEvent(num,'sub')"
                                @mouseleave="leaveEvent('sub')">{{ con }}</li>
                        </ul>
                    </template>
                    <!-- 电商培训子导航 -->
                    <template v-else-if="currentIndex == 3 && moveToFlag">
                        <ul @mouseleave="leaveSubNav"
                            class="sub-nav e-train" >
                            <li v-for="(con,num) in eTrainList" 
                                :key="num"
                                :class="currentSubIndex == num ? 'active-color' :''"
                                @mouseenter="enterEvent(num,'sub')"
                                @mouseleave="leaveEvent('sub')">{{ con }}</li>
                        </ul>
                    </template>
                    <!-- 数据服务子导航 -->
                    <template v-else-if="currentIndex == 5 && moveToFlag">
                        <ul @mouseleave="leaveSubNav"
                            class="sub-nav data-service">
                            <li v-for="(con,num) in dataServiceList" 
                                :key="num"
                                :class="currentSubIndex == num ? 'active-color' :''"
                                @mouseenter="enterEvent(num,'sub')"
                                @mouseleave="leaveEvent('sub')">{{ con }}</li>
                        </ul>
                    </template>
                </div>
            </ul>            
        </section>
        <!-- 轮播图 -->
        <section class="carousel">
            <el-carousel :autoplay="false" indicator-position="none">
                <el-carousel-item v-for="item in 4" :key="item">
                <img src="../../img/banner.jpg" />
                </el-carousel-item>
            </el-carousel>
        </section>
        <!-- 热点服务 -->
        <section class="hot-service">

        </section>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                navList: [ "首页", "代运营", "平面设计", "电商培训", "代入驻", 
                           "数据服务", "成功案例", "新闻动态", "柯明教育的优势", "免费诊断店铺" ],
                currentIndex: 0, //当前鼠标移入点
                currentSubIndex: -1, //子导航的位置
                activeIndex: 0, //当前激活的导航
                moveToFlag: 0, //移出子导航
                operationList: [ "淘宝代运营", "天猫代运营", "1688代运营", "拼多多代运营", "京东代运营", "直通车代运营"], //代运营
                planeDesignList: [ "店铺装修设计", "宝贝主图设计", "详情页设计", "推广车图设计", "logo设计", "其他单品设计" ], //平面设计
                eTrainList: [ "淘宝开店创业班", "高级推广运营班", "电商美工提升班", "企业内训精英班", "一对一定制高班" ], //电商培训
                dataServiceList: [ "AB单提升销量", "店铺访客提升", "店铺收藏加购", "产品收藏加购" ], //数据服务
            }
        },
        methods: {
            //移入事件
            enterEvent(index, flag) {console.log(index,flag)
                if(flag == 'main') {
                    this.moveToFlag = 1
                    this.currentIndex = index
                }  
                if(flag == 'sub') this.currentSubIndex = index
            },
            //移出事件
            leaveEvent(flag) {
                //判断是移出了导航
                if(!flag && this.currentSubIndex == -1) {
                    this.currentIndex = this.activeIndex
                }
                
                if(flag == 'sub'){
                    this.currentSubIndex = -1
                }   
            },
            //移出子导航
            leaveSubNav() {
                this.moveToFlag = 0
                this.currentIndex = this.activeIndex
            }
        }
    }
</script>

<style lang="scss" scoped>
//头部
.header {
    width: 1200px;
    height: 120px;
    line-height: 120px;
    margin: 0 auto;
    display: flex;
    background: #fff;
    .logo {
        width: 260px;
        // height: 70px;
    }
    //导航区
    .nav {
        flex: 1;
        height: 100%;
        line-height: 1;
        margin-left: 50px;
        padding: 35px 0;
        position: relative;
        > li {
            float: left;
            min-width: 60px;
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
            font-size: 16px;
            .last-border {
                padding: 5px;
                border: 1px solid rgba(139,14,234,1);
            }
        }
    }
    .sub-nav {
        position: absolute;
        min-width: 130px;
        top: 80px;
        padding: 0 10px;
        border: 1px solid #f6f6f6;
        border-top: none;
        background: #fff;
        z-index: 5;
        &.operation-list {
            left: 35px;
        }
        &.plane-design {
            left: 105px;
        }
        &.e-train {
            left: 195px;
        }
        &.data-service {
            left: 340px;
        }
        li {
            height: 40px;
            font-size: 14px;
            line-height: 40px;
            text-align: center;
        }
    }
}
//轮播
.carousel {
    width: 100vw;
    height: 620px;
    ::v-deep .el-carousel__container {
        height: 620px;
    }
    img {
        width: 100vw;
        height: 620px;
    }
}
//热点服务
.hot-service {
    height: 500px;
    background: red;
}
.active-color {
    color: red;
    & > span {
        color: red;
    }
}
</style>