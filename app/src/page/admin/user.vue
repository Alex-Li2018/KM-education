<template>
    <div class="user">
        <!-- 底部导航 -->
        <section class="nav">
            <span>用户管理</span>
        </section>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                prop="username"
                label="用户名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="nickname"
                label="昵称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="createtime"
                label="创建时间">
                <template slot-scope="scope">
                  <span>{{ scope.row.createtime &&　new Date(parseInt(scope.row.createtime)).toLocaleDateString() }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="state"
                label="角色">
                <template slot-scope="scope">
                  <span>{{ scope.row.state | filterState }}</span>
                </template>
            </el-table-column>
            <el-table-column
              label="操作"
              width="200">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.row)"
                  type="danger" 
                  plain
                  size="small">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { queryUserAPI, deleteUserAPI } from '@API/login'

export default {
    data() {
        return {
            tableData: [],
            pageSize: 5,
            currentPage: 1,
            total: 0,
        }
    },
    filters: {
       filterState(newVal) {
           return !newVal ? '普通用户' : '超级管理员';
       } 
    },
    created() {
        this.queryList();
    },
    methods: {
        deleteRow(data) {
            let { nickname, username } = data;
            let params = {
                nickname,
	            username
            }
            deleteUserAPI(params).then(res => {
                if(res.code == 200) {
                    this.$notify.success({
                        title: '成功',
                        message: '删除用户成功!'
                    });
                    this.queryList();
                } else {
                   this.$notify.error({
                        title: '失败',
                        message: '超级管理员不能被删除!'
                    }); 
                }
            })
        },
        handleSizeChange(pageSize) {
            this.pageSize = pageSize;
            this.queryList();   
        },
        handleCurrentChange(pageindex) {
            this.currentPage = pageindex;
            this.queryList();
        },
        queryList() {
            queryUserAPI().then(res => {
                if(res.code == 200) {
                    this.tableData = res.data;
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.user {
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