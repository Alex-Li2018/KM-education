<template>
    <div class="plane-design">
        <!-- 3张图片 -->
        <img :src="imgArr[0]" />
        <img :src="imgArr[1]" />
        <img :src="imgArr[2]" />
        <!-- 服务内容 -->
        <section class="service-content">
            <div class="title">
                <h3 class="tit">项目服务内容</h3>
                <h3 class="sub-tit">专业设计,为店铺设计最合适的展示</h3>
            </div>
            <!-- sub  -->
            <ul class="sub-content">
                <li v-for="item in subContent" :key="item.id">
                    <div class="left">{{ item.con }}</div>
                    <div class="right">
                        <span>{{ item.subCon }}</span>
                    </div>
                </li>
            </ul>
        </section>
        <!-- 其他 -->
        <section class="other-service">
            <h3>{{"其他单品设计&装修服务"}}</h3>
            <ul class="sub-content">
                <li v-for="item in otherService" :key="item.id">{{ item.name }}</li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subContent: [
                {id: 0, con: '店铺首页设计', subCon: '人性化设计,首页良好的用户体验让买家进入店铺之后“没法”出去,流量不断地循环,提高店铺的投入产出比。'},
                {id: 0, con: '店招设计', subCon: '店招等于人的脸面，一个好的店招给顾客留下深刻的印象，从而提高回访率。'},
                {id: 0, con: '首页海报设计', subCon: '首页轮播热销产品或新品或推广产品海报，用个性化设计加上精湛技术的精美优化来达到视觉冲击力，综合明确显明的主题达到视觉重点力，来提高宝贝转化力。'},
                {id: 0, con: '详情页模板设计', subCon: '详情页是客户进入你店铺的主通道，描述风格，关联促销极其重要，我们通过专业分析，紧抓受众心理特点，提炼产品卖点，设计人性化版块，提升客户的购物体验，提高停留时间，提高访问深度，提高转化率。'},
                {id: 0, con: '主图设计', subCon: '首页产品主图展示，等于店铺橱窗位，展示产品的更美状态加以专业设计提高点击欲望。'},
            ],
            otherService: [
                {id: 0, name: '主图'},
                {id: 1, name: '砖展图'},
                {id: 2, name: '海报'},
                {id: 3, name: '详情页'},
                {id: 4, name: '模板装修'},
                {id: 5, name: '精修图'},
                {id: 6, name: '关联销售'},
                {id: 7, name: '店招'},
                {id: 8, name: '店铺logo'},
            ],
            imgArr: [
                'static/show-img/plane_01.jpg',
                'static/show-img/plane_02.jpg',
                'static/show-img/plane_03.jpg',
            ]
        }
    },
    created() {
        this.imgArr = this.imgArr.map(_ => {
            if(process.env.NODE_ENV == 'development') {
                _ = `api/${_}`
            }
            return _;
        })
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

.plane-design {
    img {
        width: 100vw;
    }
}
.service-content {
    background-color: #f7f6f5;
    .title {
        padding: 50px 0 0;
        h3 {
            text-align: center;
        }
        .tit {
            font-size: 35px;
            color: #ff1e00;
        }
        .sub-tit {
            margin-top: 20px;
            font-size: 25px;
            color: #424342;
        }
    }
    .sub-content {
        // height: 100px;
        // width: 100vw;
        padding: 30px 0 50px;
        background-color: #f7f6f5;
        li {
            margin: 0 auto;
            width: 1050px;
            height: 100px;
            margin-top: 20px;
        }
        .left {
            height: 100%;
            line-height: 100px;
            text-align: center;
            width: 225px;
            background-color: #ff1e00;
            font-size: 20px;
            color: #fff;
            font-weight: 600;
        }
        .right {
            height: 100%;
            text-align: left;
            width: 825px;
            background-color: #efeeec;
            position: relative;
            span {
                @include ct;
                margin: 0 50px;
                word-wrap:break-word;
            }
        }
    }
}
.other-service {
    h3 {
        margin: 50px 0;
        font-size: 35px;
        color: #ff1e00;
        text-align: center;
    }
    ul {
        width: 800px;
        height: 300px;
        margin: 50px auto;
        // margin-bottom: 50px;
    }
    li {
        width: 250px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        margin-right: 15px;
        margin-top: 15px;
        float: left;
        background-color: #f7f6f5;
        color: #8a8681;
        font-size: 20px;
        font-weight: 600;
        // border: 1px solid #ccc;
    }
}
</style>
