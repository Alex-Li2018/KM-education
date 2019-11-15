<template>
    <div class="free-check">
        <!-- 底部导航 -->
        <section class="nav">
            <span>免费诊断数据</span>
        </section>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                prop="username"
                label="名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="concatlink"
                label="联系方式"
                width="180">
            </el-table-column>
            <el-table-column
                prop="shopname"
                label="店铺名称">
            </el-table-column>
            <el-table-column
                prop="shopplatform"
                label="店铺平台">
                <template slot-scope="scope">
                  <span>{{ scope.row.shopplatform | filterShopplatform }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="wantservice"
                label="想要的服务">
                <template slot-scope="scope">
                  <span>{{ scope.row.wantservice | filterWantservice }}</span>
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
import { queryfreeCheckAPI } from '@API/free-check'

export default {
    data() {
        return {
            tableData: [],
            pageSize: 20,
            currentPage: 1,
            total: 0,
        }
    },
    filters: {
      filterShopplatform: function (value) {
        switch(value) {
          case 0:
            return '淘宝'
          break;
          case 1:
            return '天猫'
          break;
          case 2:
            return '京东'
          break;
          case 3:
            return '拼多多'
          break;
          case 4:
            return '阿里巴巴'
          break;
        }     
      },
      filterWantservice(value) {
        switch(value) {
          case 0:
            return '网点运营推广'
          break;
          case 1:
            return '店铺装修设计'
          break;
          case 2:
            return '直通车/砖展'
          break;
          case 3:
            return '店铺诊断'
          break;
          case 4:
            return '打造爆款'
          break;
          case 5:
            return '其他'
          break;
        } 
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
            queryfreeCheckAPI(params).then(res => {
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
.free-check {
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