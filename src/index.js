// import Vue from "../node_modules/vue/dist/vue.js
import Vue from "vue"
import $ from "jquery"
import videojs from "video.js"
import 'video.js/dist/video-js.css'
import 'video.js/dist/font/VideoJS.ttf'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import VueRouter from "vue-router"
import Header from "./components/header.vue"
import Login from "./view/login.vue"
import Register from "./view/register.vue"
import Account from "./components/account.vue"
import Video from "./components/video.vue"
import Websocket from "./view/websocket.vue"

videojs.options.flash.swf = 'video-js-fixed.swf';
Vue.prototype.$video = videojs
Vue.use(VueRouter)
var router = new VueRouter({
    routes: [
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/websocket', component: Websocket },
        { path: '/video', component:  Video },
    ]
})


var vm = new Vue({
    el: '#app',
    data: {
        // msg: "asdasdasd"
    },
    components: {
        "v-header": Header,
        "v-body": Account,
        // "v-video": Video
    },
    router

})
console.log("asdasd")