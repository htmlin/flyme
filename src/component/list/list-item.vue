<style>
    .fm-list-item {
        display: flex;
        align-items: center;
        overflow: hidden;
        margin: 0;
        padding: 0 4.444vw;
        background-color: #fff;
        transition: background-color 0.2s;
    }
    .fm-list-item:active {
        background-color: #f2f2f2;
    }
    .fm-list-item > :first-child:not(.fm-list-item--wrapper) {
        flex: none;
        margin-right: 4.444vw;
    }
    .fm-list-item--wrapper {
        flex: auto;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        min-height: 17.778vw;
        overflow: hidden;
        padding: 4.444vw 2.222vw;
    }
    .fm-list-item--wrapper:not(:first-child) {
        padding-left: 0;
    }
    .underline .fm-list-item + .fm-list-item .fm-list-item--wrapper {
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 66.6%, transparent 66.6%);
        background-repeat: no-repeat;
        background-position: top;
        background-size: 100% 0.278vw;
    }
    .fm-list-item--main {
        flex: auto;
        overflow: hidden;
    }
    .fm-list-item--main:not(:last-child) {
        margin-right: 5vw;
    }
    .fm-list-item--title {
        flex: auto;
        font-size: 4.444vw;
        font-weight: 500;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        overflow: hidden;
    }
    .fm-list-item--content,
    .fm-list-item--desc {
        line-height: 1.333;
        color: #999;
    }
    .fm-list-item--content {
        margin-top: 1.111vw;
        font-size: 3.333vw;
    }
    .fm-list-item--desc {
        margin-top: 0.833vw;
        font-size: 3.889vw;
    }
</style>

<template>
    <dd class="fm-list-item">
        <slot name="left"></slot>
        <div class="fm-list-item--wrapper">
            <slot>
                <div class="fm-list-item--main">
                    <div class="fm-list-item--title">{{title}}</div>
                    <div v-if="content" class="fm-list-item--content">{{content}}</div>
                    <div v-if="desc" class="fm-list-item--desc">{{desc}}</div>
                </div>
            </slot>
            <slot name="right"></slot>
        </div>
    </dd>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            content: {
                type: String
            },
            desc: {
                type: String
            }
        }
    }
</script>