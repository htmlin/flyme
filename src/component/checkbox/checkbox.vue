<style>
    .fm-checkbox {
        flex: none;
        display: flex;
        align-items: center;
        font-size: 4.444vw;
        font-weight: 500;
    }
    .fm-checkbox--circle {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 6.667vw;
        height: 6.667vw;
        border: 0.556vw solid #d9d9d9;
        border-radius: 51%;
    }
    .fm-checkbox--circle-margin {
        margin-right: 2.222vw;
    }
</style>

<template>
    <div @click="toggle($event)" class="fm-checkbox">
        <div :class="{'fm-checkbox--circle-margin': $slots.default}" :style="checkboxStyle" class="fm-checkbox--circle">
            <fm-icon v-show="value" :size="5" id="tick" color="#fff"></fm-icon>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    import fmIcon from '../icon';
    export default {
        components: {
            fmIcon
        },
        props: {
            value: Boolean,
            color: {
                type: String,
                default: '#198ded'
            }
        },
        computed: {
            checkboxStyle() {
                return this.value ? {
                    'border': 0,
                    'background': this.color
                } : {};
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