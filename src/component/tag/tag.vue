<style>
    .fm-tag {
        flex: none;
        display: inline-flex;
        align-items: center;
        border-radius: 0.37vw;
        height: 4.444vw;
        margin-right: 1.111vw;
        padding: 0 0.833vw;
        font-size: 2.778vw;
        font-weight: 700;
        color: #fff;
    }
    .fm-tag.small {
        height: 3.333vw;
        margin-right: 0.556vw;
        padding: 0 0.556vw;
        font-size: 2.222vw;
    }
</style>

<template>
    <span class="fm-tag" :class="[size]" :style="tagStyle">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        props: {
            size: {
                type: String,
                validator: val => val === 'small'
            },
            color: {
                type: String,
                default: '#198ded'
            }
        },
        computed: {
            tagStyle() {
                return { background: this.color }
            }
        }
    }
</script>