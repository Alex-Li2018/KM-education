<template>
    <div class="app-wrapper">
        <!-- 头部 -->
        <header-fix v-if="isShow"></header-fix>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!-- 底部 -->
        <bottom v-if="isShow"></bottom>
    </div>
</template>
<script>
import headerFix from "./page/component/header.vue";
import bottom from "./page/component/bottom.vue";

export default {
    components: {
        headerFix,
        bottom
    },
    data(){
        return {
           isShow: true 
        }
    },
    watch: {
        $route(newVal) {
            this.isShow = newVal.meta.admin ? false : true;
        }
    }
}
</script>
<style lang="scss">
    //引入公共文件
    @import "./style/common.scss";
    @import "./style/mixin.scss";
    .app-wrapper {
        overflow-x: hidden;
    }
</style>