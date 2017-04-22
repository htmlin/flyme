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
    import icon from './icon.js';
    export default {
        data: () => ({ icon }),
        props: {
            id: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                default: 6.667
            },
            color: {
                type: String,
                default: '#000'
            },
            rotate: {
                type: Number,
                default: 0
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
                    width: `${this.size}vw`,
                    height: `${this.size}vw`,
                    transform: `rotate(${this.rotate}deg)`,
                    fill: this.color
                }
            }
        }
    }
</script>