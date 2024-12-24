---
title: 规范
createTime: 2024/12/24 09:15:24
permalink: /git/ur6qna7c/
---

# Git 提交规范

Git 提交规范对于团队协作和项目管理至关重要。良好的提交规范有助于团队成员更好地理解和追踪项目的变更历史。以下是常见的 Git
提交规范。

## 提交信息格式

Git 提交信息通常包括以下三部分：

- **标题（Header）**：简洁地描述本次提交的目的或改动。通常限制在 50 字符以内，并且使用祈使句。
- **正文（Body）**：详细描述本次提交的内容，包括为什么做这个改动、解决了什么问题、如何解决的等。正文应该尽量详细清晰，每行不超过
  72 个字符。
- **尾部（Footer）**：如果有相关的 `issue` 或 `bug`，可以在这里引用。常用于关联任务、问题跟踪等。

**示例格式**:

```text
<类型>( <模块>):<简短描述>

<详细描述>

<Footer>
```

## 常见的提交类型

常见的提交类型包括：

- `feat`：新增功能
- `fix`：修复 bug
- `docs`：文档修改
- `style`：代码格式调整（空格、缩进、逗号等，不影响功能的更改）
- `refactor`：重构代码（不改变功能的修改）
- `perf`：性能优化
- `test`：增加测试
- `chore`：其他杂项任务（如构建、依赖项更新等）
- `build`：构建相关的改动（如 CI 配置、编译工具等）
- `ci`：持续集成相关的更改
- `revert`：回滚某次提交

## 提交信息写作规范

### 标题

- 使用动词的原形（如：Add、Fix、Update），避免使用已完成时态（如：Added、Fixed）。
- 使用简洁明了的语言，通常限制在 50 字符以内，便于快速浏览。
- 以大写字母开头，避免句号结尾。

### 正文

- 如果有必要，提供更多的上下文，特别是对为什么做此更改的解释。
- 每行长度应尽量控制在 72 字符以内，确保在 Git 的日志中可以易于阅读。
- 描述清楚“做了什么”和“为什么做”，避免过于笼统的描述。

### 尾部

- 如果相关，可以添加任务跟踪系统的 ID，如 GitHub、JIRA 等（例如：`Closes #123`、`Fixes JIRA-456`）。

**示例提交信息**:

```shell
feat(auth): add login API

- Implemented login endpoint with JWT authentication
- Added validation for user credentials
- Enhanced error handling

Closes #42
```

## 提交规范的其他规则

- **避免提交不必要的文件**：不要将编译结果、临时文件、IDE 配置文件等提交到版本控制中。可以通过 `.gitignore` 文件来忽略这些文件。
- **逻辑清晰的单一提交**：每次提交应针对一个问题或功能进行修改，避免提交过多不同类型的改动（例如：修复 Bug 和添加新功能应分开提交）。
- **Rebase vs Merge**：在协作时，尽量使用 `git rebase` 来保持提交历史的清晰和线性。合并提交（merge）应仅在必要时使用（如合并
  feature 分支到主分支时）。

## 提交历史的管理

- **Squash 提交**：在完成一个功能开发后，可以将多个提交压缩为一个，以减少历史提交的冗余，保持 Git 历史的简洁。
- **修改历史**：通过修改最近一次提交或使用交互式 rebase 修改多个提交。

## 规范工具

- **Commitlint**：用于检查提交信息是否符合规范，可以配置 `commitlint` 来验证提交信息格式。
- **Husky**：用于在 Git 钩子（hooks）中运行 Git 命令或脚本（如：`pre-commit`、`commit-msg` 钩子），确保提交信息格式符合要求。

配置这些工具能够帮助确保团队的一致性，并在提交时自动进行检查。


- <Badge type="danger" text=" TODO 以后添加 `Husky` 和 `lint-staged` "></Badge>

**Example of Husky + Commitlint Setup**:

1. 安装 `husky` 和 `commitlint`：

```bash
npm install --save-dev husky
npm i @commitlint/config-conventional @commitlint/cli -D
npm install lint-staged -D
```

2. 配置 `commitlint`： 在项目根目录下创建 `.commitlintrc.json` 文件，内容如下：

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

3. 配置 `husky`： 在 `package.json` 中添加 `husky` 钩子配置：

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## 总结

遵循一致的 Git 提交规范能够帮助团队在协作中更清晰地理解代码变动，减少冲突并提高代码质量。良好的提交历史不仅有助于代码审查和回滚，也能帮助项目维护者在未来回顾历史时，清晰地理解每次更改的目的和影响。
