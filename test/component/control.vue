<style>
    .fm-button + .fm-button {
        margin-left: 3vw;
    }
</style>

<template>
    <div id="wrapper">
        <fm-header @back="back" :statusbar="false" title="Flyme UI - 控件"></fm-header>
        <fm-list :active-effect="false" title="Button">
            <fm-list-item title="小型按钮">
                <template slot="right">
                    <fm-Button :disabled="true" size="small">按钮</fm-Button>
                    <fm-Button size="small">按钮</fm-Button>
                </template>
            </fm-list-item>
            <fm-list-item title="正常按钮">
                <fm-Button color="#3bc06b" slot="right">按钮</fm-Button>
            </fm-list-item>
            <fm-list-item title="大型按钮">
                <fm-Button size="large" color="#04c0cf" slot="right">按钮</fm-Button>
            </fm-list-item>
            <fm-list-item title="超大按钮">
                <fm-Button size="huge" color="#7e97ac" slot="right">按钮</fm-Button>
            </fm-list-item>
            <fm-list-item title="自定义大小">
                <fm-Button :width="50" :height="15" color="#d33a2a" slot="right">按钮</fm-Button>
            </fm-list-item>
            <fm-list-item title="圆型按钮">
                <template slot="right">
                    <fm-Button :disabled="true" type="circle" icon="back"></fm-Button>
                    <fm-Button type="circle" icon="home" color="#f12528"></fm-Button>
                    <fm-Button type="circle" icon="user" color="#ffaf00"></fm-Button>
                </template>
            </fm-list-item>
        </fm-list>
        <fm-list :active-effect="false" title="Checkbox">
            <fm-list-item title="多选框">
                <fm-checkbox v-model="checkox[0]" slot="right"></fm-checkbox>
            </fm-list-item>
            <fm-list-item title="多选框">
                <fm-checkbox v-model="checkox[1]" slot="right">带文字</fm-checkbox>
            </fm-list-item>
        </fm-list>
        <fm-switch-list :data="options" title="Switch"></fm-switch-list>
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
            ],
            checkox: [false, true]
        }),
        methods: {
            back() {
                history.back();
            }
        }
    }
</script>