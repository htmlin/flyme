<style>
</style>

<template>
    <div id="wrapper">
        <fm-header @back="back" :statusbar="false" title="Flyme UI - 列表"></fm-header>
        <fm-list>
            <fm-list-item title="无标题列表"></fm-list-item>
            <fm-list-item title="带辅助信息" content="列表描述信息" desc="额外的描述信息"></fm-list-item>
        </fm-list>
        <fm-list title="带右侧元素列表">
            <fm-list-item title="标题">
                <fm-icon :size="5" id="tick" color="#b2b2b2" slot="right"></fm-icon>
            </fm-list-item>
            <fm-list-item title="带描述段落" content="列表描述信息列表描述信息列表描述信息列表描述信息列表描述信息列表描述信息..">
                <fm-icon :size="5" :rotate="180" id="back" color="#b2b2b2" slot="right"></fm-icon>
            </fm-list-item>
        </fm-list>
        <fm-list :underline="false" title="带左侧元素列表">
            <fm-list-item title="微信" content="6.4 亿人安装" desc="时下最火的语音聊天交友应用">
                <div style="width: 17.778vw; height: 17.778vw; background: #3bc06b;" slot="left"></div>
            </fm-list-item>
            <fm-list-item title="生活服务" content="3.4 亿人安装">
                <div style="width: 12.5vw; height: 12.5vw; background: #f12528;" slot="left"></div>
            </fm-list-item>
            <fm-list-item title="Flyme Design">
                <div style="width: 11.112vw; height: 11.112vw; border-radius: 50%; background: #198ded;" slot="left"></div>
            </fm-list-item>
        </fm-list>
        <fm-switch-list :data="options" :title="options[0].switch ? '开关列表' : ''" :underline="options[1].switch" :active-effect="options[2].switch"></fm-switch-list>
    </div>
</template>

<script>
    export default {
        data: () => ({
            options: [
                {
                    name: '是否含有标题',
                    switch: true
                }, {
                    name: '是否带下划线',
                    switch: true
                }, {
                    name: '是否含有点击效果',
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