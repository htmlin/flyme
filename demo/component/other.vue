<style>
    .icon .fm-list-item--wrapper {
        justify-content: space-around;
    }
</style>

<template>
    <div id="wrapper">
        <fm-header @back="back" :statusbar="false" title="Flyme UI - 其他"></fm-header>
        <fm-list :underline="false" title="Icon 图标" class="icon">
            <fm-list-item>
                <fm-icon id="back"></fm-icon>
                <fm-icon id="tick"></fm-icon>
            </fm-list-item>
        </fm-list>
        <fm-list title="Tag 标签">
            <fm-list-item>
                <fm-tag>标签</fm-tag>
                <fm-tag color="#3bc06b">标签</fm-tag>
                <fm-tag color="#04c0cf">标签</fm-tag>
                <fm-tag color="#7e97ac">标签</fm-tag>
                <fm-tag color="#d33a2a">标签</fm-tag>
                <fm-tag color="#f12529">标签</fm-tag>
                <fm-tag color="#fc5b23">标签</fm-tag>
                <fm-tag color="#ffaf00">标签</fm-tag>
            </fm-list-item>
            <fm-list-item>
                <fm-tag size="small">标签</fm-tag>
                <fm-tag size="small" color="#3bc06b">标签</fm-tag>
                <fm-tag size="small" color="#04c0cf">标签</fm-tag>
                <fm-tag size="small" color="#7e97ac">标签</fm-tag>
                <fm-tag size="small" color="#d33a2a">标签</fm-tag>
                <fm-tag size="small" color="#f12529">标签</fm-tag>
                <fm-tag size="small" color="#fc5b23">标签</fm-tag>
                <fm-tag size="small" color="#ffaf00">标签</fm-tag>
            </fm-list-item>
        </fm-list>
        <fm-list title="Toast 提示">
            <fm-list-item @click.native="$toast('Flyme UI')" title="Toast"></fm-list-item>
            <fm-list-item @click.native="$toast('发送成功', 'success')" title="Complete Toast"></fm-list-item>
        </fm-list>
    </div>
</template>

<script>
    export default {
        methods: {
            back() {
                history.back();
            }
        }
    }
</script>