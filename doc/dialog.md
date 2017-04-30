# Dialog 弹窗

弹窗使用 `Promise` 进行用户行为监听，调用弹窗方法会返回一个 `Promise` 实例，因此可以使用 `then` 与 `catch` 方法进行链式捕获用户的确定和取消行为。

## Dialog Snippets

### Alert 弹窗

```javascript
this.$alert('alert 弹窗').then(() => {
    console.log('已确定：点击了知道了');
}, () => {
    console.log('已取消：点击了灰色蒙层或触发了返回操作');
});
```

![](/doc/img/dialog-alert.png)

### Confirm 弹窗

```javascript
this.$confirm('confirm 弹窗', '立即升级').then(() => {
    console.log('已确定：点击了知道了');
}, () => {
    console.log('已取消：点击了灰色蒙层或返回按钮或触发了返回操作');
});
```

![](/doc/img/dialog-confirm.png)

## Dialog Params

### Alert 弹窗

| 参数名称 | 描述 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
| title | 弹窗的提示内容 | String | -- | -- |
| okText | 确定按钮的显示文本 | String | 知道了 | -- |

### Confirm 弹窗

| 参数名称 | 描述 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
| title | 弹窗的提示内容 | String | -- | -- |
| okText | 确定按钮的显示文本 | String | 确定 | -- |
| cancelText | 取消按钮的显示文本 | String | 取消 | -- |

## Dialog Returns

| 返回值名称 | 描述 | 类型 |
| ----- | ----- | ----- |
| promise | `Promise` 对象的实例，`resolve` 状态为确定，`reject` 状态为取消 | Object |