<style>
    .fm-loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 890;
    }
    .fm-loading--svg {
        width: 6.667vw;
        height: 6.667vw;
        transform: rotate(-90deg);
        animation: fm-loading--rotate 1.007s linear infinite;
    }
    .fm-loading--background,
    .fm-loading--circle {
        fill: transparent;
        stroke-width: 13.889%;
    }
    .fm-loading--background {
        stroke: rgba(0, 0, 0, 0.1);
    }
    .fm-loading--circle {
        stroke-dasharray: 0%, 275%;
        animation: fm-loading--dasharray 8s linear infinite;
    }
    .fm-loading--text {
        margin-top: 2.5vw;
        line-height: 1;
        font-size: 3.889vw;
        font-weight: 500;
        color: #999;
    }
    @keyframes fm-loading--rotate {
        100% {
            transform: rotate(270deg);
        }
    }
    @keyframes fm-loading--dasharray {
        10% {
            stroke-dasharray: 110%, 165%;
            stroke-dashoffset: 0%;
        }
        20% {
            stroke-dasharray: 0%, 275%;
            stroke-dashoffset: -110%;
        }
        30% {
            stroke-dasharray: 110%, 165%;
            stroke-dashoffset: -110%;
        }
        40% {
            stroke-dasharray: 0%, 275%;
            stroke-dashoffset: -220%;
        }
        50% {
            stroke-dasharray: 110%, 165%;
            stroke-dashoffset: -220%;
        }
        60% {
            stroke-dasharray: 0%, 275%;
            stroke-dashoffset: -330%;
        }
        70% {
            stroke-dasharray: 110%, 165%;
            stroke-dashoffset: -330%;
        }
        80% {
            stroke-dasharray: 0%, 275%;
            stroke-dashoffset: -440%;
        }
        90% {
            stroke-dasharray: 110%, 165%;
            stroke-dashoffset: -440%;
        }
        100% {
            stroke-dasharray: 0%, 275%;
            stroke-dashoffset: -550%;
        }
    }
</style>

<template>
    <div v-if="show" class="fm-loading">
        <svg class="fm-loading--svg">
            <circle cx="50%" cy="50%" r="43.056%" class="fm-loading--background"></circle>
            <circle cx="50%" cy="50%" r="43.056%" :stroke="color" class="fm-loading--circle"></circle>
        </svg>
        <div class="fm-loading--text">{{text}}</div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            show: false,
            color: '',
            text: ''
        })
    }
</script>