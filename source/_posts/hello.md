---
title: 个人简历
date: 2026-08-08 12:00:00
tags:
  - 简历
categories:
  - 个人
---

## 自我评价

从 2008 年毕业至今，我一直专注于一线开发和技术管理工作，主要聚焦于 web 开发，尤其是前端开发。国内最早一批 web 前端工程师之一，历经头部互联网公司、创业公司、自由职业和技术咨询等多种角色，对精益创业、SaaS、跨境电商和 Web3 领域有深入理解，具备全栈及端到端交付能力，擅长从 0 到 1 组建团队并以低成本高效实现研发目标。

近年在 Web3 加密资产交易领域积累了完整的 DEX/CEX 前端交付经验，覆盖现货与永续合约核心链路、钱包签名体系及高实时金融系统架构。同时以技术咨询和自由职业身份独立交付了多个全栈 SaaS 产品：跨境电商 VAT/EPR 合规平台（React 19 + Node.js + MySQL，服务数百卖家）、跨境电商广告与运营数据中台（Egg.js + React + K8s，日处理数万订单及广告数据）、以及 AI 驱动的 VAT 合规助手 MVP（DeepSeek + Vercel Serverless）。积极拥抱 AI 辅助开发，围绕代码审查、调试诊断、任务规划等环节自研了多个 Claude Code Skill，将 AI 深度融入日常开发工作流，显著提升交付效率。

## 主要教育及职业经历

### 技术咨询 & 自由职业（2024.03 ~ 今）

独立承接多个全栈 SaaS 产品交付，覆盖跨境电商、AI 应用及 Web3 交易领域：

**海味跨境电商 VAT 合规平台**（React 19 + TypeScript + Node.js + MySQL）

- 从零交付面向欧洲跨境电商卖家的 VAT/EPR 合规管理 SaaS 平台，覆盖多国 VAT 注册、税务申报、自动算税及 EPR 合规全流程，服务数百卖家。
- 全栈独立负责：React 19 + TanStack + ShadcnUI 管理后台，Koa + Sequelize 后端，阿里云 OSS/OCR 集成，PM2 + Docker 生产部署。
- 建立版本化数据库迁移及 Playwright E2E 自动化测试体系（90+ 用例），i18n 中英双语支持。

**MetaEcoms 跨境电商广告运营数据中台**（Egg.js + React + Ant Design + K8s）

- 为 Shopify + Meta 广告投放业务搭建数据中台，通过 30+ 定时任务同步 Meta 广告投放数据（多 BM 账户）、Shopify 订单/商品及 WorldFirst 跨境支付流水。
- 交付 React 后台 Dashboard（ROAS 分析、成本日报、爆品排行），支撑运营团队日常广告投放决策，替代原有手工统计流程。
- 搭建 GitHub Actions → 阿里云 ACK（Kubernetes）CI/CD 流水线，dev/prod 双环境自动部署及 SSL 证书管理。

**BorderWise AI VAT 合规助手**（React 19 + DeepSeek + Vercel Serverless）

- 从产品构思到上线独立完成：PRD、市场调研（定位 $29-299/mo vs Avalara $1k+/mo）、技术架构及全栈开发。
- React 19 + Vercel Serverless 对话式产品，SSE 流式调用 DeepSeek，每日 IP 限流、会话持久化及 GA 埋点，GitHub Actions 周度欧盟法规爬虫自动更新知识库。

### CMC Top 5 DEX 交易所｜高级前端工程师（2024.03 ~ 今）

**技术栈：** React、TypeScript、React Query、WebSocket、TradingView、EIP-712、Privy、WalletConnect、SSR、Sentry、GitLab CI、ArgoCD

- 建设现货与永续交易终端核心链路：下单、持仓、TPSL、订单校验、私有 WebSocket 数据同步及 TradingView 快捷交易。
- 推动多账户资产模块统一重构，引入事件驱动弹窗及 EIP-712 签名；建设 Web3 钱包与交易签名体系，覆盖 WalletConnect、Privy MPC Wallet、会话恢复及自动切链。
- 完善高实时交易系统稳定性：WebSocket 重连订阅、Error Boundary 及 Sentry 异常上报；参与 SSR/SEO 服务端链路建设。
- 基于 Polymarket SDK 从零搭建预测市场产品，深入理解 CLOB 订单簿、AMM 定价及条件代币链上结算机制。
- 在 UIKit 中沉淀响应式 Table、Dialog、Select 等基础组件及测试；优化 GitLab CI、ArgoCD 及 Sentry Source Map 发布链路。

### 某去中心化衍生品交易所｜前端负责人 & 全栈开发（2026.01 ~ 2026.06）

**技术栈：** React、TypeScript、Rsbuild、Tailwind CSS、Go、gRPC、Kafka、MySQL、DynamoDB、AWS EKS、Kubernetes

- 独立交付交易平台 Web 端核心功能：K 线图表系统（保本价线、仓位线、快捷交易）、统计大盘（实时动画 + WebSocket）、消息中心及移动端适配。
- 全栈交付推荐返佣系统 V2：React 前端 6 语言 i18n，Go 后端 API + Kafka 消费链上事件自动计算返佣（支持 Replay 回放），MySQL + DynamoDB 混合查询。
- 从零搭建做市商面板子应用及 Go/Java/前端三类服务的 CI/CD 流水线，AWS EKS 多环境部署。

### 2018.2 ~ 2023.12 深圳店匠科技有限公司 技术专家

- 公司首位前端工程师，担任前端技术负责人，负责招聘、培养新人及团队激励
- 2019 年自主研发前端微服务
- 长期维护前端基础设施：CDN 回源、脚手架、Dockerfile、CI/CD、错误监控
- 优化电商网站前端性能，沉淀方法论，客户网站 Lighthouse 分数达 80+
- 领导 AB/灰度部署平台开发，代表公司参加 infoQ 架构师峰会分享
- 成立 DX 部门，推广 Trunk Based Development，提升团队效率

### 2016.2 ~ 2018.7 广发证券股份有限公司 应用开发岗

- 熟练运用云原生技术栈：Docker、K8s、Istio、Prometheus、Grafana、ELK、Jenkins、GitLab CI/CD
- 聚焦 MEAN 全栈开发，负责内部应用的前端、后端、部署及维护

### 2015.1 ~ 2016.1 深圳嘉特通信技术有限公司 前端架构师

### 2013.4 ~ 2014.12 百度 (深圳) web 前端研发工程师

- 负责国际化浏览器 Spark 前端开发及官网性能优化，首页呈现时间从 10s 缩短至 3s
- 基于 webkit 内核开发 BT 下载模块，实现表格列宽拖拽、多选、双击自适应等交互细节
- Chrome 插件开发（视频下载弹窗、BT 种子嗅探、Google 图片搜索）
- 使用 grunt 改进构建效率，async.js 重构异步回调，mockjson 实现前后端分离

### 2011.6 ~ 2013.3 百度 (北京) web 前端研发工程师

- 负责百度运维自动化系统 Noah 的前端研发
- 担任 FE 团队技术负责人，制定规范、培养新人
- 设计开发通用 Tangram 组件库 Nuit 及模块化方案

### 2011.3 ~ 2011.6 京东商城 前端工程师

- 与设计师配合实现项目原型，整理 web 前端开发规范及 UI 交互规范
- 整理 jQuery 通用组件库，使用 LabJs 按需加载

### 2004.9 ~ 2008.7 就读 湖北汽车工业学院

- 电气工程系 电气工程以及自动化专业 本科
