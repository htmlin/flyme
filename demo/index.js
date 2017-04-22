import Vue from 'vue';
import VueRouter from 'vue-router';
import FlymeUI from '../src';

// 应用程序入口
import index from './component/index.vue';
import app from './component/app.vue';
import list from './component/list.vue';
import other from './component/other.vue';

Vue.use(VueRouter);
Vue.use(FlymeUI);

const routes = [
    {
        path: '/',
        component: app
    }, {
        path: '/list',
        component: list
    }, {
        path: '/other',
        component: other
    }
];

new Vue({
    el: '#app',
    router: new VueRouter({
        routes: routes
    }),
    render: h => h(index)
});