# Toast 提示

## Toast Snippets

### 基础用法

```javascript
this.$toast('Flyme UI');
```

![](img/toast.png)

### 带状态提示

```javascript
this.$toast('发送成功', 'success');
```

![](img/toast-status.png)

## Toast Params

| 参数名称 | 描述 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
| content | 提示的文本内容 | String | -- | -- |
| type | 提示的类型 | String | -- | success |