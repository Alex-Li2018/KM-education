<template>
    <div class="banner">
        <!-- 底部导航 -->
        <section class="nav">
            <span>文章管理</span>
        </section>
        <!-- 表单 -->
        <div class="sub-tit">上传文章信息</div>
        <div class="banner-form">
          <el-form :model="ruleForm" 
            status-icon :rules="rules" 
            ref="ruleForm" 
            label-width="100px" 
            class="demo-ruleForm">
            <el-form-item label="名称" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="概要" prop="content">
              <el-input v-model="ruleForm.content"></el-input>
            </el-form-item>
            <el-form-item label="文章链接" prop="articleurl">
              <el-input v-model="ruleForm.articleurl"></el-input>
            </el-form-item>
            <el-form-item label="类型">
              <el-select v-model="ruleForm.type" placeholder="请选择类型">
                <el-option label="电商头条" value="0"></el-option>
                <el-option label="行业新闻" value="1"></el-option>
                <el-option label="电商学院" value="2"></el-option>
                <el-option label="行业新闻" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="上传图片">
              <!-- 上传 -->
              <el-upload
                class="upload-demo"
                :limit="1"
                :action="action"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :before-upload="handleBeforeUpload"
                list-type="picture"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能单个上传jpg/png/gif/jpeg文件，且不超过1M</div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="line"></div>
        <!-- 表格 -->
        <div class="sub-tit">文章信息列表</div>
        <div class="table-box">
          <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                  prop="title"
                  label="名称"
                  width="200">
              </el-table-column>
              <el-table-column
                  prop="content"
                  label="概要">
                  <template slot-scope="scope">
                    <span>{{ scope.row.content }}</span>
                  </template>
              </el-table-column>
              <el-table-column
                  prop="type"
                  label="类型"
                  width="180">
                  <template slot-scope="scope">
                    <span>{{ scope.row.type | typeFilter }}</span>
                  </template>
              </el-table-column>
              <el-table-column
                  label="图片地址"
                  prop="imgurl">
                  <template slot-scope="scope">
                    <img style="height: 400px; width: 400px" :src="scope.row.imgurl" />
                  </template>
              </el-table-column>
              <el-table-column
                  label="图片地址"
                  prop="articleurl">
                  <template slot-scope="scope">
                    <a class="a-href" :href="scope.row.articleurl">{{ scope.row.articleurl }}</a>
                  </template>
              </el-table-column>
              <el-table-column
                  prop="createdtime"
                  label="创建时间"
                  width="180">
                  <template slot-scope="scope">
                    <span>{{ new Date(parseInt(scope.row.createdtime)).toLocaleDateString() }}</span>
                  </template>
              </el-table-column>
              <el-table-column
                label="操作"
                width="200">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="updateRow(scope.row.id)"
                    type="danger" 
                    plain
                    size="small">删除</el-button>
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
        <!-- 图片预览框 -->
        <div class="preview-img-bg" @click="closedHideBg" v-if="dialogVisible">
          <div class="preview-img">
            <img :src="imgSrc" />
          </div>
        </div>
    </div>
</template>

<script>
import { ArticleAPI, queryArticleAPI, deleteArticleAPI } from '@API/article'

