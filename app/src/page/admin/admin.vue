<template>
    <div class='admin'>
        <!-- 头部导航 -->
        <section class="header-nav header-fixed">
            <!-- <section class="header-fixed"> -->
                <h1 class="logo" @click="jumpUrl('/home')">
                    <!-- <router-link to="/home"> -->
                        <img src="../../img/banner/logo.png" />
                    <!-- </router-link> -->
                </h1>
                <ul>
                    <li v-for="item in menuList" :key="item.id" @click="jumpUrl(item.url)">
                        <!-- <router-link :to="item.url"> -->
                            <span>{{ item.menuName }}</span>
                        <!-- </router-link> -->
                    </li>
                </ul>
            <!-- </section> -->
        </section>
        <section class="header-nav"></section>
        <!-- 内容 -->
        <section class="content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </section>
        <!-- 底部 -->
        <footer class="footer">
            版权所有 © 孵化园工作室 2019 保留一切权利。
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                {id: 0, menuName: '免费诊断数据', url: 'free-check' },
                {id: 1, menuName: '店铺入驻数据', url: 'store-entry' },
                {id: 2, menuName: '用户管理', url: 'user'},
                {id: 3, menuName: '文章管理', url: 'article'},
                {id: 4, menuName: '轮播图管理', url: 'banner'},
            ],
            navTitle: ''
        }
    },
    methods: {
        jumpUrl(url) {
            url && this.$router.push({ path: url })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
.admin {
    width: 100vw;
    min-height: 100vh;
}
.header-fixed {
    position: fixed;
    top: 0;
    z-index: 999;
}
.header-nav {
    width: 100vw;
    height: 60px;
    line-height: 1;
    margin: 0 auto;
    display: flex;
    align-items: center;
    // background-color: #ff2700;
    border-bottom: 1px solid #ebebeb;
    // box-shadow: 0 0 5px #888;
    background: linear-gradient(-180deg, #00b4e0 0, #00afda 100%);
     .logo {
        width: 60px;
        position: absolute;
        margin-left: 30px;
        img {
            width: 100%;
            display: inline-block;
            width: 60px;
            line-height: 1;
            @include ct;
        }
    }
    ul {
        height: 100%;
        line-height: 1;
        padding-left: 125px;
        > li {
            float: left;
            min-width: 60px;
            height: 60px;
            line-height: 60px;
            padding: 0 10px;
            font-size: 16px;
            cursor: pointer;
            span {
                // color: #ff2700;
                color: #fff;
                font-weight: 500;
            }
        }
    }
}
.content {
    margin-top: 50px;
    padding: 0 30px;
    min-height: calc(100vh - 160px);
}
.footer {
    box-sizing: border-box;
    position: relative;
    border-top: 1px solid #e2e2e2;
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    color: #7c7c7c;
    background-color: #f1f1f1;
    width: 100%;
    bottom: 0;
    font-size: 12px;
}
</style>
