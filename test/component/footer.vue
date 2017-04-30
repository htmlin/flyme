<style>
    .button {
        flex: auto;
        align-self: stretch;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: background 0.2s;
    }
    .button:active {
        background: #f2f2f2;
    }
    .button > div {
        font-size: 2.778vw;
        font-weight: 500;
        color: #666;
    }
    .price {
        font-weight: 500;
    }
    .price span {
        font-size: 6.667vw;
        font-family: DINPro;
        color: #f12528;
    }
</style>

<template>
    <div id="wrapper">
        <fm-header @back="back" :statusbar="false" title="Flyme UI - 底栏"></fm-header>
        <fm-radio-list v-model="radio" :data="options" title="Footer"></fm-radio-list>
        <fm-footer :padding-size="paddingSize">
            <fm-button v-if="radio === options[0]" size="huge">居中显示</fm-button>
            <template v-if="radio === options[1]">
                <fm-button size="large" color="#7e97ac">取消订单</fm-button>
                <fm-button size="large" color="#f12528">提交订单</fm-button>
            </template>
            <template v-if="radio === options[2]">
                <div class="button">
                    <fm-icon id="back"></fm-icon>
                    <div>返回</div>
                </div>
                <div class="button">
                    <fm-icon id="user"></fm-icon>
                    <div>我的</div>
                </div>
                <div class="button">
                    <fm-icon id="home"></fm-icon>
                    <div>首页</div>
                </div>
                <div class="button">
                    <fm-icon id="tick"></fm-icon>
                    <div>完成</div>
                </div>
                <div class="button">
                    <fm-icon id="more"></fm-icon>
                    <div>更多</div>
                </div>
            </template>
            <template v-if="radio === options[3]">
                <div class="price">应付<span>20</span>元</div>
                <fm-button color="#f12528">立即支付</fm-button>
            </template>
        </fm-footer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            options: ['无内边距', '大内边距', '小内边距', '超小内边距'],
            radio: '无内边距'
        }),
        computed: {
            paddingSize() {
                let size = '';
                switch (this.radio) {
                    case '大内边距':
                        size = 'large';
                        break;
                    case '小内边距':
                        size = 'small';
                        break;
                    case '超小内边距':
                        size = 'mini';
                        break;
                }
                return size;
            }
        },
        methods: {
            back() {
                history.back();
            }
        }
    }
</script>