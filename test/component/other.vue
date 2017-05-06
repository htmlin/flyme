<style>
    .icon .fm-list-item--wrapper > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        line-height: 2;
        font-size: 3.333vw;
    }
</style>

<template>
    <div id="wrapper">
        <fm-header @back="back" :statusbar="false" title="Flyme UI - 其他"></fm-header>
        <fm-list :underline="false" :active-effect="false" title="Icon 图标" class="icon">
            <fm-list-item>
                <div>
                    <fm-icon id="back"></fm-icon>
                    <div>back</div>
                </div>
                <div>
                    <fm-icon id="clock"></fm-icon>
                    <div>clock</div>
                </div>
                <div>
                    <fm-icon id="close"></fm-icon>
                    <div>close</div>
                </div>
                <div>
                    <fm-icon id="edit"></fm-icon>
                    <div>edit</div>
                </div>
            </fm-list-item>
            <fm-list-item>
                <div>
                    <fm-icon id="home"></fm-icon>
                    <div>home</div>
                </div>
                <div>
                    <fm-icon id="info"></fm-icon>
                    <div>info</div>
                </div>
                <div>
                    <fm-icon id="more"></fm-icon>
                    <div>more</div>
                </div>
                <div>
                    <fm-icon id="plus"></fm-icon>
                    <div>plus</div>
                </div>
            </fm-list-item>
            <fm-list-item>
                <div>
                    <fm-icon id="tick"></fm-icon>
                    <div>tick</div>
                </div>
                <div>
                    <fm-icon id="trash"></fm-icon>
                    <div>trash</div>
                </div>
                <div>
                    <fm-icon id="user"></fm-icon>
                    <div>user</div>
                </div>
                <div>
                    <fm-icon id="volume"></fm-icon>
                    <div>volume</div>
                </div>
            </fm-list-item>
        </fm-list>
        <fm-section title="区块标题">
            <div slot="subtitle">副标题</div>
            <fm-list :active-effect="false">
                <fm-list-item title="区块内容">
                </fm-list-item>
            </fm-list>
        </fm-section>
        <fm-list :active-effect="false" title="Tag 标签">
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
            showWaiting() {
                this.$waiting.show('Flyme UI', () => {
                    this.$toast('触发了回调');
                });
            }
        }
    }
</script>