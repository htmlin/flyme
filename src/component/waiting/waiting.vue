<style>
    .fm-waiting {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 910;
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    }
    .fm-waiting--wrapper {
        height: 22.222vw;
        border-radius: 1.667vw;
        padding: 0 6.667vw;
        background: rgba(255, 255, 255, 0.9);
    }
    .fm-waiting--circle {
        display: flex;
        justify-content: center;
        margin: 5.556vw 0;
    }
    .fm-waiting--text {
        line-height: 1;
        font-size: 3.889vw;
        font-weight: 500;
        text-align: center;
    }
    /* 小圆圈动画 */
    [class|="fm-waiting--dot"] {
        position: relative;
        z-index: 1;
        width: 3.889vw;
        height: 3.889vw;
        margin: 0 0.278vw;
        border-radius: 51%;
        opacity: 1;
    }
    .fm-waiting--dot-1 {
        background: #4da84f;
        transform: translate3d(0, 0, 0) scale(0.5);
        animation: dot1 2.112s linear infinite;
    }
    .fm-waiting--dot-2 {
        background: #4d79d3;
        transform: translate3d(0, 0, 0) scale(1);
        animation: dot2 2.112s linear infinite;
    }
    .fm-waiting--dot-3 {
        background: #de6a3c;
        transform: translate3d(0, 0, 0) scale(0.5);
        animation: dot3 2.112s linear infinite;
    }
    @keyframes dot1 {
        33.333% {
            transform: translate3d(4.444vw, 0, 0) scale(1);
        }
        66.667% {
            opacity: 1;
            z-index: 1;
            transform: translate3d(8.889vw, 0, 0) scale(0.5);
        }
        76.515% {
            opacity: 0;
            z-index: 0;
            transform: translate3d(8.333vw, 0, 0) scale(0.3);
        }
        84.848% {
            opacity: 0;
            z-index: 0;
            transform: translate3d(0.556vw, 0, 0) scale(0.34);
        }
    }
    @keyframes dot2 {
        33.333% {
            opacity: 1;
            z-index: 1;
            transform: translate3d(4.444vw, 0, 0) scale(0.5);
        }
        43.182% {
            opacity: 0;
            z-index: 0;
            transform: translate3d(3.889vw, 0, 0) scale(0.3);
        }
        51.326% {
            opacity: 0;
            z-index: 0;
            transform: translate3d(-3.889vw, 0, 0) scale(0.34);
        }
        66.667% {
            opacity: 1;
            z-index: 1;
            transform: translate3d(-4.444vw, 0, 0) scale(0.5);
        }
    }
    @keyframes dot3 {
        9.848% {
            opacity: 0;
            z-index: 0;
            transform: translate3d(-0.556vw, 0, 0) scale(0.3);
        }
        18.182% {
            opacity: 0;
            z-index: 0;
            transform: translate3d(-8.333vw, 0, 0) scale(0.34);
        }
        33.333% {
            opacity: 1;
            z-index: 1;
            transform: translate3d(-8.889vw, 0, 0) scale(0.5);
        }
        66.667% {
            transform: translate3d(-4.444vw, 0, 0) scale(1);
        }
    }
    .fm-waiting.fade-enter,
    .fm-waiting.fade-leave-active {
        opacity: 0;
    }
    .fm-waiting.fade-enter-active,
    .fm-waiting.fade-leave-active {
        transition: opacity 0.32s cubic-bezier(0.33, 0, 0.66, 1);
    }
</style>

<template>
    <transition name="fade">
        <div v-if="show" @click="hide" class="fm-waiting">
            <div class="fm-waiting--wrapper">
                <div class="fm-waiting--circle">
                    <div class="fm-waiting--dot-1"></div>
                    <div class="fm-waiting--dot-2"></div>
                    <div class="fm-waiting--dot-3"></div>
                </div>
                <div class="fm-waiting--text">{{text}}</div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data: () => ({
            show: false,
            text: '',
            cancelable: true,
            isUser: false,
            resolve: null,
            reject: null
        }),
        watch: {
            'show': function (val) {
                if (val) {
                    history.pushState(null, '', '');
                    window.addEventListener('popstate', this.popstateEvent);
                } else {
                    window.removeEventListener('popstate', this.popstateEvent);
                }
            }
        },
        methods: {
            hide() {
                history.back();
            },
            popstateEvent() {
                if (this.cancelable === false) {
                    history.pushState(null, '', '');
                } else {
                    this.show = false;
                    this.isUser ? this.reject() : this.resolve();
                }
            }
        }
    }
</script>