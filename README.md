# 飞行之家（大黄蜂）v2.0

一个专业的无人机培训管理平台，基于 React + Vite + TypeScript + Tailwind CSS 构建。

## 项目简介

飞行之家（大黄蜂）是一个全面的无人机培训学习平台，包含：
- 📚 题库练习系统（顺序练习、章节练习、模拟考试等）
- 🏫 培训机构信息展示
- 👤 个人中心管理
- 💼 飞手工作信息
- 📱 移动端优先的响应式设计

## 技术栈

- **框架**: React 18.3 + TypeScript 5.7
- **构建工具**: Vite 6.3
- **样式**: Tailwind CSS 4.1
- **UI 组件**: Radix UI (无头组件库)
- **动画**: Framer Motion
- **图标**: Lucide React
- **轮播**: React Slick + Embla Carousel
- **图表**: Recharts
- **表单**: React Hook Form
- **通知**: Sonner

## 功能模块

### 考试模块
- 顺序练习
- 章节练习
- 模拟考试
- 真实考场外接
- 考前密卷
- AI 问答助手
- 精简题库
- 每日一练
- 考试记录
- 我的错题
- 我的收藏

### 机构模块
- 培训机构列表
- 机构详情
- 教练列表
- 学员评价
- 在线咨询

### 个人中心
- 角色切换（学员/飞手）
- CAAC 证书绑定
- 邀请码管理
- 个人信息设置

### 工作模块
- 飞手职位列表
- 职位详情
- 在线申请

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

### 生产构建

```bash
npm run build
```

构建产物将输出到 `build` 目录。

### 预览生产构建

```bash
npm run preview
```

## 部署到 GitHub Pages（在线预览）

将应用部署到 GitHub 后，可生成预览链接发给他人访问（如手机扫码打开）。

### 步骤

1. **在 GitHub 创建新仓库**  
   例如仓库名为 `feixingzhijia-v2`（或任意名称），不要勾选「Initialize with README」。

2. **本地关联并推送**（若尚未关联过远程）  
   ```bash
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```  
   若已有 `origin`，直接执行：  
   ```bash
   git push origin main
   ```

3. **开启 GitHub Pages**  
   - 仓库页 → **Settings** → **Pages**  
   - **Source** 选择 **GitHub Actions**（不要选 Deploy from a branch）。

4. **自动部署**  
   每次推送到 `main` 分支后，Actions 会自动构建并部署。  
   预览地址为：  
   **`https://<你的用户名>.github.io/<仓库名>/`**  
   例如：`https://yourname.github.io/feixingzhijia-v2/`

5. **分享链接**  
   把上述预览链接发给朋友即可在浏览器或手机中打开。

### 说明

- 构建使用 `npm run build:pages`（仅 Vite 构建，适用于 Pages 部署）。
- 本地完整类型检查请使用：`npm run build`。

### 若链接打不开（404 或点击没反应）

1. **确认预览地址**  
   必须带末尾斜杠：`https://<用户名>.github.io/<仓库名>/`  
   例如：`https://ericzr.github.io/feixingzhijia-v2/`（不要漏掉最后的 `/`）。

2. **确认 Pages 来源**  
   仓库 **Settings** → **Pages** → **Build and deployment**：  
   **Source** 必须选 **GitHub Actions**（不能选 "Deploy from a branch"）。选错会导致根路径 404。

3. **确认 Actions 已成功**  
   仓库 **Actions** 里找到 "Deploy to GitHub Pages" 工作流，点进最新一次运行：
   - 若 **build** 或 **deploy** 为红色失败，点进去看报错并修复后重新推送。  
   - 若为绿色成功，等 1～2 分钟再访问链接（有时部署有延迟）。

4. **首次部署或刚改过 Source**  
   若刚把 Source 改成 "GitHub Actions"，需要触发一次部署：  
   - 在 **Actions** 里打开 "Deploy to GitHub Pages"，点 **Run workflow** → **Run workflow**，等跑完后再访问链接。

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── home/           # 首页相关组件
│   ├── city/           # 城市选择组件
│   ├── exam/           # 考试类型选择
│   ├── practice/       # 练习模块组件
│   ├── profile/        # 个人中心组件
│   ├── jobs/           # 工作模块组件
│   ├── simulation/     # 模拟考试组件
│   ├── common/         # 通用组件
│   ├── figma/          # Figma 导入组件
│   └── ui/             # UI 基础组件
├── imports/            # Figma 导入文件
├── assets/             # 静态资源
├── styles/             # 样式文件
├── App.tsx             # 主应用组件
├── main.tsx            # 入口文件
└── index.css           # 全局样式

```

## 开发规范

### 代码风格
- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 使用 Tailwind CSS 进行样式开发
- 组件采用函数式组件 + Hooks

### 命名规范
- 组件文件：PascalCase (如 `Header.tsx`)
- 工具函数：camelCase (如 `formatDate.ts`)
- 常量：UPPER_SNAKE_CASE (如 `API_BASE_URL`)

### Git 提交规范
- feat: 新功能
- fix: 修复 bug
- docs: 文档更新
- style: 代码格式调整
- refactor: 重构
- test: 测试相关
- chore: 构建/工具链更新

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

本项目为私有项目，未经授权不得使用。

## 联系方式

如有问题，请联系项目维护团队。

---

**注意**: 本项目基于 Figma 设计文件生成，原始设计链接: https://www.figma.com/design/VHsx6lLg1lXowtbzxmfctE
