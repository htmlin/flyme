# Loading 加载

## Loading Snippets

### 基础用法

一般情况下，使用 `v-loading` 指令的元素会被插入一个呈现正在加载动画的元素，动画在该元素中水平垂直居中：

```html
<fm-list v-loading="true" :underline="false" title="Loading 等待">
    <fm-list-item></fm-list-item>
    <fm-list-item></fm-list-item>
    <fm-list-item></fm-list-item>
</fm-list>
```

![](/doc/img/loading.png)

### 全局加载

使用 `.body` 修饰符可指定在 `body` 元素上插入正在加载动画：

```html
<div v-loading.body="true"></div>
```

## Loading Directives

| 指令名称 | 描述 | 类型 |
| ----- | ----- | ----- |
| v-loading | 控制正在加载动画的显示与样式，传入对象可自定义动画颜色与文案 | Boolean, Object |

## Loading Modifiers

| 修饰符名称 | 描述 |
| ----- | ----- |
| body | 表示使用全局加载动画，动画元素作为子元素会被插入 `body`，而非作为使用 `v-loading` 的子元素 |

## Loading Options

| 选项名称 | 描述 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
| show | 是否显示正在加载动画 | Boolean | false | true, false |
| color | 正在加载动画的颜色 | String | #198ded | -- |
| text | 正在加载动画的文案 | String | 正在加载 | -- |