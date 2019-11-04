<template>
    <div class="app-wrapper">
        <!-- 头部 -->
        <header-fix v-if="isShow"></header-fix>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!-- 底部 -->
        <bottom v-if="isShow"></bottom>
        <!-- 免费检查弹窗 -->
        <free-check-dialog :show="showDialogComputed"></free-check-dialog>
    </div>
</template>
<script>
import headerFix from "./page/component/header.vue";
import bottom from "./page/component/bottom.vue";
import freeCheckDialog from "./page/component/freeCheckDialog.vue";
import { store } from "./store/store";

export default {
    components: {
        headerFix,
        bottom,
        freeCheckDialog
    },
    data(){
        return {
           isShow: true 
        }
    },
    computed: {
        showDialogComputed() {
            return JSON.parse(store.showDialog);
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