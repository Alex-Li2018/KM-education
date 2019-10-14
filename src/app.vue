<template>
    <div>
        <!-- 头部 -->
        <header-fix></header-fix>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!-- 底部 -->
        <bottom></bottom>
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
            
        }
    }
}
</script>
<style lang="scss">
    //引入公共文件
    @import "./style/common.scss";
    @import "./style/mixin.scss";
</style>