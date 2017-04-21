<style>
    .fm-toast {
        position: fixed;
        bottom: 80px;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 34px;
        border-radius: 4px;
        padding: 0 40px;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        color: #fff;
        background: rgba(0, 0, 0, 0.85);
        transform: translate3d(-50%, 0, 0);
    }
    .fm-toast.success {
        flex-direction: column;
        bottom: 50%;
        height: 80px;
        transform: translate3d(-50%, 50%, 0);
    }
    .fm-toast-success {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-bottom: 6px;
        background: #fff;
    }
    .fm-toast.fade-enter,
    .fm-toast.fade-leave-active {
        opacity: 0;
    }
    .fm-toast.fade-enter-active,
    .fm-toast.fade-leave-active {
        transition: opacity 0.32s cubic-bezier(0.33, 0, 0.33, 1)
    }
</style>

<template>
    <transition name="fade">
        <div v-if="show" :class="[type]" class="fm-toast">
            <div v-if="type" class="fm-toast-success">
                <fm-icon :size="20" id="tick" color="#262626"></fm-icon>
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