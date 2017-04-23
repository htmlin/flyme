<template>
    <fm-list :title="title" :underline="underline" :active-effect="activeEffect">
        <fm-list-item v-for="item of data" @click.native="item[propSwitch] = !item[propSwitch]" :key="item[propName]" :title="item[propName]">
            <fm-switch v-model="item[propSwitch]" :color="color" slot="right"></fm-switch>
        </fm-list-item>
    </fm-list>
</template>

<script>
    import fmList from './list.vue';
    import fmListItem from './list-item.vue';
    import fmSwitch from '../switch';
    export default {
        components: {
            fmList,
            fmListItem,
            fmSwitch
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
            color: String,
            data: {
                type: Array,
                required: true
            },
            propName: {
                type: String,
                default: 'name'
            },
            propSwitch: {
                type: String,
                default: 'switch'
            }
        }
    }
</script>