# github actions 部署vue3项目
最近打算使用VUE3 + TS开发一个番茄时钟项目，顺便使用github actions部署一下，它有很多优点，也可以省去服务器的费用
## 一、package.json设置
在文件中加上配置`homepage: https://[用户名].github.io/[项目名]`（待验证）
##  二、设置 Personal Token
从右上角个人设定的 Settings 进入后，点入左边侧栏的 Developer Settings 并点击 Personal access tokens 就可以进入到建立页面
建立页面可以选择这个 token 可触及的相关权限，因为要使用 Actions 所以至少要勾 workflow (勾选 workflow 后会自动勾选第一个 repo 相关)
（待验证）
## 三、在储存库设定 Secrets
在 Actions 的 yaml 档中会用到刚刚建立的 token，但这并不建议被直接写在 .yaml 中曝光，所以需要到 Secrets 中设定，概念上和 .env 是类似的～
Name 为 ACCESS_TOKEN，value 则是上一个步骤建立的 Personal token，复制贴过来就可以
## 四、设定 Actions
这里使用去看github文档，[链接](https://docs.github.com/en/actions)，这里参考了一下别人的文件。
部署成功后会生成一个gh-pages分支。
```yaml
# This is a basic workflow to help you get started with Actions
name: deploy

# Controls when the action will run. 
on:
# Triggers the workflow on push or pull request events but only for the main branch
push:
branches:
- main
pull_request:
branches:
- main

# Allows you to run this workflow manually from the Actions tab
workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
# This workflow contains a single job called "build"
build:
# The type of runner that the job will run on
runs-on: ubuntu-latest

# Steps represent a sequence of tasks that will be executed as part of the job
steps:
# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
- uses: actions/checkout@v2

- name: Install & Build # 執行指令
run: |
npm install
npm run build

# Runs a single command using the runners shell
- name: Deploy
uses: JamesIves/github-pages-deploy-action@releases/v4
with:
ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # Settings > Secret 建立的 ACCESS_TOKEN，推同個 repo 的話可以不需要
BRANCH: gh-pages # deploy 到 gh-pages 這個分支
FOLDER: dist # build 後的資料夾
```

## 五、确认
接著只要到 Settings 设定 GitHub Pages 就可以了，把默认分支切到gh-pages。
## 六、踩坑

1. 打包路劲使用使用相对路径，使用觉得路径会导致404。方法，在vite.config.js中添加一个`base: './'`
2. 路由模式使用history会出现页面空白，使用hash模式解决。方法`createWebHistory`=>`createWebHashHistory`，后面研究一下原因。
