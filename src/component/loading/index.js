import Vue from 'vue';
import Loading from './loading.vue';

let VCLoading = Vue.extend(Loading);
let vc_loading = new VCLoading().$mount();

// 处理指令参数
function dealParams(value) {
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
        dealParams(binding.value);
        if (binding.modifiers.body) {
            document.body.appendChild(vc_loading.$el);
        } else {
            let position = window.getComputedStyle(el).position;
            if (!position || position === 'static') {
                el.style.position = 'relative';
            }
            el.appendChild(vc_loading.$el);
        }
    },
    update: function (el, binding) {
        dealParams(binding.value);
    }
};