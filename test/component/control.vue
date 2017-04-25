<style>
</style>

<template>
    <div id="wrapper">
        <fm-header @back="back" :statusbar="false" title="Flyme UI - 控件"></fm-header>
        <fm-switch-list :data="options" title="开关控件"></fm-switch-list>
    </div>
</template>

<script>
    export default {
        data: () => ({
            options: [
                {
                    name: '开关',
                    switch: true
                }, {
                    name: '开关',
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