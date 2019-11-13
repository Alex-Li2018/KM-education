// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
const Home = () => import(/* webpackChunkName: "home" */ '../page/home/home.vue');
const Operate = () => import(/* webpackChunkName: "operate" */ '../page/operate/operate.vue');
const OperateJD = () => import(/* webpackChunkName: "operate-jd" */ '../page/operate/operate-jd.vue');
const DataService = () => import(/* webpackChunkName: "dataService" */ '../page/dataService/dataService.vue');
const Login = () => import(/* webpackChunkName: "login" */ '../page/admin/login.vue');
const Admin = () => import(/* webpackChunkName: "admin" */ '../page/admin/admin.vue');
const FreeCheck = () => import(/* webpackChunkName: "freeCheck" */ '../page/admin/free-check.vue');
const User = () => import(/* webpackChunkName: "user" */ '../page/admin/user.vue');
const Banner = () => import(/* webpackChunkName: "banner" */ '../page/admin/banner.vue');
const planeDesign = () => import(/* webpackChunkName: "planeDesign" */ '../page/plane-design/plane-design.vue');
const eTrain = () => import(/* webpackChunkName: "eTrain" */ '../page/e-train/e-train.vue');
const dowCenter = () => import(/* webpackChunkName: "dowCenter" */ '../page/dow-center/dow-center.vue');
const success = () => import(/* webpackChunkName: "success" */ '../page/success/success.vue');
const goodness = () => import(/* webpackChunkName: "goodness" */ '../page/goodness/goodness.vue');

// 2. 定义路由
const routes = [
  { path: '/', redirect: "/home", },
  { path: '/home', name: 'Home', component: Home, meta: { page: 'home', requireLogin: false, } },
  { path: '/operate', name: 'Operate', component: Operate, meta: { page: 'operate', requireLogin: false, } },
  { path: '/operate-jd', name: 'OperateJD', component: OperateJD, meta: { page: 'operate', requireLogin: false, } },
  { path: '/plane-design', name: 'planeDesign', component: planeDesign, meta: { page: 'planeDesign', requireLogin: false, } },
  { path: '/e-train', name: 'eTrain', component: eTrain, meta: { page: 'eTrain', requireLogin: false, } },
  { path: '/dow-center', name: 'dowCenter', component: dowCenter, meta: { page: 'dowCenter', requireLogin: false, } },
  { path: '/success', name: 'success', component: success, meta: { page: 'success', requireLogin: false, } },
  { path: '/goodness', name: 'goodness', component: goodness, meta: { page: 'goodness', requireLogin: false, } },
  { path: '/data-service', name: 'DataService', component: DataService, meta: { page: 'data-service', requireLogin: false, } },
  { path: '/login', name: 'Login', component: Login, meta: { requireLogin: false, admin: true } },
  { path: '/admin', 
    name: 'Admin', 
    component: Admin, 
    meta: { requireLogin: true, admin: true },
    children: [
      {path: '', component: FreeCheck, meta: { requireLogin: true, admin: true }},
      {path: 'free-check', name: 'FreeCheck', component: FreeCheck, meta: { requireLogin: true, admin: true }},
      {path: 'user', name: 'User', component: User, meta: { requireLogin: true, admin: true }},
      {path: 'banner', name: 'Banner', component: Banner, meta: { requireLogin: true, admin: true }},
    ]},
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes
})

// 权限控制
router.beforeEach((to, from, next) => {
  if(to.meta.requireLogin) {
    if(sessionStorage.getItem('isLogin')) {
      next()
    }else {
      next({ path: '/login' })
    }
  } else {
    next()
    
  }
})

export default router