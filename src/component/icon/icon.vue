<style>
    [class|=fm-icon] {
        flex: none;
    }
</style>

<template>
    <svg :class="iconClass" :style="iconStyle">
        <use :xlink:href="iconId"></use>
    </svg>
</template>

<script>
    import icon from './index.js';
    export default {
        data: () => ({ icon }),
        props: {
            id: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                default: 16
            },
            color: {
                type: String,
                default: '#000'
            }
        },
        computed: {
            iconId() {
                return this.icon[this.id];
            },
            iconClass() {
                return `fm-icon-${this.id}`;
            },
            iconStyle() {
                return {
                    width: `${this.size}px`,
                    height: `${this.size}px`,
                    fill: this.color
                }
            }
        }
    }
</script>