export default {
    data() {
      return {
        action: '',
        dialogVisible: false,
        fileList: [],
        ruleForm: {
          articleurl: '',
          title: '',
          imgurl: '',
          content: '',
          type: '0'
        },
        pageSize: 20,
        currentPage: 1,
        total: 0,
        rules: {
          articleurl: [
            { required: true, message: '请输入文章链接', trigger: 'blur' },
          ],
          title: [
            { required: true, message: '请输入文章名称', trigger: 'blur' },
          ],
          content: [
            { required: true, message: '请输入文章概要', trigger: 'blur' },
          ]
        },
        imgSrc: '',
        tableData: []
      };
    },
    created() {
      this.action = process.env.NODE_ENV == 'development' ? '/api/upload/img' : '/upload/img';
      this.getTableData();
    },
    filters: {
      typeFilter: function (value) {console.log(value)
        switch(value) {
          case 0:
            return '电商头条'
          break;
          case 1:
            return '行业新闻'
          break;
          case 2:
            return '电商学院'
          break;
          case 3:
            return '行业新闻'
          break;
        }     
      }
    },
    methods: {
      //是否禁用
      updateRow(id) {
        let params = {
	        "id": id
        }
        deleteArticleAPI(params).then(res => {
          if(res.code == 200) {
            this.$notify.success({
              title: '成功',
              message: '删除文章成功!'
            });
            this.getTableData();
          } else {
            this.$notify.error({
              title: '失败',
              message: '删除文章失败!'
            });
          }
        })
      },
      handleSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.getTableData();   
      },
      handleCurrentChange(pageindex) {
        this.currentPage = pageindex;
        this.getTableData();
      },
      //获取table数据
      getTableData() {
        let params = {
          pageSize: this.pageSize,
          pageIndex: this.currentPage,
          type: 'all'
        }
        
        queryArticleAPI(params).then(res => {
          if(res.code == 200) {
            this.tableData = res.data.list;
            let { pageIndex, pageSize, total } = res.data.pargData;
            this.currentPage = pageIndex;
            this.pageSize = pageSize;
            this.total = total;
          }
        })
      },
      //提交表单
      submitForm(formName) {
        if(!this.fileList.length) {
          this.$notify.error({
            title: '错误',
            message: '请上传文章图片!'
          });
          return false;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 处理fileList
            let fileList = []
            this.fileList.map(_ => {
              fileList.push(_.url)
            })
            let params = {
              imgurl: fileList.toString(), 
              type: this.ruleForm.type, 
              articleurl: this.ruleForm.articleurl,
              title: this.ruleForm.title,
              content: this.ruleForm.content
            }
            ArticleAPI(params).then(res => {
              if(res.code == 200) {
                this.$notify({
                  title: '成功',
                  message: '数据新增成功',
                  type: 'success'
                });
                this.$refs['ruleForm'].resetFields();
                this.fileList = [];
                this.getTableData();
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //上传部分
      handleSuccess(response, file, fileList) {
        let { code, data } = response;
        if(code == 200) {
          this.fileList = fileList.map(_ => {
            return {
              name: _.name,
              url: process.env.NODE_ENV == 'development' ? `api${data.url}` : `${data.url}`
            }
          })
        }
      },
      handleRemove(file, fileList) {
        this.fileList = fileList
      },
      handlePictureCardPreview(file) {
        let { response } = file;
        if(response.code == 200) {
          this.imgSrc = `api${response.data.url}`;
          this.dialogVisible = true;
        }
      },
      // 类型检测
      handleBeforeUpload(file) {
        let { size, name } = file;
        let vaildFlag = false;
        const type = ['png', 'jpg', 'jpeg', 'gif'];
        const rule = [
          {vaild: size / 1024 / 1024 < 1, err: '图片大小超过1M'},
          {vaild: type.includes(name.split(".")[1]), err: '图片格式错误'}
        ]
        //校验
        for(let item of rule) {
          // 校验不通过
          if(!item.vaild) {
            this.$notify.error({
              title: '错误',
              message: item.err
            });
            vaildFlag = true;
            break;
          }
        }

        if(vaildFlag) return false
      },
      // 关闭遮罩
      closedHideBg() {
        this.dialogVisible = false;
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

.banner {
  padding-bottom: 50px;
  .block {
    margin: 30px 0;
    text-align: right;
  }
  .banner-form {
    // margin: 0 auto;
    // box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .line {
    height: 2px;
    width: 100%;
    margin-left: 40px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e9e8;
  }
  .sub-tit {
    line-height: 16px;
    font-size: 16px;
    padding-left: 15px;
    position: relative;
    left: 40px;
    margin-bottom: 30px;
    &:before {
        content: "";
        width: 5px;
        background: #00b4e0;
        display: inline-block;
        height: 16px;
        position: absolute;
        left: 0;
    }
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
  .banner-form {
    width: 600px;
    ::v-deep .el-upload--picture-card {
      width: 600px;
    }
  }
  .preview-img-bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2000;
    width: 100vw;
    background: rgba(0,0,0,.5); 
    .preview-img {
      width: 100vw;
      height: 100vh;
      position: relative;
      img {
        max-width: 500px;
        @include center;
      }
    }
  }
}
.table-box {
  margin-left: 40px;
}
.a-href {
  color: #00b4e0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>