# Menu 菜单

> 该组件基于 [Icon 图标](switch.md) 与 [List 列表](list.md) 组件封装

## Menu Snippets

```html
<fm-menu>
    <fm-list-item @click.native="$router.push('/')" title="首页">
        <fm-icon id="home" slot="left"></fm-icon>
    </fm-list-item>
    <fm-list-item title="我的">
        <fm-icon id="user" slot="left"></fm-icon>
    </fm-list-item>
</fm-menu>
```

![](/doc/img/menu.png)

## Menu Slots

| 插槽名称 | 描述 |
| ----- | ----- |
| -- | 菜单项插槽，菜单项均需使用 [ListItem 列表项](list.md) 组件 |