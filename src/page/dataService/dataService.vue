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
        </section>
    </section>
</template>

<script>
export default {
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
                { src: require("../../img/data-service/icon/icon_03.png"), tit: "团队拥有丰富的直通车运营经验,洞悉电子商务发展趋势" },
                { src: require("../../img/data-service/icon/icon_03.png"), tit: "全面的市场分析人员通过数据分析,选择优质推广宝贝" },
                { src: require("../../img/data-service/icon/icon_03.png"), tit: "结合买家搜索行为以及淘宝搜索规律,选择关键词" },
                { src: require("../../img/data-service/icon/icon_03.png"), tit: "在直通车的运营推广,技术搜索优先领域具备核心竞争" },
                { src: require("../../img/data-service/icon/icon_03.png"), tit: "由全面的淘宝直通车推广团队快速定制个性化方案" },
            ]
        }
    },

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
            ul {
                // width: 100vw;
                // display: flex;
                margin: 0 auto;
                li {
                    display: inline-block;
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    border: 1px solid #e7e7e7;
                    margin-left: 50px;
                    text-align: center;
                    position: relative;
                    background-color: #f5f5f5;
                    img {
                        width: 100px;
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
}
</style>


