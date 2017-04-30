# Footer 底栏

> 使用该组件会在 `body` 元素上加上与底栏等高的下内边距。

## Footer Snippets

```html
<fm-footer padding-size="mini">
    <div class="price">应付<span>20</span>元</div>
    <fm-button color="#f12528">立即支付</fm-button>
</fm-footer>
```

![](/doc/img/footer.png)

## Footer Props

| 参数名称 | 描述 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
| padding-size | 左右内边距尺寸，若不为空则底栏元素两端对齐 | String | -- | large, small, mini |

## Footer Slots

| 插槽名称 | 描述 |
| ----- | ----- |
| -- | 底栏元素插槽 |