## 生成一个公钥
```
ssh-keygen
公钥地址 ~/.ssh/id_rsa.pub
```
服务器的公钥放在部署公钥，项目的管理选项
安装的文件夹在 /etc
## 学习问题

使用pm2打开一个node服务器，可以不占用后台
```
pm2 start 文件名
pm2 restart 文件名
```
## 数据库

数据库安装 mongodb-server
## 导出数据库文件
mongodump -d 数据库名称
### 恢复数据库
mongorestore
### npm换淘宝镜像
```
npm config set registry=http://registry.npmjs.org
```
### n 这个包可以升级nodejs
```
npm install -g n
n latest
```
### 重载nginx配置文件
```
service nginx reload
```
### 图片地址不对
先更改上传地址的ip
使用mongdodb客户端ssh远程登录数据库
### 启用https
使用 let's encrypt


