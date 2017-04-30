# Waiting 等待

## Waiting Snippets

```javascript
this.$waiting.show('Flyme UI').then(() => {
    console.log('程序取消');
}, () => {
    console.log('用户取消');
});
```

![](/doc/img/waiting.png)

## Waiting Params

### Show 显示动画

| 参数名称 | 描述 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
| text | 等待动画提示文本 | String | -- | -- |
| cancelable | 用户是否能主动取消 | Boolean | true | true, false |

## Waiting Returns

### Show 显示动画

| 返回值名称 | 描述 | 类型 |
| ----- | ----- | ----- |
| promise | `Promise` 对象的实例，`resolve` 状态为程序取消，`reject` 状态为用户取消 | Object |