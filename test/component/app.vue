<style scoped>
    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 60vw;
    }
    .logo {
        margin-bottom: 5vw;
        font-size: 12vw;
        color: #198ded;
    }
    .desc {
        font-size: 4.444vw;
    }
</style>

<template>
    <div id="wrapper">
        <header class="header">
            <div class="logo">Flyme UI</div>
            <div class="desc">一套基于 Vue.js 的响应式移动端 UI 组件库</div>
        </header>
        <fm-list>
            <fm-list-item @click.native="routerPush('list')" title="列表">
                <fm-icon :size="5" :rotate="180" id="back" color="#b2b2b2" slot="right"></fm-icon>
            </fm-list-item>
            <fm-list-item @click.native="routerPush('control')" title="控件">
                <fm-icon :size="5" :rotate="180" id="back" color="#b2b2b2" slot="right"></fm-icon>
            </fm-list-item>
            <fm-list-item @click.native="routerPush('header')" title="标题栏">
                <fm-icon :size="5" :rotate="180" id="back" color="#b2b2b2" slot="right"></fm-icon>
            </fm-list-item>
            <fm-list-item @click.native="routerPush('other')" title="其他">
                <fm-icon :size="5" :rotate="180" id="back" color="#b2b2b2" slot="right"></fm-icon>
            </fm-list-item>
        </fm-list>
    </div>
</template>

<script>
    export default {
        data: () => ({}),
        methods: {
            toast(type) {
                this.$toast('哈哈哈', type);
            },
            routerPush(path) {
                this.$router.push(path);
            }
        }
    }
</script>