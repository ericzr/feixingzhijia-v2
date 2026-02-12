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
