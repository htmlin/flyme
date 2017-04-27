<style>
</style>

<template>
    <div id="wrapper">
        <fm-header @back="back" :underline="options[0].switch" :statusbar="options[1].switch" title="Flyme UI - 标题栏">
            <fm-menu v-if="options[2].switch">
                <fm-list-item @click.native="$router.push('/')" title="首页">
                    <fm-icon id="home" slot="left"></fm-icon>
                </fm-list-item>
                <fm-list-item title="我的">
                    <fm-icon id="user" slot="left"></fm-icon>
                </fm-list-item>
            </fm-menu>
        </fm-header>
        <fm-switch-list :data="options" title="Header Props"></fm-switch-list>
    </div>
</template>

<script>
    export default {
        data: () => ({
            options: [
                {
                    name: '是否带下划线',
                    switch: true
                }, {
                    name: '是否预留状态栏',
                    switch: false
                }, {
                    name: '添加右侧按钮',
                    switch: true
                }
            ]
        }),
        methods: {
            back() {
                history.back();
            }
        }
    }
</script>