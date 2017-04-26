<style>
    .fm-header {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 900;
        box-sizing: border-box;
        width: 100%;
        height: 12.222vw;
        padding: 0 4.722vw;
    }
    .fm-header.underline {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 66.6%, transparent 66.6%) no-repeat bottom / 100% 0.278vw;
    }
    .fm-header.statusbar {
        height: 18.333vw;
        padding-top: 6.111vw;
    }
    .fm-header .fm-icon-back {
        margin-right: 4.167vw;
    }
    .fm-header-title {
        flex: auto;
        margin-right: 4.444vw;
        font-size: 4.444vw;
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
    <header v-padding :class="{'underline': underline, 'statusbar': statusbar}" :style="headerStyle" class="fm-header">
        <fm-icon id="back" :color="color" @click.native="back"></fm-icon>
        <div class="fm-header-title">{{title}}</div>
        <div class="fm-header-button">
            <slot></slot>
        </div>
    </header>
</template>

<script>
    import fmIcon from '../icon';
    export default {
        components: {
            fmIcon
        },
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
            },
            statusbar: {
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
        directives: {
            padding: {
                inserted(el) {
                    document.body.style.paddingTop = `${el.offsetHeight * 100 / window.innerWidth}vw`;
                },
                update(el) {
                    document.body.style.paddingTop = `${el.offsetHeight * 100 / window.innerWidth}vw`;
                },
                unbind() {
                    document.body.style.paddingTop = 0;
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