import Vue from 'vue'
import $Http from './config/http.js'

let Plugin = {
    install() {
        //挂载axios的请求
        window.$Http = $Http
    }
} 

Vue.use(Plugin)

console.log('global.js is Ready')