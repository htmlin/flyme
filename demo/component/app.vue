<style scoped>
    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 120px;
    }
    .logo {
        margin-bottom: 10px;
        font-size: 40px;
        color: #198ded;
    }
</style>

<template>
    <div id="wrapper">
        <header class="header">
            <div @click="toast" class="logo">Flyme UI</div>
            <div @click="toast('success')">一套基于 Vue.js 的移动端 UI 组件库</div>
        </header>
    </div>
</template>

<script>
    export default {
        data: () => ({}),
        methods: {
            toast(type) {
                this.$toast('哈哈哈', type);
            }
        }
    }
</script>