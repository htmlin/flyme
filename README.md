# Flyme UI

[![npm package](https://img.shields.io/npm/v/flyme-ui.svg)](https://www.npmjs.org/package/flyme-ui)

> 一套基于 Vue.js 的移动端 UI 组件库

## 安装

```
npm install flyme-ui --save-dev
```

## 使用

### 公共组件

```html
<!-- vue 单文件组件 -->
<template>
    ...
    <fm-icon :size="18" color="#f12528" id="location"></fm-icon>
    ...
</template>
<script>
    // 建议以 fm 为前缀进行重命名
    import { icon as fmIcon } from 'flyme-ui';
    export default {
        components: {
            fmIcon,
            ...
        },
        ...
    }
</script>
```

## 组件

[Header 标题栏](doc/header.md)

[Icon 图标](doc/icon.md)

[Tag 标签](doc/tag.md)

## 贡献

在任何形式的参与前，请先阅读[贡献指南](CONTRIBUTING.md)。如果你希望参与贡献，欢迎 Pull Request，或给我们报告 Bug。