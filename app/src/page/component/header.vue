<template>
    <!-- 头部 -->
    <!-- 解决吸顶跳动的问题 -->
    <div @mouseleave="leaveEvent">
        <section id="header-fixed" :class='[srcollFlag ? "srcoll-active" : "","header issFixed"]'>
            <div class="header-content">
                <!-- logo区域 -->
                <h1 class="logo">
                    <a href="#">
                        <img src="../../img/banner/logo.png" />
                    </a>
                </h1>
                <!-- 主导航 -->
                <ul class="nav" @mouseleave="leaveNav">
                    <template v-for="(item,index) in navList">
                        <li v-if="index == navList.length - 1"
                            @mouseenter="enterEvent(index,'main')"
                            @mouseleave="leaveEvent"
                            @click="jumpPageUrl(item.url)"
                            :key="index">
                            <img v-if="isLoginFlag" src="../../img/icon/login-active.png" />
                            <img v-else src="../../img/icon/login.png" />
                        </li>
                        <li @click="showDialog" v-else-if="index == navList.length - 2" :key="index">
                            <span class="last-border">{{ item.name }}</span>    
                        </li>
                        <li v-else 
                            @mouseenter="enterEvent(index,'main')"
                            @mouseleave="leaveEvent"
                            @click="jumpPageUrl(item.url)"
                            :key="index"
                            :class="currentIndex == index || activeIndex == index ? 'active-color' :''">
                            <span>{{ item.name }}</span>
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
                                    @click="jumpPageUrl('operate',con)"
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
                                    @click="jumpPageUrl('plane-design', con)"
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
                                    @click="jumpPageUrl('e-train')"
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
                                    @click="jumpPageUrl('data-service')"
                                    @mouseenter="enterEvent(num,'sub')"
                                    @mouseleave="leaveEvent('sub')">{{ con }}</li>
                            </ul>
                        </template>
                    </div>
                </ul>            
            </div>
        </section>
        <section class="header"></section>
    </div>
</template>

<script>
import { mutations } from "../../store/store"

export default {
    data(){
        return {
            navList: [ 
                { name: "首页", url: "home"}, 
                { name: "代运营", url: "operate"}, 
                { name: "平面设计", url: "plane-design"}, 
                { name: "电商培训", url: "e-train"}, 
                { name: "代入驻", url: "dow-center"}, 
                { name: "数据服务", url: "data-service"}, 
                { name: "成功案例", url: "success"}, 
                { name: "新闻动态", url: "news"}, 
                { name: "柯明教育的优势", url: "goodness"}, 
                { name: "免费诊断店铺", url: "#"},
                { name: "后台管理", url: "admin/free-check"}],
            operationList: [ "淘宝代运营", "天猫代运营", "1688代运营", "拼多多代运营", "京东代运营", "直通车代运营"], //代运营
            planeDesignList: [ "店铺装修设计", "宝贝主图设计", "详情页设计", "推广车图设计", "logo设计", "其他单品设计" ], //平面设计
            eTrainList: [ "淘宝开店创业班", "高级推广运营班", "电商美工提升班", "企业内训精英班", "一对一定制高班" ], //电商培训
            dataServiceList: [ "AB单提升销量", "店铺访客提升", "店铺收藏加购", "产品收藏加购" ], //数据服务
            currentIndex: -1, //当前鼠标移入点
            currentSubIndex: -1, //子导航的位置
            activeIndex: 0, //当前激活的导航
            moveToFlag: 0, //移出子导航
            isLoginFlag: false,
            srcollFlag: false, // 滚动吸顶的效果
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(newVal) {
                let { meta } = newVal;
                switch(meta.page) {
                    case 'home':
                        this.activeIndex = 0;
                    break;
                    case 'operate':
                        this.activeIndex = 1;
                    break;
                    case 'planeDesign':
                        this.activeIndex = 2;
                    break;
                    case 'eTrain':
                        this.activeIndex = 3;
                    break;
                    case 'dowCenter':
                        this.activeIndex = 4;
                    break;
                    case 'data-service':
                        this.activeIndex = 5;
                    break;
                    case 'success':
                        this.activeIndex = 6;
                    break;
                    case 'news':
                        this.activeIndex = 7;
                    break;
                    case 'goodness':
                        this.activeIndex = 8;
                    break;
                    default:
                        this.activeIndex = 0;
                    break;
                }
            }
        }
    },
    created() {
        this.isLoginFlag = sessionStorage.getItem('isLogin') || false;
    },
    mounted() {
	    // handleScroll为页面滚动的监听回调
		window.addEventListener('scroll', this.handleScroll);
	},
    methods: {
        //跳转页面
        jumpPageUrl(url, desc = "") {
            // 是否是京东的代运营
            let jdFlag = desc.includes("京东")
            let flag = url.includes('#')
            let urlPath = jdFlag ? 'operate-jd' : url
            !flag && this.$router.push({ path: urlPath })
        },
        //吸顶效果
        handleScroll(){
            // 得到页面滚动的距离
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop;
            this.srcollFlag = scrollTop > 10;
		},
        //移入事件
        enterEvent(index, flag) {
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
        //移出主导航
        leaveNav() {
            this.currentIndex = this.activeIndex
        },
        //移出子导航
        leaveSubNav() {
            this.moveToFlag = 0
            this.currentIndex = this.activeIndex
        },
        // 打开弹窗
        showDialog() {
            mutations.setShowDialog('true');
        }
    },
    destroyed(){
		// window.removeEventListener('scroll', this.handleScroll);
	},
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

//头部
// .pride_tab_fixed {
//     width: 100%;
//     height: 60px;
//     background-color: #fff;
//     position: relative;
// }
.header {
    width: 100%;
    height: 60px;
    background-color: #fff;
    &.issFixed {
        position: fixed;
        top:0px;
        left:0px;
        z-index: 1000;
    }
    .header-content {
        width: 1200px;
        height: 60px;
        line-height: 1;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .logo {
        width: 60px;
        position: relative;
        left: 60px;
        a {
            display: inline-block;
            width: 60px;
            line-height: 1;
            @include ct;
            img {
                width: 100%;
            }
        }
    }
    //导航区
    .nav {
        height: 100%;
        line-height: 1;
        // padding: 20px 0;
        position: relative;
        > li {
            float: left;
            min-width: 60px;
            height: 60px;
            line-height: 60px;
            padding: 0 10px;
            font-size: 16px;
            cursor: pointer;
            position: relative;
            .last-border {
                padding: 5px;
                border: 1px solid rgba(139,14,234,1);
            }
            img {
                width: 30px;
                @include center;
            }
        }
    }
    .sub-nav {
        position: absolute;
        min-width: 130px;
        top: 50px;
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
            cursor: pointer;
        }
    }
}
.active-color {
    color: red;
    & > span {
        color: red;
    }
}
.srcoll-active {
    box-shadow: 0 0 5px #888;
}
</style>

