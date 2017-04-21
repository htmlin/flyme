<style>
    .fm-header {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 66px;
        padding: 24px 16px 0;
    }

    .fm-header.underline {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 66.6%, transparent 66.6%) no-repeat bottom / 100% 1px;
    }

    .fm-header .fm-icon-back {
        margin: 0 17px 0 3px;
    }

    .fm-header-title {
        flex: auto;
        margin-right: 16px;
        font-size: 16px;
        font-weight: 500;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        overflow: hidden;
    }

    .fm-header-button {
        flex: none;
    }
</style>

<template>
    <header class="fm-header" :class="{'underline': underline}" :style="headerStyle">
        <fm-icon id="back" :color="color" :size="17" @click.native="back"></fm-icon>
        <div class="fm-header-title">{{title}}</div>
        <div class="fm-header-button">
            <slot></slot>
        </div>
    </header>
</template>

<script>
    import fmIcon from '../icon/icon.vue';
    export default {
        components: {
            fmIcon
        },
        data: () => ({}),
        props: {
            title: {
                type: String,
                default: () => document.title
            },
            color: {
                type: String,
                default: '#666'
            },
            backgroundColor: {
                type: String,
                default: '#fff'
            },
            underline: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            headerStyle() {
                return {
                    color: this.color,
                    backgroundColor: this.backgroundColor
                }
            }
        },
        methods: {
            back() {
                this.$emit('back');
            }
        }
    }
</script>