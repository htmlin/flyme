# Section 版块

## Section Snippets

```html
<fm-section title="区块标题">
    <div slot="subtitle">副标题</div>
    <fm-list :active-effect="false">
        <fm-list-item title="区块内容">
        </fm-list-item>
    </fm-list>
</fm-section>
```

![](img/section.png)

## Section Props

| 参数名称 | 描述 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
| title | 版块标题 | String | -- | -- |
| color | 版块主题色 | String | #198ded | -- |
| underline | 是否显示下划线 | Boolean | true | true, false |
| separate | 是否显示顶部分割条 | Boolean | true | true, false |

## Section Slots

| 插槽名称 | 描述 |
| ----- | ----- |
| -- | 版块主题内容 |
| subtitle | 版块副标题 |