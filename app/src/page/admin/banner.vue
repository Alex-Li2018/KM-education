<template>
    <div class="banner">
        <!-- 底部导航 -->
        <section class="nav">
            <span>轮播图管理</span>
        </section>
        <!-- 表单 -->
        <div class="sub-tit">上传banner图片</div>
        <div class="banner-form">
          <el-form :model="ruleForm" 
            status-icon :rules="rules" 
            ref="ruleForm" 
            label-width="100px" 
            class="demo-ruleForm">
            <el-form-item label="名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="类型">
              <el-select v-model="ruleForm.type" placeholder="请选择类型">
                <el-option label="首页" value="index"></el-option>
                <el-option label="京东" value="jingdong"></el-option>
                <el-option label="淘宝" value="taobao"></el-option>
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
                list-type="picture">
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
        <div class="sub-tit">banner图片信息列表</div>
        <div class="table-box">
          <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                  prop="name"
                  label="名称"
                  width="200">
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
                  label="图片"
                  prop="banner_url">
                  <template slot-scope="scope">
                    <img style="max-height: 200px; max-width: 60px;" :src="scope.row.banner_url" />
                  </template>
              </el-table-column>
              <el-table-column
                  prop="create_time"
                  label="创建时间"
                  width="180">
                  <template slot-scope="scope">
                    <span>{{ new Date(parseInt(scope.row.create_time)).toLocaleDateString() }}</span>
                  </template>
              </el-table-column>
              <el-table-column
                  label="状态"
                  prop="state"
                  width="100">
                  <template slot-scope="scope">
                    <el-tag
                      :type="scope.row.state ? 'success' : 'info'">
                      {{scope.row.state ? '激活' : '禁用'}}
                    </el-tag>
                  </template>
              </el-table-column>
              <el-table-column
                label="操作"
                width="200">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="updateRow(scope.row.id, 0)"
                    type="danger" 
                    plain
                    size="small">禁用</el-button>
                    <el-button
                    @click.native.prevent="updateRow(scope.row.id, 1)"
                    type="success" 
                    plain
                    size="small">开启</el-button>
                </template>
              </el-table-column>
          </el-table>
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
import { queryUserAPI } from '@API/login'
import { insertBannerAPI, queryBannerAPI, upadteBannerAPI } from '@API/banner'

export default {
    data() {
      return {
        action: '',
        dialogVisible: false,
        fileList: [],
        ruleForm: {
          name: '',
          banner_url: '',
          type: 'index',
          create_time: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入banner名称', trigger: 'blur' },
          ],
          type: [
            { required: true, message: '请输入banner名称', trigger: 'blur' },
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
      typeFilter: function (value) {
        switch(value) {
          case 'index':
            return '首页'
          break;
          case 'jingdong':
            return '京东'
          break;
          case 'taobao':
            return '淘宝'
          break;
        }     
      }
    },
    methods: {
      //是否禁用
      updateRow(id, flag) {
        let params = {
          "flag": flag,
	        "bannerId": id
        }
        upadteBannerAPI(params).then(res => {
          if(res.code == 200) {
            this.$notify.success({
              title: '成功',
              message: '修改banner状态成功!'
            });
            this.getTableData();
          } else {
            this.$notify.error({
              title: '失败',
              message: '修改banner状态失败!'
            });
          }
        })
      },
      //获取table数据
      getTableData() {
        queryBannerAPI({type: 'all'}).then(res => {
          if(res.code == 200) {
            this.tableData = res.data;
          }
        })
      },
      //提交表单
      submitForm(formName) {
        if(!this.fileList.length) {
          this.$notify.error({
            title: '错误',
            message: '请上传banner图片!'
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
              bannerUrl: fileList.toString(), 
              type: this.ruleForm.type, 
              name: this.ruleForm.name
            }
            insertBannerAPI(params).then(res => {
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
</style>