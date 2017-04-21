# 使用

> 教程中的案例代码将使用 [ES2015](http://es6.ruanyifeng.com/) 来编写

## 引入 Flyme UI

引入 Flyme UI 是非常简单的，只需在 `webpack` 入口页面 js 中 `import` 并使用 `Vue.use` 即可：

```javascript
import Vue from 'vue';
import FlymeUI from 'flyme-ui';
Vue.use(FlymeUI);
```

因为我们在安装过程中已经注册好了全部组件，所以您无需手动引入即可直接调用全部组件与方法：

```html
<template>
    <div id="app">
        <!-- 使用组件 -->
        <fm-header title="Flyme UI">
            <fm-icon @click.native="showToast" id="location" color="#f12528"></fm-icon>
        </fm-header>
    </div>
</template>
<script>
    export default {
        data: () => ({}),
        methods: {
            showToast() {
                // 调用实例方法
                this.$toast('Flyme UI');
            }
        }
    }
</script>
```

## 按需引用

如果您想在 webpack 中按需使用组件，减少文件体积，可以这样写：

```html
<template>
    <div id="app">
        <!-- 使用组件 -->
        <fm-header title="Flyme UI"></fm-header>
    </div>
</template>
<script>
    import fmHeader from 'flyme-ui/src/component/header'; // 手动引入
    export default {
        components: {
            fmHeader // 手动注册
        },
        data: () => ({})
    }
</script>
```



