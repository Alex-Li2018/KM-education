<template>
    <section class="data-service">
        <!-- banner -->
        <section class="banner">
            <img src="../../img/data-service/data-service-banner.jpg" alt="">
        </section>
        <!-- reason -->
        <img class="reason" src="../../img/data-service/data-service_02.jpg" />
        <!-- do anything -->
        <section class="do-anything">
            <h2 class="title">
                <span><em>柯明教育</em>能为你做什么</span>             
            </h2>
            <!-- 内容 -->
            <section class="content">
                <section class="left">
                    <ul v-for="(val,index) in doAnthingList.left" :key="index">
                        <li>
                            <span>{{ val.item }}</span>
                            <span>{{ val.subItem }}</span>
                        </li>
                    </ul>
                </section>
                <section class="center">
                    <img src="../../img/data-service/data-service-logo.jpg" alt="">
                </section>
                <section class="right">
                    <ul v-for="(val,index) in doAnthingList.right" :key="index">
                        <li>
                            <span>{{ val.item }}</span>
                            <span>{{ val.subItem }}</span>
                        </li>
                    </ul>
                </section>
            </section>
            <!-- 方案 -->
            <section class="plane">
                <h2>
                    <span>为您<em>量身定制</em>直通车推广方案</span>
                </h2>
                <section class="plane-content">
                    <ul>
                        <li v-for="(item, index) in planeLsit" :key="index">
                            <img :src="item.src" />
                            <span>{{ item.tit }}</span>
                        </li>
                    </ul>
                </section>
            </section>
            <!-- 直通车 -->
            <section class="through-train">
                <h2>
                    <span>我们提供<em>一对一</em>的直通车操作服务</span>
                </h2>
                <section class="through-train-content">
                    <ul>
                        <li v-for="(item, index) in throughTrainList" 
                            :key="index"
                            :class="animateId == index ? 'breathing-light' : ''"
                            @mouseenter="breathingLightEnter(index)" 
                            @mouseleave="breathingLightleave">
                            <h3>{{ item.tit }}</h3>
                            <p class="line"></p>
                            <p class="desc">{{ item.desc }}</p>
                        </li>
                    </ul>
                </section>
            </section>
            <!-- 七步法 -->
            <section class="senven-step">
                <h2>
                    <span><em>新版七步流程法,</em>让店家玩转直通车</span>
                </h2>
                <section class="senven-step-content">
                    <ul>
                        <li v-for="(item,index) in senvenStepList" :key="index">
                            <div class="top">
                                <h3>{{ item.tit }}</h3>
                                <h4>{{ item.subTit }}</h4>
                                <p class="line"></p>
                            </div>
                            <div class="bottom">
                                <p v-for="(val,num) in item.step" :key="num">{{ val.desc }}</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
import breathingLightMixin from "../../mixin/breathing-light.js"

