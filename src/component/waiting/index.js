import Vue from 'vue';
import Waiting from './waiting.vue';

let VCWaiting = Vue.extend(Waiting);
let vc_waiting = new VCWaiting().$mount();
document.body.appendChild(vc_waiting.$el);

function show(text, cancelable, callback) {
    vc_waiting.text = typeof text === 'string' ? text : '';
    vc_waiting.show = true;
    if (typeof cancelable === 'boolean') {
        vc_waiting.cancelable = cancelable;
        if (typeof callback === 'function') {
            vc_waiting.callback = callback;
        }
    } else if (typeof cancelable === 'function') {
        vc_waiting.callback = cancelable;
    }
    history.pushState(null, '', '');
    window.onpopstate = () => {
        if (cancelable === false) {
            history.pushState(null, '', '');
        } else {
            vc_waiting.show = false;
            window.onpopstate = null;
        }
    }
}

function hide() {
    if (!this.cancelable) {
        vc_waiting.show = false;
        window.onpopstate = null;
    }
    history.back();
}

export default {
    show,
    hide
};