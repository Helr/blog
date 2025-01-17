### 线上文档地址
[http://192.168.2.212:4999/](http://192.168.2.212:4999/)
账号：showdoc
密码：123456

### 访问地址
[http://192.168.2.212:8888/](http://192.168.2.212:8888/)
账号:caosiwei
密码：123456

### 运行环境
#### 服务器
地址: 192.168.2.212
用户:caoosiwei
密码:Chy123..
#### docker-compose所在位置
/docker-compose/Jenkins

### 大屏向日葵
识别码：814394726
验证码：rbf1
### 部署
端口号 8888

sudo 获取 某个用户权限 以当前用户的身份去运行目标命令

sudo su
    不需要输入密码是因为 将当前用户设置到`/etc/sutdoers`文件中并且可以不需要输入密码就使用该命令

su 切换用户

docker run -d 是 Docker 命令的一部分，用于在后台（detached mode）运行容器。以下是该命令的基本语法和一些常见选项：

bash
Copy code
docker run -d [OPTIONS] IMAGE [COMMAND] [ARG...]
-d：以后台（守护进程）模式运行容器。
OPTIONS：其他选项，例如端口映射、数据卷挂载等。
IMAGE：指定要运行的容器镜像。
COMMAND：在容器内运行的命令。
ARG：命令的参数。
以下是一些示例：

运行一个基本的容器：

bash
Copy code
docker run -d ubuntu
这将在后台运行一个基本的 Ubuntu 容器。

运行容器并映射端口：

bash
Copy code
docker run -d -p 8080:80 nginx
这将在后台运行一个 Nginx 容器，并将宿主机的8080端口映射到容器的80端口。

todo
```bash
history

find
docker inspect [containerid]
docker-compose ps -a
docker info
history | grep 8188
docker images
docker-compose restart

docker-compose down
docker-compose up -d
sudo  shutdown now


| 
&&

```

### showdoc

#### 启动

```bash
docker run -d --name showdoc --user=root --privileged=true -p 4999:80 -v /showdoc_data/html:/var/www/html/ 192.168.2.129:5000/showdoc:latest
```

#### 关闭

```
```

### Jenkins

```bash
cd /home/caosiwei/docker-compose/jenkins
```

#### 启动
```bash
docker-compose up -d
```

#### 关闭
```bash
docker-compose down
```

无人船
    [http://allinone.rainbowfish11000.prod/](http://allinone.rainbowfish11000.prod/)
健康：
  \- 运动员版: [http://116.236.140.154:18800](http://116.236.140.154:18800)
  \- 青少年版: [http://116.236.140.154:8800](http://116.236.140.154:8800)
  \- 医院版: [http://116.236.140.154:20080](http://116.236.140.154:20080)
  \- 测试版:[192.168.2.90](192.168.2.90)
	
argo:[http://192.168.2.191:8092](http://192.168.2.191:8092)
大屏：

控制端:[http://192.168.2.212:8084](http://192.168.2.212:8084)
展示端(大屏端):[http://192.168.2.212:8085](http://192.168.2.212:8085)
智慧海洋物联网(子页面):[http://192.168.2.212:8087](http://192.168.2.212:8087)
海洋生态环境大数据(子页面):[http://192.168.2.198:8080](http://192.168.2.198:8080)

文档所在地址[http://192.168.2.212:4999/](http://192.168.2.212:4999/)