<style>
</style>

<template>
    <div id="wrapper">
        <fm-header @back="back" :statusbar="false" title="Flyme UI - 底栏"></fm-header>
        <fm-switch-list :data="options" title="Header"></fm-switch-list>
        <fm-footer>
            <fm-button size="huge"></fm-button>
        </fm-footer>
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