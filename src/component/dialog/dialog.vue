<style>
    .fm-dialog--background {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 910;
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    }
    .fm-dialog--wrapper {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 911;
        box-sizing: border-box;
        width: 86.667vw;
        border-radius: 0.926vw;
        padding: 6.667vw 6.667vw 0;
        box-shadow: 0 0 2.685vw rgba(0, 0, 0, 0.22);
        font-size: 4.444vw;
        font-weight: 500;
        background: #fff;
        transform: translate3d(-50%, -50%, 0);
    }
    .fm-dialog--button {
        display: flex;
        justify-content: space-around;
        padding: 0 6.667vw;
        color: #198ded;
    }
    .fm-dialog--button > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 17.778vw;
        height: 17.778vw;
        border-radius: 51%;
        transition: background 0.2s;
    }
    .fm-dialog--button > div:active {
        background: #f2f2f2;
    }
    .fm-dialog--fade-enter,
    .fm-dialog--fade-leave-active {
        opacity: 0;
    }
    .fm-dialog--fade-enter-active {
        transition: opacity 0.32s cubic-bezier(0.33, 0, 0.66, 1);
    }
    .fm-dialog--fade-leave-active {
        transition: opacity 0.16s cubic-bezier(0.33, 0, 0.66, 1);
    }
    .fm-dialog--scale-enter {
        opacity: 0;
        transform: translate3d(-50%, -50%, 0) scale(1.06);
    }
    .fm-dialog--scale-enter-active {
        transition:
            opacity 0.128s cubic-bezier(0.33, 0, 0.33, 1),
            transform 0.288s cubic-bezier(0.3, 0, 0.2, 1);
    }
    .fm-dialog--scale-leave-active {
        opacity: 0;
        transition: opacity 0.16s cubic-bezier(0.33, 0, 0.66, 1);
    }
</style>

<template>
    <div class="fm-dialog">
        <transition name="fm-dialog--fade">
            <div v-if="show" @click="cancel" class="fm-dialog--background"></div>
        </transition>
        <transition name="fm-dialog--scale">
            <div v-if="show" class="fm-dialog--wrapper">
                <div class="fm-dialog--title">{{title}}</div>
                <div class="fm-dialog--button">
                    <div v-if="cancelText" @click="cancel" class="fm-dialog--button-cancel">{{cancelText}}</div>
                    <div @click="ok" class="fm-dialog--button-ok">{{okText}}</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data: () => ({
            show: false,
            title: '',
            okText: '',
            cancelText: '',
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
            ok() {
                this.resolve();
                history.back();
            },
            cancel() {
                history.back();
            },
            popstateEvent() {
                this.show = false;
                this.reject();
            }
        }
    }
</script>