# Switch 开关

## Switch Snippets

```html
<template>
    <fm-switch v-model="status"></fm-switch>
</template>
<script>
    export default {
        data: () => ({
            status: true
        })
    }
</script>
```

![](img/switch.png)

## Switch Directives

| 指令名称 | 描述 | 类型 |
| ----- | ----- | ----- |
| v-model | 开关是否开启 | Boolean |

## Switch Props

| 参数名称 | 描述 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
| color | 开关颜色 | String | #198ded | -- |