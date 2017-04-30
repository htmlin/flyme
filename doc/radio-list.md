# RadioList 单选列表

> 该组件基于 [List 列表](list.md) 组件封装

## RadioList Snippets

```html
<template>
    <fm-radio-list v-model="radio" :data="['选项一', '选项二']" title="单选列表"></fm-radio-list>
</template>
<script>
    export default {
        data: () => ({
            radio: '' // 保存当前选项的值
        })
    }
</script>
```

![](/doc/img/radio-list.png)

## RadioList Directives

| 指令名称 | 描述 | 类型 |
| ----- | ----- | ----- |
| v-model | 双向绑定当前所选的值 | String |

## RadioList Props

| 参数名称 | 描述 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
| title | 列表标题 | String | -- | -- |
| underline | 是否显示列表项下划线 | Boolean | true | true, false |
| active-effect | 是否显示列表项点击效果 | Boolean | false | true, false |
| color | 被选中列表项的文字颜色 | String | #198ded | -- |
| data | 单选列表数据数组，数据默认双向绑定 | Array | -- | -- |