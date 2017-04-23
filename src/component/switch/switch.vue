<style>
    .fm-switch {
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        width: 13.333vw;
        height: 6.667vw;
        border: 0.556vw solid #d9d9d9;
        border-radius: 3.334vw;
        padding-left: 1.481vw;
        transition-property: border-color, background;
        transition-duration: 0.16s;
        transition-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    .fm-switch--circle {
        width: 1.667vw;
        height: 1.667vw;
        border-radius: 50%;
        background: #d9d9d9;
        transition-property: background, transform;
        transition-duration: 0.256s;
        transition-timing-function: cubic-bezier(0.33, 0, 0.66, 1), cubic-bezier(0.33, 0, 0.1, 1);
    }

    /* 开关开启 */
    .fm-switch--on .fm-switch--circle {
        background: #fff;
        transform: translate3d(7.13vw, 0, 0) scale(2.333);
    }
</style>

<template>
    <div @click="toggle($event)" :class="{'fm-switch--on': value}" :style="switchStyle" class="fm-switch">
        <div class="fm-switch--circle"></div>
    </div>
</template>

<script>
    export default {
        props: {
            value: Boolean,
            color: {
                type: String,
                default: '#198ded'
            }
        },
        computed: {
            switchStyle() {
                return this.value ? {
                    'border-color': this.color,
                    'background': this.color
                } : {}
            }
        },
        methods: {
            toggle(event) {
                event.stopPropagation();
                this.$emit('input', !this.value);
            }
        }
    }
</script>