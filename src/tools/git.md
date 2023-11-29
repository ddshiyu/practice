# git相关操作与配置
## 一、初始化
### 1.1、查看配置
git config user.name
git config user.email
### 1.2、设置配置
git config --global user.name "xxx"
git config --global user.email "xxx"
## 二、添加公钥

首先输入代码生成ssh key
```shell
  ssh-keygen -t rsa -C "xxxxx@xxxxx.com（你的邮箱）" 
```

windows文件夹：C:\Users\dong\.ssh
mac文件夹：~/.ssh/id_rsa.pub
然后复制该文件内容粘贴到github-setting-ssh and gps keys中添加公钥
## 三、提交规范
- type: commit 的类型
- feat: 新特性
- fix: 修改问题
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改
- test: 测试用例修改
- chore: 其他修改, 比如构建流程, 依赖管理.
- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述, 建议符合 50/72 formatting
- body: commit 具体修改内容, 可以分为多行, 建议符合 50/72 formatting
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接
## 四、远程
```javascript
git remote -v 查看远程仓库
git remote set-url origin [url] 修改设置远程仓库
git remote rm origin    删除远程仓库
git remote add origin [url]    添加远程仓库
```

