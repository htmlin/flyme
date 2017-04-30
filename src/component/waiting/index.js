import Vue from 'vue';
import Waiting from './waiting.vue';

let VCWaiting = Vue.extend(Waiting);
let vc_waiting = new VCWaiting().$mount();
document.body.appendChild(vc_waiting.$el);

function show(text, cancelable) {
    return new Promise((resolve, reject) => {
        vc_waiting.text = text;
        if (cancelable === false) {
            vc_waiting.cancelable = false;
        } else {
            vc_waiting.cancelable = true;
            vc_waiting.isUser = true;
        }
        vc_waiting.show = true;
        vc_waiting.resolve = resolve;
        vc_waiting.reject = reject;
    });
}

function hide() {
    vc_waiting.cancelable = true;
    vc_waiting.isUser = false;
    history.back();
}

export default {
    show,
    hide
};