---
title: git
createTime: 2026/06/23 16:23:11
permalink: /series/Git/43rvf2jh/
---


# Git

Git 是一种**分布式版本控制系统（Distributed Version Control System ，简称 DVCS ）**，主要用于管理代码的变更历史和多人协作开发。它在软件开发中几乎是必备工具，像 GitHub、GitLab、Bitbucket 等平台都是基于 Git 构建的。

## 官网

### 官方文档：

[https://git-scm.com/docs](https://git-scm.com/docs)

#### 中文文档：

[https://git-scm.com/book/zh/v2](https://git-scm.com/book/zh/v2)

### 下载地址：

(https://git-scm.com/install/windows)[https://git-scm.com/install/windows]

## 下载

根据自己系统的情况对应下载

## 安装

在 windows 操作系统按照默认配置全局安装即可

**在安装 Git 的时候会默认安装Bash、CMD、GUI**

###  Bash

* Git Bash 是一个 shell ，是 windows 下的命令行工具，可以**执行 Linux 命令**
* Git Bash 是**基于CMD** 的，在**CMD的基础上增添一些新的命令与功能**
* 在使用时，推荐使用 Bash

### CMD

* 命令行提示符（CMD）是 **Windows 操作西永上的命令行解释程序**
* 当 Windows 上安装 Git 后，也可以使用 cmd 来运行 Git 命令

### GUI

* 提供了一个**图形用户界面**来运行 Git 命令

## 分布式版本控制系统：

* 客户端并不只是提取最新版本的文件快照，而是**把代码仓库完整的镜像出来，包括完整的历史记录**
* 即使任何一处协同工作用的服务器发生故障，事后都**可以用任何一个镜像出来的的本地仓库恢复**
* 每一次的克隆操作都是一次**对代码仓库的完整备份**

## **版本控制 **（Version control）：

维护工程蓝图的标准作法，能追踪工程蓝图从诞生一直到定案的过程，版本控制是一种软件工程技巧，借此能在软件开发的过程中，**确保由不同人所编辑的同一程序文件都得到同步**。

版本控制在软件开发中，可以帮助程序员进行代码的**追踪、维护、控制**等等一系列的操作

## 解决的痛点

* 不同版本的存储管理
  * 对项目迭代的每一个节点都可以有明确的标识

* 重大版本的备份维护
  * 对比较重大的版本，进行备份管理
* 恢复之前的项目版本
  * 当开发发生非常严重的问题时，可以回溯或者恢复到某一版本
* 多人开发的代码合并
  * 能将多人代码进行合并，并在出现代码冲突时进行更好的处理
* 支持 CI/CD 自动化

## 项目坏境

### 开发环境 development

开发环境是程序员**写代码、调试、测试功能**的地方。

#### 特点：

* 面向开发者
* 允许频繁修改代码
* 强调调试能力和灵活性
* 出错成本低

### 测试环境 Testing / QA

* 专门用于测试功能

* 接近生产环境配置

### 预发布环境 Staging


- **几乎和生产环境一模一样**
- 用于上线前最后验证

### 生产环境 production

生产环境是**真正给用户使用的系统环境**。

#### 特点：

*  面向最终用户
* 高稳定性、高性能
* 严格控制修改
* 出错代价高（影响真实用户）

#### 常见组成

1. 服务器
   * 云服务器（如 AWS、 阿里云、腾讯云）

1. 正式数据库
   * 存储真实用户数据
2. web 服务器
   * 如 Nginx、 Apache HTTP Server
3. 负载均衡、
   * 分担流量压力
4. 监控系统
   * 性能监控、错误报警
5. 安全措施等
   * HTTPS、 防火墙、权限控制

#### 示例：

一个已经上线的网站

* 用户通过域名访问：（如： www.xxx.com）
* 数据是真实订单、真实用户
* 系统24小时运行

### 常见流程：

```
开发环境 → 测试环境 → 预发布环境 → 生产环境
```

## Git 版本控制

### 获取 Git 仓库 （ git init / git clone）

### 文件的状态划分

#### 处于已经归于 Git 仓库管理下的文件状态

* 未跟踪：默认情况下，Git 仓库下的文件没有添加到 Git 仓库管理中，我们需要通过 add 命令进行操作

* 已跟踪：添加 Git 仓库管理的文件处于已跟踪状态， Git 可以对其进行各种跟踪管理

#### 已跟踪的文件进行的状态划分

* staged：暂缓区的文件状态
* unmodified：commit 命令。可以将 staged 中文件提交到 Git 仓库 
* modified：修改了某个文件后，会处于 modified 状态

可以有选择的将修改过的文件放入暂存区

### git 忽略文件

#### 配置 `.gitignore`

当有些文件无需纳入 Git  管理的时候，可以将其列入 `.gitignore` 文件中，比如

* 自动生成的文件，比如日志文件，编译过程中创建的临时文件
* 内存占比比较大的媒体文件

在实际开发中，不需要手动创建，只在需要的时候去添加自己的忽略内容即可，如果丢失，建议去 github 找同类型的去复制一份

github 上的模板 [https://github.com/github/gitignore

### Git 的校验和

####  Git 中所有的数据在储存前都会计算校验和，然后以校验和 来引用

* Git  用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）
* 是一个由 40 个十六进制字符（0-9 和 a-f）组成的字符串，基于 Git 中文件的内容和目录结构计算出来的

简单来说就是使用哈希值作为一个索引（或者理解成 id ）来记录变更

### 远程操作

#### 远程仓库（Remote Repository）

一般来说，代码会保存在一个本地仓库，所以基本上都是进行本地操作

在开发过程中，通常是多人开发，会将管理的代码共享到远程仓库中

远程仓库通常是搭建在某一个服务器上的（本地也有，但是本地很难实现共享）

一般是在 Git 服务器上搭建一个远程仓库

#### Git 服务器

* 第三方服务器。如 Github 、 Gitee、 Gitlab 等
* 在自己的服务器上搭建一个 Git 服务（使用 gitlab 软件）

#### 常见的远程仓库

* Github ：[https://github.com](https://github.com)
* Gitee: [https://gitee.com](https://gitee.com)
* Coding：[https://coding.net/](https://coding.net/)
* 自己搭建的 Gitlab

#### 在 Git 服务器上创建远程仓库

* 默认会展示 `README,md` 文件的内容
* 对于私有的仓库进行操作时，会进行身份验证（安全）

#### 远程仓库的验证

##### 基于 HTTP 凭证存储 （Credential Storage）

* HTTP 协议时无状态的连接，所以每次连接都需要用户名和密码

* Git 拥有一个凭证系统来处理这个事情（Git Credential 选项）

  * 选项一：默认所有都不缓存，每次都会询问用户名和密码

  * 选项二： `cache` 模式会将凭证存放在内存一段时间，密码永远不会被储存在磁盘中，并且在15分钟后从内存中清除

  * 选项三：`store` 模式会将凭证用明文的形式存放在磁盘中，并且永不过期

  * 当使用的是 MAC 时，Git 友一种 `osxkeychain` 模式，会将凭证缓存到你系统用户的钥匙串中（会进行加密）

  * 选项五：当使用的时 Windows ，可以安装一个`Git Credential Manager for Windows` 的辅助工具

    下载地址：[https://github.com/microsoft/Git-Credential-Manager-for-Windows](https://github.com/microsoft/Git-Credential-Manager-for-Windows)

    在安装 Git 的过程中已经默认安装过程已经默认安装过，并且是以密文的形式存在

    可以通过 `git config credential.hel per` 命令查看，出现`manager-core` 结果表示已安装

    ```shell
    git config credential.hel per
    ```

* 凭证删除：在 `控制面板\所有控制面板项\凭据管理器` 中展开删除

##### 基于 SSH 的密钥

* Secure Shell （安全外壳协议 ，简称 SSH）是一种加密的网络传输协议，可在不安全的网络中为网络服务提供安全的传输环境

* SSH 以非对称加密实现身份验证

  * 例如其中一种方法是使用自动生成的公钥-私钥对来简单地加密网络连接，随后使用密码认证进行登录

  ```shell
  ssh XXX
  用户名
  密码
  ```

  * 另一种方法是人工生成一对公钥和私钥，通过生成地密钥进行认证。这样就可以在不输入密码的情况下登录
  * 公钥需要放在带范文地电脑之中，而对应地私钥需要友用户自行保管

  ```shell
  # 复制 Git 服务器上的仓库 ssh
  # 当使用命令时，会生成公钥和私钥，公钥会储存在远程服务器上，私钥会在本地，通过公钥和私钥匹配来进行验证身份
  
  ```

* 以 SSH 的方式访问 Git 仓库，就需要生成对应的公钥和私钥

```shell
ssh-keygen -t ed25519 -C "your email"
ssh-keygen -t rsa -b 2048 -C "your email"
```

​	*此处的 `-t` 表示类型，即使用 `ed25519` 或者`rsa` 类型*

​	*建议在 `git bash ` 里面使用该命令*

* 生成的文件在本地`C:\Users\用户\.ssh` 中，找到对应的类型，打开文件复制

* 在服务器中配置，配置地址 ` 个人中心/ 安全设置/SSH公钥/添加公钥`

#### 管理远程仓库

##### 查看远程地址

使用`git remote` 查看远程仓库地址，使用`git remote -v` 查看详细信息

*-v 是 -verbose 的缩写（冗长的）*

 ##### 添加远程地址（可以添加多个远程地址）

也可以继续添加远程服务器（让本地仓库和远程服务器仓库建立连接）

```shell 
git remote add <shortName> <url>
# e.g.: git remote add github https://XXX@github.com/XXXX.git
```

**注意：在推送`git push `之前，一定要先拉取远程仓库 `git pull`  **

##### 本地仓库与远程仓库关联（使用上游分支进行分支跟踪）

当使用`git remote add` 与远程仓库关联的时候，会没有指定本地什么分支与远程的什么分支建立连接，此时使用 `git pull <本地分支名> <远程分支名>` 来指定分支建立连接，此时可以设置一个上游分支（跟踪分支），来建立关系

#### 远程仓库的交互

##### 从远程仓库clone 代码：将存储库克隆到新创建的目录中

使用`git clone`命令，**默认将本地分支跟踪（trask）远程远程分支**

```shell
git clone <url>
# e.g.: git clone https://XXX@github.com/XXXX.git
```

##### 将代码 push 到远程仓库：

**将本地仓库的代码推送到远程仓库中**

默认情况是将当前的分支（e.g.:master）push 到 origin 远程仓库的

```shell
git push 
git push origin master
```

##### 从远程仓库 fetch 代码:

**从远程仓库获取最新的代码**

* 默认情况时从 origin 中获取代码

```shell
git fetch
git fetch origin master
```

* 获取到代码后默认并没有合并到本地仓库，我们需要通过 merge 来合并

```shell
git merge
git merge origin/master # origin/master 为远程拉取下来的分支默认名
```

##### 从远程仓库 pull 代码

**上面的两次操作的简化行为**

```shell
git pull
git fetch + git merge (rebase)
```

### git 服务器

#### 仓库类型

##### 公开仓库 （public）

* 公知：由于大量用户使用，并且有 Microsoft（微软）背书，被收购

* 公开： 所有代码都是公开的，所以人都是可以看和使用的

* 维护：通过 issue 来提出/查看问题和建议

##### 私有仓库（private）

* 个人仓库，不公开

#### Github

基于奉献让人主动 stared，不要刻意去刷！！！

##### 创建远程仓库

1. 点击站内加号，选择 `New repository` 来创建一个仓库
2. 为仓库命名（Repository name），并加以简短的描述（Desciption ），选择仓库类型（Choose visibility）为公开仓库（Public）/ 私有仓库（Private）
3. 可以选择是否添加 `README.md` 和 开源协议（license）
4. 最后点击 `Create repository`，创建一个仓库

##### 常见的开源协议（解释来自chatGPT）：

* MIT License：最简单、最宽松，允许几乎任何用途（商用、闭源都可以，只需保留版权声明。适合：个人项目、希望被广泛使用的库
* Apache License 2.0：和 MIT 类似，但更严格一点提供**专利授权保护**，修改后需注明变更。适合：企业项目（比如 Google 很多项目用它）
* BSD License：和 MIT 很接近，有 2-Clause / 3-Clause 版本，允许自由使用和再发布
* GNU General Public License（GPL）：最典型的“强传染”协议，修改或链接后必须开源整个项目，不允许闭源商用（除非整体开源）。适合：强调开源精神的项目（如 Linux kernel）
* GNU Lesser General Public License（LGPL）：GPL 的“弱化版”，允许被闭源项目调用（动态链接），但修改库本身仍需开源。常用于库（Library）
* GNU Affero General Public License（AGPL）：比 GPL 更严格，即使是**通过网络提供服务（SaaS）**，也必须开源。适合：防止“云服务闭源化”

##### 将本地仓库和远程仓库关联

* 建立本地仓库 `git init `  ,  `git commit -a -m "初始化项目"`
* 与远程仓库建立联系 `git remote add origin https://github.com/XXX.git`
* 拉取远程仓库，与本地仓库合并 `git pull`
* 和远程仓库的主分支建立上游分支 `git branch --set-upstream-to==origin/main`  `main`是 GitHub 的主分支
* 注意 GitHub 的主分支是 main ，本地仓库的主分支默认是 master
* 修改之后使用 `git commit -a -m "提交信息"` 
* 然后推送到远程仓库 `git push origin master main`

或者直接克隆 `git clone` 下来进行修改，提交 `git commit`，推送 `git push`

##### 维护远程仓库

在对应的项目里提出 / 查看 issue  



#### 常用分支名：

* master
* dev 
* develop
* hotfix（修复） 
* feature
* feature/[组件名、功能、页面等]
* release 发布
* refactor 重构
* perf  性能优化
* docs 文档
* style 样式
* test 测试
* chore    杂项优化
* topic  主题 / 想法 

### Git 提交对象

#### Git 原理

* 在进行提交时，会保存一个提交对象（commit object）
  * 该对象会包含一个指向暂存内容快照的指针
  * 该提交对象还包括作者的姓名和邮箱，提交时输入的信息以及指向他的父对象的指针（指针里面会有一个名为`tree` 的属性，属性值里面就时存储快照的映射关系）
    * 首次提交产生的提交对象没有父对象，普通提交操作产生的提交对象有一个父对象
    * 而且多个分支合并产生的提交对象有多个父对象

### 分支

#### Git master 分支

* Git 的分支，本质上仅仅时指向提交对象的可变指针
  * Git 的默认分支名是 master ，在多次提交操作之后，就已经有一个指向最后那个提交对象的 master 分支
  * master 分支会在每次提交时自动移动
* Git 的 master 分支并不是一个特殊的分支
  * 他和其他分支没有区别
  * 每个仓库都有，是因为他是初始化仓库时的默认分支名

#### 创建分支

* Git 创建新分支，只是创建了一个可以移动的新指针

  ```shell
  git branch test
  ```

* Git 通过 一个名为 `HEAD` 的特殊指针来确定当前处于那个分支上

#### 分支提交

* 当指向某一个分支，并在该分支上提交代码
* 然后切换回 `master` 分支，继续开发

#### 创建并切换分支

```shell
git checkout -b dev # 创建并切换到 dev 分支
```

#### 查看和删除分支

* 查看所有分支

  分支名前面有星星的是当前所处分支

  ```shell
  git branch
  ```

* 同时查看最后一次提交

  ```shell
  git branch -v
  ```

* 查看所有合并到当前分支的分支

  ```shell
  git branch --merged 
  ```

* 查看所有没有合并到当前分支的分支

  ```shell
  git branch --no-merged
  ```

* 删除当前分支 (指标)

  ```shell
  git branch -d hotfix
  ```

* 强制删除某一个分支 (指标)

  ```shell
  git branch -D hotfix
  ```


#### 为什么使用分支

* 简单的工作流
  * 开发某个项目，在默认分支（master）上进行
  * 实现项目的功能，不断的提交
  * 在某个大版本完成后，发布并打上tag
  * 当发现发布后的项目存在某些新需求或者是bug时，提交手头上的代码
  * 切换到 tag 指向的节点，在当前的节点开一个 hotfix 分支，进行迭代
  * 修复后，重新发布，并且和最新的代码进行合并 (即在master分支上)

#### 合并分支

```shell
git merge  hotfix/v1.0.1
```

* 合并冲突

  ```shell
  # 代码块1
  <<<<<<<< HEAD # 从这里开始发生冲突，且这里当前分支的内容
  # 代码块2
  ======== # 分隔用的占位符
  # 代码块3
  >>>>>>>> hotfix/v1.0.1 # 从这里结束这段冲突 ，且这里是被合并的代码块
  # 代码块4
  ```

  * 手动修复，判断该删的删
  * 智能修复：利用 idea 识别到冲突进行修复

* 然后 进行提交

**在多人开发过程中，尽可能不要去修改别人的文件，如果发现问题，建议去沟通，然后更新代码**

#### Git 的工作流

* 在整个项目开发周期的不同阶段，可以拥有多个开发的分支
* 可以定期的把某些分支合并入其他分支中
* 例如：
  * `master` 作为主分支
  * `dev `（或者 `develop` ） 作为开发分支，并且有稳定版本时，合并到 `master` 分支中
  * `topic` 作为某一个主题或者功能 或者特性 的分支进行开发，开发完成之后合并到 `develop` 分支中

##### 常见的工作流 (git flow)

* `master` 作为主分支，并打上 `tag`
* `hotfix` 修复bug 修复完毕进行合并到（`master` `develop`）分支
* `develop` 是开发分支
* `release` 是发布分支，进行测试，测试完毕后合并到（`master` `develop`）分支
* `feature` 是需求分支

#### Git 的远程分支

##### 远程分支也是一种分支结构

* 以 `<remote>/<branch>` 的形式命名的，如 `origin/main`

  ```shell
  git remote add url # 建立连接
  git fetch origin main # 本地叫origin/main 获取远程分支里的内容
  git branch --set-upstream-to=origin/main # 确认上游分支
  git merge --allow-unrelated-histories # 建立共同祖先
  git config push.dafault upstream  # 修改默认的合并行为
  git push
  ```

  或者新建一个`main` 分支去跟踪 `origin/main`

  ```shell
  git checkout --track origin/main # 创建一个main 分支去跟踪 origin/mian 分支
  ```

* 当别人修改了代码，那么就需要获取最新的远程分支提交信息

  ```shell
  git pull
  ```

####  远程分支管理

* 推送分支到远程

  * 当你想要分享一个分支时，需要将其推送到有写入权限的远程仓库上
  * 运行 ` git push <remote> <branch>`

* 跟踪远程分支

  * 当克隆一个仓库时，他通常回自动创建一个跟踪 `origin/naster` 的 `mater` 分支

  * 如果你愿意的话，可以以设置其他的跟踪分支，可以通过运行 `git checkout --track <remote>/<branch>`

  * 如果你尝试捡出分支（a） 不存在且 （b） 刚好只有一个名字与之匹配的远程分支。那么 Git 就会为你创建一个跟踪分支

    ```shell
    git checkout --track <remote>/<branch>
    git checkout <branch> # 简写
    ```

* 删除远程分支

  * 如果某一个远程分支不在使用，想要删除，利用运行 `--delete` 选项的 `git push` 命令来删除一个远程分支

    ```shell
    git push origin --delete <branch>
    ```

#### git rebase

* 介绍：
  * 是 `Git` 中整合来自不同分支的修改的方法之一，另一种是 `merge`
  * 当想要提取某一个分支（如 feature/xxx）中引入的补丁和修改，然后在 另一分支的基础上应用一次
  * 在 `Git` 中，这种操作被称为 变基 （rebase）
  * 使用 `rebase`  命令时，会将提交到某一分支上的所有修改都移至另一分支上
  * 如何简单理解
    * `rebase` 重新该百年当前分支的 `base`
    * 比如在分支 `feature`/xxx 上执行 `git rebase feature` ，那么可以改变 `feature/xxx` 的 `base` 为 `feature`

* 原理：

  ```shell
  git rebase feature  # 此时处于 `feature/xxx` 分支中 
  git merge feature/xxx   # 此时处于 `feature` 分支中，次操作是将最新的 `feature/xxx` 与 `feature` 分支合并
  ```

  个人理解是将 当前分支上的所有提交信息以及内容的父指针指向 目标指针

* 与 `git merge` 的区别
  * `git merge` 是生成一个新的提交对象，历史记录不是线性的，而 `git rebase` 是修改当前分支的父指针
  * `merge` 用于记录 `git` 的所有历史，包括分支合并时的历史错综复杂，也会圈闭记录，`rebase` 用于简化历史记录，将两个分支的历史简化，让整个历史更加简洁

**`rebase` 有一条黄金法则。永远不要在 主分支 上使用 `reabse`**

1. 如果在 `main` 上使用 `rebase` ，会造成大量的提交历史在 `main` 分支中不同
2. 多人开发时，其他人在原来的 `main` 中，对于提交历史来说会有很大的变化

### 标签（tag）

#### 对于重大的版本会选择打上标签，彰显其重要性：

* Git 可以给仓库历史种的某一个提交打上标签
* 比如 有代表性的发布节点 （v1.0 、v2.0等）

#### 创建标签

* Git 支持的标签分两种：轻量标签（lightweight）和附注标签（annotated）

* 附注标签L: 通过  `-a` 选项，并且通过`-m` 添加额外信息

  ```shell
  git tag v1.0.0
  
  git tag -a v1.1.0 -m "附注标签"
  ```

  查看某一个标签的详细信息

  ```shell
  git show v1.1.0
  ```

* 默认情况下，`git push` 命令不会传送标签到远程服务器上

  * 在创建标签之后，标签在默认情况下，指挥保存在本地，不会随着 `git push` 推送至远程

  * 向远程仓库推送标签

    ```shell
    git push origin v1.0.0 # 推送某一个
    git push origin --tags # 推送所有的
    ```
  
  * 删除本地 `tag`
  
    ```shell
    git tag -d <tagname>
    ```
  
  * 删除远程 `tag`
  
    ```shell
    git push origin -delete <tagname>
    git push origin -d <tagname>
    ```
  
  * 切换到某个 `tag`
  
    ```shell
    git checkout <tagname>
    ```
  
    建议切换新的分支之后切换`tag` 然后修改

## 常见命令

### git init

用于在目录中创建新的 Git 仓库

执行 `git init` 后，Git 会在当前目录下创建一个名为 `.git` 的隐藏文件夹，这个文件夹用于存储版本控制所需的所有元数据和对象

### git add

将文件添加到**暂缓区（暂存区）**，没有和任何提交联系在一起 

#### 添加一个或者多个文件进暂存区

```shell
git add [file] [file] ...
```

#### 指定某一文件夹添加进暂存区,包括子目录

```shell
git add [dir]
```

#### 添加当前所有文件进暂存区

```shell
git add .
```

### git commit

将暂存区内容添加到本地仓库中

#### 提交暂存区中的指定文件提交到本地仓库

```shell
git commit [file1] [file2] -m "提交信息"
```

#### `-a` 参数设置不需要执行 `git add .` 命令，直接来提交

```shell
git add .
git commit -m "提交信息"
```

等价于

```shell
git commit -a -m "提交信息" 
```

####  `--anend` 修改最后一次提交

### git log

在使用 `git ` 提交了若干更新之后，或者克隆了某一个项目，想回顾提交历史，可以使用 `git log` 命令查看

用于查看 Git 仓库中的提交历史

**注意：使用 `git log ` 查看历史，需要点击 `Q` 来退出查看历史记录**

#### 基本语法

```shell
git log [选项] [分支名/提交哈希]
```

常用的选项包括：

- `-p`：显示提交的补丁（具体更改内容）。
- `--oneline`：以简洁的一行格式显示提交信息。
- `--graph`：以图形化方式显示分支和合并历史。
- `--decorate`：显示分支和标签指向的提交。
- `--author=<作者>`：只显示特定作者的提交。
- `--since=<时间>`：只显示指定时间之后的提交。
- `--until=<时间>`：只显示指定时间之前的提交。
- `--grep=<模式>`：只显示包含指定模式的提交消息。
- `--no-merges`：不显示合并提交。
- `--stat`：显示简略统计信息，包括修改的文件和行数。
- `--abbrev-commit`：使用短提交哈希值。
- `--pretty=<格式>`：使用自定义的提交信息显示格式。

#### 常见命令

##### 将 log 以一行的简洁模式查看

```shell
git log --pretty=oneline
```

##### 将 log 以一行的简洁模式查看并以图结构展示

```shell
git log --pretty=oneline --graph
```

### git status

用于查看 Git 仓库当前状态的命令

#### 可以通过 `-s` 查看简洁信息

```shell
git status -s
```

简洁信息中左侧代表暂存区的状态，右侧指明了工作区的状态

### git reset

#### 版本回退

##### git 通过 HEAD 指针记录当前版本

* HEAD 是当前分支引用的指针，总是只想该分支上的最后一次提交
* 可以理解成该分支的最后一次提交的快照

##### 通过 HEAD 来改变 git 目前的版本指向

* 上一个版本是 HEAD^ ，上上一个版本就是 HEAD^^
* 如果是上1000个版本，可以使用 HEAD~1000
* 同样可以使用 HEAD^3 ，表示回退到上上上一个版本
* 同样可以指定某一个 commit id（校验和，可以只选择后几位）

#### 语法

```shell
git reset [--soft | --mixed | --hard] [HEAD]
```

### git reflog

查看历史操作记录

该命令记录了所有 HEAD 的移动，即使提交被删除和重置，都可以通过该命令找回

### git clone

### git merge

#### 当没有共同的上游分支时

 可以使用`git merge --allow-unrelated-histories` 来允许两个没有共同 base 的分支合并

```shell
git merge --allow-unrelated-histories
```

### git pull

### git push

* 完整写法

  ```shell
  git push origin master:main
  ```

* 默认行为 (推送至远程的master 分支)

  ```shell
  git push origin master
  ```

* 默认配置，去找到与本地分支相同的分支

  ```shell
  git push
  
  # git config push.default [参数]
  ```


### git fetch

### git branch

####  创建一个本地分支，并跟踪某一个远程分支

*建立本地分支和远程分支的关联关系*

```shell
git branch --track <本地分支名> <shortName/分支名>
# e.g.: git branch --track master origin/master
```



### git config

* 打开文档

  ```shell
  git config --help
  ```

  

### git tag

### git rm

### git revert







