# vite相关配置
## 一、配置 ’@‘别名
```
resolve: {
        alias: {
            "@": resolve(__dirname, 'src'), // 路径别名
        },
        extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    }
```

```
{
    "compilerOptions" : {
        // ...
        "baseUrl": ".", // 用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响
        "paths": { // 用于设置模块名到基于baseUrl的路径映射
            "@/*": ["src/*"]
        }
        // ...
    }
}
```
## 二、环境变量
在webpack时期，**process.env**是一个环境变量，但是在vite更换了这个，而是使用 **import.meta.env**这个变量。
- import.meta.env.MODE: {string} 应用运行的[模式](https://link.juejin.cn?target=https%3A%2F%2Fvitejs.cn%2Fvite3-cn%2Fguide%2Fenv-and-mode.html%23modes)。
- import.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由[base配置项](https://link.juejin.cn?target=https%3A%2F%2Fvitejs.cn%2Fvite3-cn%2Fconfig%2Fshared-options.html%23base)决定。
- import.meta.env.PROD：{boolean} 应用是否运行在生产环境。
- import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
- import.meta.env.SSR: {boolean} 应用是否运行在 [server](https://link.juejin.cn?target=https%3A%2F%2Fvitejs.cn%2Fvite3-cn%2Fguide%2Fssr.html%23conditional-logic) 上。

### 自定义环境变量
vite会自动加载**.vite**或者**.vite[mode]**文件，一般我们只需要新建**.env.development**和**.env.production**文件来表示开发环境和生产环境。
**注意：只有以VITE_为前缀的变量才能识别。**
```javascript
VITE_APP_BASE_API = /api

VITE_APP_SERVER_URL = http://127.0.0.1:9999
```
### 加载自定义.env文件
默认加载开发环境和生成环境，如果新建一个测试环境要怎么获取变量，可以在package.json中指定。
```javascript
"scripts": {
  "test": "vite --mode test",
  "dev": "vite",
  "build": "vite build"
},
```

<test />