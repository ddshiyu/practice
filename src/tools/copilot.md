# 解决github copilot不生效的方法
## 一、配置hosts
```javascript
copilot config
140.82.112.3 github.com
140.82.112.3 api.github.com

# vscode copilot config
140.82.112.3 github.com
140.82.112.5 api.github.com

# vscode copilot config
140.82.112.5 github.com
140.82.112.5 api.github.com

# vscode copilot config
140.82.112.5 github.com
140.82.112.5 api.github.com
```
## 二、配置vscode的http_proxy
一般情况下要开启代理，因为github在国内的原因，代理软件也可以查看代理地址
![image.png](/images/tools/image1.png)

![image.png](/images/tools/image2.png)
