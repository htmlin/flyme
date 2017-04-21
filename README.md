# Flyme UI

[![npm package](https://img.shields.io/npm/v/flyme-ui.svg)](https://www.npmjs.org/package/flyme-ui)

> 一套基于 Vue.js 的移动端 UI 组件库

## 安装

```
npm install flyme-ui --save-dev
```

默认会导入所有组件，所以只需使用 `Vue.use()` 调用插件：

```javascript
import Vue from 'vue';
import FlymeUI from 'flyme-ui';
Vue.use(FlymeUI);
```

## 使用
```html
<!-- vue 单文件组件中使用 -->
<template>
    <!-- 使用组件 -->
    <fm-header title="Flyme UI">
        <fm-icon @click.native="showToast" id="location" color="#f12528"></fm-icon>
    </fm-header>
    <!-- ... -->
</template>
<script>
    export default {
        // ...
        methods: {
            showToast() {
                // 调用实例方法
                this.$toast('Flyme UI');
            }
        }
    }
</script>
```

## 组件

[Header 标题栏](doc/header.md)

[Icon 图标](doc/icon.md)

[Tag 标签](doc/tag.md)

## 贡献

在任何形式的参与前，请先阅读[贡献指南](CONTRIBUTING.md)。如果你希望参与贡献，欢迎 Pull Request，或给我们报告 Bug。