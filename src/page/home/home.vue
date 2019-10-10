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
        <!-- 热点服务 -->
        <section class="hot-service">

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
                imgArr: [
                    {id: 1, src: require("../../img/banner/operate.jpg")},
                    {id: 2, src: require("../../img/banner/tCat.jpg")},
                    {id: 3, src: require("../../img/banner/eTrain.jpg")},
                    {id: 4, src: require("../../img/banner/freeCheck.jpg")},
                    {id: 5, src: require("../../img/banner/design.jpg")}
                ], //图片数据
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
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