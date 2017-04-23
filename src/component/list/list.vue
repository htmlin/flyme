<style>
    .fm-list {
        margin: 0;
        background: #f5f5f5;
    }
    .fm-list--title {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 10vw;
        padding: 1.667vw 6.667vw 0;
        font-size: 3.333vw;
        font-weight: 500;
        color: #808080;
    }
</style>

<template>
    <dl :class="{'fm-list--underline': underline, 'fm-list--active': activeEffect}" class="fm-list">
        <dt v-if="title" class="fm-list--title">{{title}}</dt>
        <slot></slot>
    </dl>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            underline: {
                type: Boolean,
                default: true
            },
            activeEffect: {
                type: Boolean,
                default: true
            }
        }
    }
</script>