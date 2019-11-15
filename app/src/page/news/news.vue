<template>
    <div class="news">
        <!-- banner -->
        <img src="../../img/news/new_01.jpg" alt="">
        <!-- 新闻中心 -->
        <section class="news-list">
            <h3>新闻中心</h3>
            <!-- nav -->
            <ul class="tab">
                <li :class="activeIndex == item.id ? 'active-index' : ''" @tap="getTitleList(item.id)" v-for="item in tabList" :key="item.id">{{ item.name }}</li>
            </ul>
            <!-- 内容 -->
            <div class="content-warper">
                <div class="content">
                    <div @click="jumpUrl(item.articleurl)" class="detail-content" v-for="item in titleList" :key="item.id">
                        <img :src="item.imgurl" alt="">
                        <div class="title">{{ item.title }}</div>
                        <div class="sub-content">{{ item.content }}</div>
                    </div>
                </div>
                <div class="pagination">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        @current-change="handleCurrentChange"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { queryArticleAPI } from '@API/article'

export default {
    data() {
        return {
            tabList: [
                {id: 0, name: '电商头条'},
                {id: 1, name: '行业新闻'},
                {id: 2, name: '电商学院'},
                {id: 3, name: '运营心德'},
            ],
            total: 1,
            currentPage: 1,
            activeIndex: 0,
            titleList: []
        }
    },
    created() {
        this.getTitleList();
    },
    methods: {
        getTitleList(id = 0) {
            this.activeIndex = id;
            let params = {
                type: id,
                pageSize: 6,
                pageIndex: this.currentPage,
            }
            queryArticleAPI(params).then(res => {
                if(res.code == 200) {
                    this.titleList = res.data.list;
                    let { pageIndex, total } = res.data.pargData;
                    this.currentPage = pageIndex;
                    this.total = total;
                }
            })
        },
        handleCurrentChange(pageindex) {
            this.currentPage = pageindex;
            this.getTitleList(pageindex)
        },
        jumpUrl(url) {
            window.open(url);
        }
    }
}
</script>

<style lang="scss" scoped>
.news {
    img {
        width: 100vw;
    }
    .news-list {
        margin-top: 50px;
        h3 {
            color: #000;
            font-size: 32px;
            width: 600px;
            height: 80px;
            border-bottom: 1px solid #e6e5e2;
            margin: 0 auto;
            text-align: center;
        }
        .tab {
            height: 35px;
            text-align: center;
            margin: 20px 0;
            display: flex;
            justify-content: center;
            li {
                margin-left: 25px;
                padding: 5px;
                font-size: 20px;
                line-height: 25px;
                height: 35px;
                box-sizing: border-box;
                &:nth-of-type(1) {
                    margin-left: 0px;
                }
            }
        }
        .content-warper {
            background-color: #f8f7f6;
        }
        .content {
            width: 100vw;
            // height: 750px;
            display: flex;
            padding: 20px 350px 0;
            background-color: #f8f7f6;
            .detail-content {
                width: 350px;
                height: 420px;
                background-color: #fff;
                margin: 0 20px 20px 0; 
                img {
                    height: 210px;
                    width: 100%;
                }
                .title {
                    font-size: 18px;
                    line-height: 20px;
                    font-color: #000;
                    font-weight: 600;
                    margin: 30px 0 20px;
                    text-align: center;
                }
                .sub-content {
                    height: 120px;
                    padding: 0 30px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 4;
                    overflow: hidden;
                    line-height: 30px;
                }
            }
        }
        .pagination {
            padding: 20px 0;
            text-align: center;
        }
    }
}
.active-index {
    background-color: #ff3004;
}
</style>

