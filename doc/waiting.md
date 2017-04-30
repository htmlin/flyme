# Waiting 等待

与 [Dialog 弹窗](dialog.md) 相同，Waiting 组件使用 `Promise` 进行异步事件监听，调用 `show` 方法会返回一个 `Promise` 实例，若由开发者使用 `hide` 方法取消动画蒙层，则代表异步操作已完成，该实例将变为 `resolve` 状态，若用户主动取消了动画蒙层，则表示异步操作被提前终止，该实例将变为 `reject` 状态，可以使用 `catch` 方法对用户主动取消行为进行处理。

## Waiting Snippets

### 基本用法

```javascript
this.$waiting.show('Flyme UI').catch(() => {
    console.log('用户取消');
});
```

### 不可取消

若希望等待动画无法被用户主动取消，则可以传入 `false` 作为第二个参数，只有使用 `hide` 方法才能将异步操作标记为 `resolve` 状态：

```javascript
this.$waiting.show('Flyme UI', false).then(() => {
    console.log('hide 方法被调用');
});

setTimeout(() => {
    this.$waiting.hide();
}, 1000);
```

![](/doc/img/waiting.png)

## Waiting Methods

| 方法名称 | 描述 |
| ----- | ----- |
| show | 显示等待动画 |
| hide | 隐藏等待动画 |

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