# 单人项目 Git 工作流程与升级指南

本文档整理了本次会话中关于单人项目 Git 分支管理、升级流程、常用 Git 命令以及注意事项的内容，适合导出 Markdown 使用。

---

## 1. 分支结构建议

### 推荐分支

| 分支 | 用途 |
|----|----|
| main | 永远稳定，可部署 |
| develop | 日常开发和升级测试 |
| feature/* | 具体新功能开发 |
| chore/* | 升级或杂项任务 |

### 命名规范
- feature/xxx，例如 `feature/login`
- chore/xxx，例如 `chore/upgrade-deps`
- fix/xxx，例如 `fix/login-null`

> 原则：一个需求或任务对应一个分支。

---

## 2. 单人项目分支工作流程

### 1️⃣ 创建 develop 分支

```bash
git checkout main
git pull
git checkout -b develop
git push -u origin develop
```

### 2️⃣ 开始一个新任务

```bash
git checkout develop
git pull
git checkout -b feature/xxx  # 或 chore/xxx
```

### 3️⃣ 修改 & 小步提交

```bash
git add .
git commit -m "feat: 新增登录页面表单"
```
- 一次改一件事
- commit 消息尽量描述改动

### 4️⃣ 自测
- 确认项目能跑
- 核心流程正常

### 5️⃣ 合并回 develop

```bash
git checkout develop
git merge feature/xxx
```
- develop 上测试整体功能是否正常

### 6️⃣ 合并到 main 并部署

```bash
git checkout main
git merge develop
git tag v1.1.0
git push
git push origin --tags
```
- main 保持稳定可部署
- 打 tag 便于回滚

### 7️⃣ 删除已完成分支

```bash
git branch -d feature/xxx  # 本地删除
"remote branch 删除示例
git push origin --delete feature/xxx  # 远程删除
```
- 保持仓库整洁
- 避免误操作

---

## 3. Git 命令区分

### 1️⃣ reset
- **作用**：把分支指针拉回过去的某个提交（改变历史）
- 常用模式：
  - `--soft`：提交取消，修改仍在暂存区
  - `--mixed`（默认）：提交取消，修改在工作区未暂存
  - `--hard`：提交和修改全部丢失（危险）
- **适用场景**：本地分支、未 push 的 commit

### 2️⃣ revert
- **作用**：新建一个反向 commit，抵消指定提交，不改历史
- **适用场景**：已经 push 的 commit、main 或 develop 分支

### 3️⃣ rebase
- **作用**：把你的提交挪到另一个分支之后，重写历史
- **适用场景**：整理本地 feature 分支历史，使其干净
- **注意**：不要在已经 push 的公共分支上使用

> 口诀总结：
> - 已经 push → revert
> - 本地修改整理 → reset 或 rebase

---

## 4. 升级破坏性依赖的安全流程

### 1️⃣ 封存当前版本

```bash
git checkout main
git tag pre-upgrade-v1
git push origin --tags
```
- 确保有可回滚的稳定版本

### 2️⃣ 创建升级分支

```bash
git checkout develop
git checkout -b chore/upgrade-deps
```

### 3️⃣ 升级库的顺序
1. 构建工具（Vite / Webpack）
2. 框架主版本（Vue / React）
3. 路由库
4. 状态管理库
5. UI / 工具库

### 4️⃣ 升级操作步骤
- 升级一个库 → 运行项目 → 修复报错 → commit
- 一次只升级一个“大块”，小步提交

### 5️⃣ 合并流程
1. develop 测试通过 → merge 回 develop
2. develop 稳定 → merge 回 main
3. 打新 tag → 部署

### 6️⃣ 注意事项
- 保留 main 分支稳定版本
- 使用 commit 记录每次改动  
- 遇到问题随时可以 reset 或删除升级分支  
- 升级前后打 tag 方便回滚

---

## 5. 切换分支未提交修改的注意事项

- 如果切换分支时修改未提交，Git 可能会：
  1. 拒绝切换（有冲突）
  2. 带修改一起切换（无冲突）
- 回到原分支后 commit，这些修改会正常记录  
- 对 develop 分支没有影响，但要注意不要误 merge 到其他分支
- 养成习惯：切分支前先 `git add` / `git commit` 或 `git stash`

---

## 6. 总结原则

1. main 永远稳定、可部署
2. develop 做日常开发和升级测试
3. 每个需求或任务开新分支
4. commit 小步、清晰、可追踪
5. 完成分支任务后删除本地和远程分支
6. 升级破坏性依赖遵循小步升级 → 测试 → 合并 → 部署
7. Git reset/revert/rebase 使用要分清场景

---

> 这份文档可作为单人项目 Git 分支管理与升级指南参考，每次新需求或升级任务都可以按照此流程操作，