export default {
    mixins: [breathingLightMixin],
    data() {
        return {
            doAnthingList: {
                left: [
                    {item: '精准引流', subItem: '引入精准流量锁定目标人群'},
                    {item: '全店推广', subItem: '全域推广店铺,品牌宣传,全网引流'},
                    {item: '潜力培养', subItem: '不断为下一款爆款做准备'},
                ],
                right: [
                    {item: '爆款打造', subItem: '真正把店铺最优宝贝打造成爆款'},
                    {item: '库存清仓', subItem: '清仓过季宝贝,降低运营风险'},
                    {item: '提高销量', subItem: '宝贝主要推广工具,提高整店销售额'},
                ]
            },
            planeLsit: [
                { src: require("../../img/data-service/icon/icon_01.png"), tit: "团队拥有丰富的直通车运营经验,洞悉电子商务发展趋势" },
                { src: require("../../img/data-service/icon/icon_02.png"), tit: "全面的市场分析人员通过数据分析,选择优质推广宝贝" },
                { src: require("../../img/data-service/icon/icon_03.png"), tit: "结合买家搜索行为以及淘宝搜索规律,选择关键词" },
                { src: require("../../img/data-service/icon/icon_04.png"), tit: "在直通车的运营推广,技术搜索优先领域具备核心竞争" },
                { src: require("../../img/data-service/icon/icon_05.png"), tit: "由全面的淘宝直通车推广团队快速定制个性化方案" },
            ],
            throughTrainList: [
                { tit: '量身定做', desc: '我们根据店铺的类目以及经营状况,制定一套适合店铺发展的方案'},
                { tit: '宝贝推广', desc: '推广宝贝的分析与选择,结合行业热销产品以及店铺的具体情况,选择推宝贝,规划预算'},
                { tit: '分析调价', desc: '我们拥有一套完善的,多维度的直通车调整思路,会根据不同时期的推广状况,具体分析调价'},
                { tit: 'SEO优化', desc: '根据宝贝的推广状况不断优化推广标题,定制优质创意'},
                { tit: '精准选词', desc: '我们拥有亿万级一词库,会为每个宝贝添加优质精准关键词,并且合理出价'},
                { tit: '宝贝诊断', desc: '我们根据宝贝的推广效果给与改善建议,同时也会给与还款以及预算调整建议'},
            ],
            senvenStepList: [
                { tit: '第一步', subTit: '选款', step: [{desc: '1.热销属性'},{desc: '2.市场竞争分析'},{desc: '3.款式基础点击率'},{desc: '4.咨询与成交分析'},{desc: '5.售后与反馈分析'}] },
                { tit: '第二步', subTit: '基础优化', step: [{desc: '1.标题优化'},{desc: '2.价格定位'},{desc: '3.基础销量'},{desc: '4.共计评分'},{desc: '5.详情页优化'}] },
                { tit: '第三步', subTit: '挖词', step: [{desc: '1.挖掘相关关键词'},{desc: '2.筛选精准关键词'},{desc: '3.添加关键词'}] },
                { tit: '第四步', subTit: '基础设置', step: [{desc: '1.日限额设置'},{desc: '2.投放平台设置'},{desc: '3.投放时间设置'},{desc: '4.投放区域设置'}] },
                { tit: '第五步', subTit: '创意', step: [{desc: '1.创意主图设计'},{desc: '2.创意点击率设置'}] },
                { tit: '第六步', subTit: '关键词拓展', step: [{desc: '1.挖掘高转换词的相关词'},{desc: '2.添加一些低竞争飙升词'}] },                
                { tit: '第七步', subTit: '优化关键词', step: [{desc: '1.关键词的提升,降价操作'},{desc: '2.关键词的删除,添加操作'},{desc: '3.关键词的匹配方式修改'}] }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

@mixin flex-between {
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
@mixin title {
    font-size: 32px;
    font-weight: 600;
    line-height: 35px;
    text-align: center;
    letter-spacing: 2px;
}
@mixin emStyle {
    font-style: normal;
    color: #ff4200;
}
.data-service {
   .banner {
        img {
           width: 100vw;
        }
   } 
   .reason {
       width: 100vw;
   }
   .do-anything {
       .title {
            margin: 20px auto 50px;
            @include title;
            em {
                @include emStyle; 
            }
        } 
        .content {
            display: flex;
            justify-content: center;
            align-items: center;
            .center {
                margin: 0 20px;
            }
            .left {
                text-align: right;
                @include flex-between;
            }
            .right {
                text-align: left;
                @include flex-between;
            }
            li {
                span {
                    width: 300px;
                    height: 40px;
                    line-height: 40px;
                    display: block;
                    &:nth-of-type(1) {
                        font-size: 25px;
                        color: #ff4200;
                        border-bottom: 1px solid #c7c7c7;
                    }
                    &:nth-of-type(2) {
                        font-size: 18px;
                    }
                }
            }     
        }
   }
   .plane {
        margin: 100px auto 50px;
        h2 {
            margin: 20px auto 50px;
            @include title;
            em {
                @include emStyle;
            }
        }
        .plane-content {
            padding: 0 100px;
            ul {
                // width: 100vw;
                display: flex;
                margin: 0 auto;
                justify-content: space-between;
                li {
                    display: inline-block;
                    width: 180px;
                    height: 180px;
                    border-radius: 50%;
                    border: 1px solid #e7e7e7;
                    // margin-left: 50px;
                    text-align: center;
                    position: relative;
                    background-color: #f5f5f5;
                    transition: all .2s;
                    img {
                        width: 44px;
                        padding-top: 20px;
                    }
                    span {
                        display: block;
                        width: 160px;
                        margin-top: 15px;
                        @include cl;
                    }
                }
            }
        }
   }
   .through-train {
        margin: 100px auto 50px;
        h2 {
            margin: 20px auto 50px;
            @include title;
            em {
                @include emStyle;
            }
        }
        .through-train-content {
            padding: 0 100px;
            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            li {
                width: 290px;
                height: 120px;
                padding: 40px 20px;
                box-sizing: content-box;
                text-align: center;
                margin: 10px 0 30px 10px;
                position: relative;
                letter-spacing: 2px;
                &:nth-of-type(2n + 1) {
                    background-color: #fae3db;
                }
                &:nth-of-type(2n) {
                    background-color: #eeeeee;
                }
                h3 {
                    font-size: 25px;
                    font-weight: bold;
                    line-height: 40px;
                }
                .desc {
                    font-size: 18px;
                    line-height: 25px;
                    margin-top: 15px;
                }
                .line {
                    width: 30px;
                    height: 2px;
                    background-color: #fb4104;
                    @include cl;
                }
            }
        }
   }
   .senven-step {
        margin: 100px auto 50px;
        h2 {
            margin: 20px auto 50px;
            @include title;
            em {
                @include emStyle;
            }
        }
        .senven-step-content {
            padding: 0 100px;
            ul {
                display: flex;
                justify-content: space-between;
            }
            li {
                text-align: center;
                width: 150px;
                border: 1px solid #fb4104;
                // margin-left: 20px;
                // &:nth-of-type(1) {
                //     margin-left: 0;
                // }
                .top {
                    background-color: #f5f5f5;
                    font-size: 20px;
                    font-weight: 600;
                    padding: 50px 0 40px;
                    position: relative;
                    h3 {
                        line-height: 30px;
                    }
                    h4 {
                        line-height: 30px;
                    }
                    .line {
                        width: 30px;
                        height: 2px;
                        background-color: #fb4104;
                        margin-top: 5px;
                        @include cl;
                    }
                }
                .bottom {
                    background-color: #fbe7e0;
                    padding: 40px 0;
                    font-size: 16px;
                    height: 260px;
                    p {
                        padding: 0 5px;
                        line-height: 30px;
                        text-align: left;
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


