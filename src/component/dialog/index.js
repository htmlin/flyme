import Vue from 'vue';
import Dialog from './dialog.vue';

let VCDialog = Vue.extend(Dialog);
let vc_dialog = new VCDialog().$mount();
document.body.appendChild(vc_dialog.$el);

function dialog(title, okText, cancelText, resolve, reject) {
    vc_dialog.show = true;
    vc_dialog.title = title;
    vc_dialog.okText = okText;
    vc_dialog.cancelText = cancelText;
    vc_dialog.resolve = resolve;
    vc_dialog.reject = reject;
}

function alert(title, okText) {
    return new Promise((resolve, reject) => {
        dialog(title, okText ? okText : '知道了', '', resolve, reject);
    });
}

function confirm(title, okText, cancelText) {
    return new Promise((resolve, reject) => {
        dialog(title, okText ? okText : '确定', cancelText ? cancelText : '取消', resolve, reject);
    });
}

export default {
    alert,
    confirm
};