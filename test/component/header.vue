<style>
</style>

<template>
    <div id="wrapper">
        <fm-header @back="back" :underline="options[0].switch" :statusbar="options[1].switch" title="Flyme UI - 标题栏">
            <div v-if="options[2].switch" style="font-size: 4.444vw; font-weight: 500; color: #f12528;">完成</div>
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
                    switch: false
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