<style>
    .fm-tag {
        flex: none;
        display: inline-flex;
        align-items: center;
        border-radius: 1px;
        height: 16px;
        margin-right: 4px;
        padding: 0 3px;
        font-size: 10px;
        font-weight: 700;
        color: #fff;
    }
    .fm-tag.small {
        height: 12px;
        margin-right: 2px;
        padding: 0 2px;
        font-size: 8px;
    }
</style>

<template>
    <span class="fm-tag" :class="[size]" :style="tagStyle">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        data: () => ({}),
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