<style>
    .fm-plate {
        padding-top: 3.889vw;
        background: #f2f2f2;
        background: #fff no-repeat top / 100% 3.889vw;
    }
    .fm-plate--separate {
        background-image: linear-gradient(#f2f2f2, #f2f2f2);
    }
    .fm-plate--wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 14.167vw;
        padding: 0 4.444vw;
        font-weight: 500;
    }
    .fm-plate--underline {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 66.6%, transparent 66.6%);
        background-repeat: no-repeat;
        background-position: 4.444vw bottom;
        background-size: 91.112vw 0.278vw;
    }
    .fm-plate--title {
        display: flex;
        align-items: center;
        height: 4.444vw;
        border-left: 1.111vw solid;
        padding-left: 2.222vw;
        font-size: 4.444vw;
        color: #000;
    }
    .fm-plate--subtitle {
        display: flex;
        align-items: center;
        font-size: 3.889vw;
    }
</style>

<template>
    <div :class="{'fm-plate--separate': separate}" class="fm-plate">
        <div :class="{'fm-plate--underline': underline}" class="fm-plate--wrapper">
            <div :style="{'border-color': color}" class="fm-plate--title">{{title}}</div>
            <div :style="{'color': color}" class="fm-plate--subtitle">
                <slot name="subtitle"></slot>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            color: {
                type: String,
                default: '#198ded'
            },
            underline: {
                type: Boolean,
                default: true
            },
            separate: {
                type: Boolean,
                default: true
            }
        }
    }
</script>