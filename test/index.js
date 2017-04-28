import Vue from 'vue';
import VueRouter from 'vue-router';
import FlymeUI from '../src';

// 应用程序入口
import app from './component/app.vue';
import index from './component/index.vue';
import control from './component/control.vue';
import footer from './component/footer.vue';
import header from './component/header.vue';
import list from './component/list.vue';
import prompt from './component/prompt.vue';
import other from './component/other.vue';

Vue.use(VueRouter);
Vue.use(FlymeUI);

const routes = [
    {
        path: '/',
        component: index
    }, {
        path: '/list',
        component: list
    }, {
        path: '/prompt',
        component: prompt
    }, {
        path: '/control',
        component: control
    }, {
        path: '/header',
        component: header
    }, {
        path: '/footer',
        component: footer
    }, {
        path: '/other',
        component: other
    }
];

new Vue({
    el: '#app',
    router: new VueRouter({
        routes
    }),
    render: h => h(app)
});