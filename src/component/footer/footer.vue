<style>
    .fm-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        height: 15vw;
        background: #fff linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 66.6%, transparent 66.6%) no-repeat top / 100% 0.278vw;;
    }
    .fm-footer--none {
        justify-content: center;
    }
    .fm-footer--mini {
        padding: 0 6.667vw;
    }
    .fm-footer--small {
        padding: 0 8.333vw;
    }
    .fm-footer--large {
        padding: 0 10.278vw;
    }
</style>

<template>
    <div v-padding :class="['fm-footer--' + paddingSize]" class="fm-footer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            paddingSize: {
                type: String,
                default: 'none'
            }
        },
        directives: {
            padding: {
                inserted(el) {
                    document.body.style.paddingBottom = `${el.offsetHeight * 100 / window.innerWidth}vw`;
                }
            }
        }
    }
</script>