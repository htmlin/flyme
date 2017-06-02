<style>
    .fm-menu {
        position: relative;
    }
    .fm-menu--background {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 909;
    }
    .fm-menu .fm-icon-more {
        display: block;
    }
    .fm-menu .fm-list {
        position: absolute;
        top: 12.222vw;
        right: -1.944vw;
        z-index: 910;
        width: 54.444vw;
        color: #000;
        box-shadow: 0 0 1.852vw rgba(0, 0, 0, 0.2);
    }
    .fm-menu .fm-list-item--wrapper {
        min-height: 15vw;
    }
    .fm-menu--transition-enter,
    .fm-menu--transition-leave-active {
        opacity: 0;
    }
    .fm-menu--transition-enter {
        transform: scale(1.06);
    }
    .fm-menu--transition-enter-active {
        transition:
            opacity 0.128s cubic-bezier(0.33, 0, 0.33, 1),
            transform 0.288s cubic-bezier(0.3, 0, 0.2, 1);
    }
    .fm-menu--transition-leave-active {
        transition: opacity 0.16s cubic-bezier(0.33, 0, 0.66, 1);
    }
</style>

<template>
    <div class="fm-menu">
        <fm-icon @click.native="show = true" id="more" color="#666"></fm-icon>
        <div v-if="show" @touchstart="hide" class="fm-menu--background"></div>
        <transition name="fm-menu--transition">
            <fm-list v-if="show">
                <slot></slot>
            </fm-list>
        </transition>
    </div>
</template>

<script>
    import fmIcon from '../icon';
    import fmList from '../list/list.vue';
    export default {
        components: {
            fmIcon,
            fmList
        },
        data: () => ({
            show: false
        }),
        watch: {
            'show': function (val) {
                if (val) {
                    history.pushState(null, '', '');
                    window.addEventListener('popstate', this.popstateEvent);
                } else {
                    window.removeEventListener('popstate', this.popstateEvent);
                }
            }
        },
        methods: {
            hide() {
                setTimeout(() => {
                    history.back();
                }, 200); // 防止 touchstart 在菜单键范围内触发时再次打开菜单的问题
            },
            popstateEvent() {
                this.show = false;
            }
        }
    }
</script>