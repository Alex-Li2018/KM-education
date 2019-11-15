<template>
    <div class="store-entry">
        <!-- 底部导航 -->
        <section class="nav">
            <span>店铺入驻数据</span>
        </section>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                prop="production"
                label="产品名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="phoneNum"
                label="手机号码"
                width="180">
            </el-table-column>
            <el-table-column
                prop="link"
                label="联系方式">
            </el-table-column>
            <el-table-column
                label="创建时间">
                <template slot-scope="scope">
                  <span>{{ scope.row.createdtime &&　new Date(parseInt(scope.row.createdtime)).toLocaleDateString() }}</span>
                </template>
            </el-table-column>
        </el-table>
         <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { queryStoreEntryAPI } from '@API/store-entry'

export default {
    data() {
        return {
            tableData: [],
            pageSize: 20,
            currentPage: 1,
            total: 0,
        }
    },
    created() {
        this.queryList();
    },
    methods: {
        handleSizeChange(pageSize) {
            this.pageSize = pageSize;
            this.queryList();   
        },
        handleCurrentChange(pageindex) {
            this.currentPage = pageindex;
            this.queryList();
        },
        queryList() {
            let params = {
                pageSize: this.pageSize,
                pageIndex: this.currentPage
            }
            queryStoreEntryAPI(params).then(res => {
                if(res.code == 200) {
                    this.tableData = res.data.list;
                    let { pageIndex, pageSize, total } = res.data.pargData;
                    this.currentPage = pageIndex;
                    this.pageSize = pageSize;
                    this.total = total;
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.store-entry {
    .block {
        margin: 30px 0;
        text-align: right;
    }
    .nav {
        font-family: MicrosoftYaHei-Bold;
        margin-bottom: 40px;
        // border-radius: 10px;
        color: #1d1e28;
        height: 60px;
        line-height: 60px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.08);
        width: 100%;
        box-sizing: border-box;
        padding-left: 30px;
        span {
          font-weight: 600;
          font-size: 18px;
        }
    }
}
</style>