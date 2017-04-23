# 安装

## npm 安装

```
npm install flyme-ui --save-dev
```

## webpack 配置

我们建议你使用 webpack + vue 单文件组件进行开发，并确保 webpack 配置文件中包含以下内容：

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                js: 'babel-loader?presets[]=env'
                            }
                        }
                    }
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            }, {
                test: /\.svg$/,
                use: 'svg-sprite-loader'
            }
        ]
    }
}
```