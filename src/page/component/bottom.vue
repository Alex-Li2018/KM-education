<template>
    <footer class="bottom"> 
        <section class="content clear">
            <!-- 代运营 -->
            <ul class="sub-nav" >
                <li v-for="(con,num) in operationList" :key="num">{{ con }}</li>
            </ul>
            <!-- 运营推广 -->
            <ul class="sub-nav" >
                <li v-for="(con,num) in spreadList" :key="num" >{{ con }}</li>
            </ul>
            <!-- 联系我们 -->
            <ul class="sub-nav" >
                <li v-for="(con,num) in concatusList" :key="num">{{ con }}</li>
            </ul>
        </section>
        <!-- 二维码 -->
        <section class="qr-code">
            <img src="../../img/other/qr-code.jpg" alt="">
            <h3>24小时微信在线</h3>
        </section>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            operationList: [ "网络代运营","淘宝代运营", "天猫代运营", "拼多多代运营", "京东代运营", "直通车代运营"], //代运营
            //运营推广
            spreadList: ["营运推广","店铺诊断","打造爆款","电商设计","直通车托管","店铺代入驻"],
            //联系我们
            concatusList: ["联系我们","电话: 17188388380","微信: cctt23456", "QQ: 610351996", "地址: 四川省成都市新都区斑竹园镇北欧3G广场3栋11楼11号"],
        }
    }
}
</script>

<style lang="scss" scoped>
.bottom {
    margin: 0px auto;
    width: 100%;
    background-color: #ff4200;
    letter-spacing: 2px;
    .content {
        padding: 40px 0; 
        display: flex;
        justify-content: center;
        ul {
            float: left;
            margin-left: 120px;
            &:nth-of-type(1) {
                margin-left: 0;
            }
        }
    }
    li {
        color: #fff;
        font-size: 16px;
        line-height: 30px;
        max-width: 250px;
        word-break: break-all;
        word-wrap: break-word;
        &:nth-of-type(1) {
            font-size: 25px;
            font-weight: 600;
            margin-bottom: 10px;
            line-height: 40px;
        }
    }
    .qr-code {
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
        img {
            height: 100px;
        }
        h3 {
            line-height: 100px;
            margin-left: 20px;
            color: #fff;
            font-size: 30px;
            font-weight: 600;
            letter-spacing: 5px;
        }
    }
}
</style>

