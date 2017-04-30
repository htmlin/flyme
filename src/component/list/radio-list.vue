<template>
    <fm-list :title="title" :underline="underline" :active-effect="activeEffect">
        <fm-list-item @click.native="itemClick(item)"
            v-for="(item, i) of data"
            :key="i" :style="{'color': i === index ? color : '#000'}" :title="item">
            <fm-icon v-show="i === index" :color="color" id="tick" slot="right"></fm-icon>
        </fm-list-item>
    </fm-list>
</template>

<script>
    import fmIcon from '../icon';
    import fmList from './list.vue';
    import fmListItem from './list-item.vue';
    export default {
        components: {
            fmIcon,
            fmList,
            fmListItem
        },
        props: {
            title: String,
            underline: {
                type: Boolean,
                default: true
            },
            activeEffect: {
                type: Boolean,
                default: false
            },
            value: String,
            color: {
                type: String,
                default: '#198ded'
            },
            data: {
                type: Array,
                required: true
            }
        },
        computed: {
            index() {
                let index = -1;
                if (this.value) {
                    for (let i = 0, len = this.data.length; i < len; i++) {
                        if (this.value === this.data[i]) {
                            index = i;
                            break;
                        }
                    }
                }
                return index;
            }
        },
        methods: {
            itemClick(item) {
                this.$emit('input', item);
            }
        }
    }
</script>