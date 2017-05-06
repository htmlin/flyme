<style>
    .fm-button {
        flex: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 28.889vw;
        height: 8.333vw;
        border-radius: 4.167vw;
        font-size: 4.444vw;
        font-weight: 500;
        color: #fff;
    }
    .fm-button.fm-button--small {
        width: 16.111vw;
        height: 6.667vw;
        border-radius: 3.334vw;
        font-size: 3.889vw;
    }
    .fm-button.fm-button--large {
        width: 36.667vw;
        height: 10.556vw;
        border-radius: 5.278vw;
    }
    .fm-button.fm-button--huge {
        width: 66.667vw;
        height: 10.556vw;
        border-radius: 5.278vw;
    }
    .fm-button.fm-button--circle {
        width: 15.556vw;
        height: 15.556vw;
        border-radius: 51%;
    }
    .fm-button.fm-button--disabled {
        background: #ccc;
    }
    .fm-button:not(.fm-button--disabled):active {
        background-image: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
    }
</style>

<template>
    <div @click="buttonClick" :class="buttonClass" :style="buttonStyle" class="fm-button">
        <fm-icon v-if="type === 'circle'" :id="icon" color="#fff"></fm-icon>
        <slot v-else></slot>
    </div>
</template>

<script>
    import fmIcon from '../icon';
    export default {
        components: {
            fmIcon
        },
        props: {
            color: {
                type: String,
                default: '#198ded'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            width: Number,
            height: Number,
            size: String,
            type: String,
            icon: String
        },
        computed: {
            buttonClass() {
                let classArr = [];
                if (this.disabled) {
                    classArr.push('fm-button--disabled');
                }
                if (this.type) {
                    classArr.push(`fm-button--${this.type}`);
                }
                if (this.size) {
                    classArr.push(`fm-button--${this.size}`);
                }
                return classArr;
            },
            buttonStyle() {
                let style = {};
                if (!this.disabled) {
                    style.backgroundColor = this.color;
                }
                if (!this.size && this.type !== 'circle') {
                    if (this.width) {
                        style.width = `${this.width}vw`;
                    }
                    if (this.height) {
                        style.height = `${this.height}vw`;
                        style.borderRadius = `${Math.ceil(this.height * 1000 / 2000)}vw`;
                    }
                }
                return style;
            }
        },
        methods: {
            buttonClick(event) {
                event.stopPropagation();
                if (!this.disabled) {
                    this.$emit('click', event);
                }
            }
        }
    }
</script>