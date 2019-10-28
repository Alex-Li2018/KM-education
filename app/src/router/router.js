import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
const Home = () => import(/* webpackChunkName: "home" */ '../page/home/home.vue');
const Operate = () => import(/* webpackChunkName: "operate" */ '../page/operate/operate.vue');
const OperateJD = () => import(/* webpackChunkName: "operate-jd" */ '../page/operate/operate-jd.vue');
const DataService = () => import(/* webpackChunkName: "dataService" */ '../page/dataService/dataService.vue');
const Login = () => import(/* webpackChunkName: "login" */ '../page/admin/login.vue');
const Admin = () => import(/* webpackChunkName: "admin" */ '../page/admin/admin.vue');

// 2. 定义路由
const routes = [
  { path: '/', redirect: "/home", },
  { path: '/home', name: 'Home', component: Home, meta: { page: 'home' } },
  { path: '/operate', name: 'Operate', component: Operate, meta: { page: 'operate' } },
  { path: '/operate-jd', name: 'OperateJD', component: OperateJD, meta: { page: 'operate' } },
  { path: '/data-service', name: 'DataService', component: DataService, meta: { page: 'data-service' } },
  { path: '/login', name: 'Login', component: Login, meta: { requireLogin: false, admin: true } },
  { path: '/admin', name: 'Admin', component: Admin, meta: { requireLogin: true, admin: true } },
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes
})

export default router