import Vue from 'vue';
import Loading from './loading.vue';

let VCLoading = Vue.extend(Loading);
let vc_loadings = {};
let index = 0;

/**
 * 处理指令参数
 * @param {Object} vc_loading 当前指令所对应的 vue 对象
 * @param {Boolean/Object} value 当前指令参数
 */
function dealParams(vc_loading, value) {
    if (typeof value === 'boolean') {
        vc_loading.show = value;
        vc_loading.color = '#198ded';
        vc_loading.text = '正在加载';
        return;
    }
    vc_loading.show = Boolean(value.show);
    vc_loading.color = value.color ? value.color : '#198ded';
    vc_loading.text = value.text ? value.text : '正在加载';
}

export default {
    bind: function (el, binding) {
        let vc_loading = new VCLoading().$mount();
        dealParams(vc_loading, binding.value);
        if (binding.modifiers.body) {
            document.body.appendChild(vc_loading.$el);
        } else {
            let position = window.getComputedStyle(el).position;
            if (!position || position === 'static') {
                el.style.position = 'relative';
            }
            el.appendChild(vc_loading.$el);
        }
        el.dataset.fmloading = index;
        vc_loadings[index++] = vc_loading;
    },
    update: function (el, binding) {
        dealParams(vc_loadings[el.dataset.fmloading], binding.value);
    },
    unbind: function (el) {
        delete vc_loadings[el.dataset.fmloading];
    }
};