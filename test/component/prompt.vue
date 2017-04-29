<style>
    .icon .fm-list-item--wrapper {
        justify-content: space-around;
    }
</style>

<template>
    <div id="wrapper">
        <fm-header @back="back" :statusbar="false" title="Flyme UI - 提示"></fm-header>
        <fm-list title="Dialog 弹窗">
            <fm-list-item @click.native="alert" title="Alert"></fm-list-item>
            <fm-list-item @click.native="confirm" title="Confirm"></fm-list-item>
        </fm-list>
        <fm-list title="Toast 提示">
            <fm-list-item @click.native="$toast('Flyme UI')" title="Toast"></fm-list-item>
            <fm-list-item @click.native="$toast('发送成功', 'success')" title="Complete Toast"></fm-list-item>
        </fm-list>
        <fm-list title="Waiting 等待">
            <fm-list-item @click.native="showWaiting" title="用户可关闭"></fm-list-item>
            <fm-list-item @click.native="$waiting.show('Flyme UI', false)" title="用户不可关闭（慎点）"></fm-list-item>
        </fm-list>
        <fm-list v-loading="true" :underline="false" title="Loading 等待">
            <fm-list-item></fm-list-item>
            <fm-list-item></fm-list-item>
            <fm-list-item></fm-list-item>
        </fm-list>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
            }
        },
        methods: {
            back() {
                history.back();
            },
            alert() {
                this.$alert('alert 弹窗').then(() => {
                    this.$toast('已确定');
                }, () => {
                    this.$toast('已取消');
                });
            },
            confirm() {
                this.$confirm('confirm 弹窗', '立即升级').then(() => {
                    this.$toast('已确定');
                }, () => {
                    this.$toast('已取消');
                });
            },
            showWaiting() {
                this.$waiting.show('Flyme UI', () => {
                    this.$toast('触发了回调');
                });
            }
        }
    }
</script>