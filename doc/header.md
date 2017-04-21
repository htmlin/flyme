# Header 标题栏

头部标题栏，支持 slot：

```html
<fm-header title="标题">
    <!-- 自定义内容，放置标题栏右侧 -->
</fm-header>
```

## Header Attributes

|  参数  |  描述  |  类型  |  默认值  | 可选值  |
|  -----  |  -----  |  -----  |  -----  |  -----  |
|  title  |  标题  |  String  |  document.title  |  --  |
|  color  |  标题字体颜色  |  String  |  #666  |  css 颜色值  |
|  backgroundColor  |  标题栏背景颜色  |  String  |  #fff  |  css 颜色值  |
|  underline  |  是否要标题栏下划线  |  Boolean  |  true  |  true, false  |

## Header Events

|  事件名称  |  描述  |  参数  |
|  -----  |  -----  |  -----  |
|  back  |  点击返回图标时触发  |  --  |