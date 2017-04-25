<style>
    .fm-toast {
        position: fixed;
        bottom: 18.75%;
        left: 50%;
        z-index: 990;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 9.444vw;
        border-radius: 0.926vw;
        padding: 0 11.111vw;
        font-size: 3.889vw;
        font-weight: 500;
        white-space: nowrap;
        color: #fff;
        background: rgba(0, 0, 0, 0.85);
        transform: translate3d(-50%, 0, 0);
    }
    .fm-toast--success {
        flex-direction: column;
        bottom: 50%;
        height: 22.222vw;
        transform: translate3d(-50%, 50%, 0);
    }
    .fm-toast--icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8.333vw;
        height: 8.333vw;
        border-radius: 51%;
        margin-bottom: 1.667vw;
        background: #fff;
    }
    .fm-toast.fade-enter,
    .fm-toast.fade-leave-active {
        opacity: 0;
    }
    .fm-toast.fade-enter-active,
    .fm-toast.fade-leave-active {
        transition: opacity 0.32s cubic-bezier(0.33, 0, 0.33, 1);
    }
</style>

<template>
    <transition name="fade">
        <div v-if="show" :class="['fm-toast--' + type]" class="fm-toast">
            <div v-if="type" class="fm-toast--icon">
                <fm-icon :size="5.556" id="tick" color="#262626"></fm-icon>
            </div>
            {{content}}
        </div>
    </transition>
</template>

<script>
    import fmIcon from '../icon';
    export default {
        components: {
            fmIcon
        },
        data: () => ({
            show: false,
            content: '',
            type: ''
        })
    }
</script>