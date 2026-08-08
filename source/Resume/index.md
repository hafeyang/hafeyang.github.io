---
title: 简历
date: 2026-08-08 21:43:34
---

## 自我评价

从 2008 年毕业至今，我一直专注于一线开发和技术管理工作，主要聚焦于 web 开发，尤其是前端开发。国内最早一批 web 前端工程师之一，历经头部互联网公司、创业公司和远程咨询等多种角色，对精益创业、SaaS 和电商领域有深入理解，具备全栈以及 OPC 技术能力，擅长从 0 到 1 组建团队并以低成本高效实现研发目标。

近年深耕 Web3 加密资产交易领域，具备完整的 DEX/CEX 交易平台前端交付经验，覆盖现货与永续合约核心链路、WalletConnect/Privy/EIP-712 钱包签名体系及高实时金融系统架构，重视 Token Decimals 等金融数值安全问题。基于 Polymarket SDK 从零搭建预测市场产品，深入理解其订单簿匹配、AMM 定价、条件代币及链上结算机制。积极拥抱 AI 辅助开发，围绕代码审查、调试诊断、任务规划等环节开发了多个 Claude Code Skill，将 AI 深度融入日常开发工作流。

## 主要职业教育经历

### CMC Top 5 DEX 交易所｜高级前端工程师（2024.03 ~ 今）

**技术栈：** React、TypeScript、React Query、WebSocket、TradingView、EIP-712、Privy、WalletConnect、SSR、Sentry、GitLab CI、ArgoCD、Monorepo

- 持续建设现货与永续交易终端，覆盖下单、持仓管理、TPSL、Post-only/GTC、PnL 分享、订单校验、私有 WebSocket 数据同步及 TradingView 快捷交易等核心链路。
- 推动多账户资产模块重构，将 Perp V1、Perp V2 与 Spot 的充值、提现和内部划转收口至统一模块和提交入口，引入事件驱动弹窗及 EIP-712 签名，并清理多套重复实现。
- 建设 Web3 钱包与交易签名体系，覆盖 WalletConnect、Privy/MPC Embedded Wallet、现货订单签名、钱包有效性校验、会话恢复、Chain ID 校验及自动切链等异常场景。
- 完善高实时交易界面的稳定性与可观测性，处理 WebSocket 重连订阅、冗余连接、K 线请求重试、Error Boundary 和 Sentry 异常上报，覆盖交易、钱包、账户及充提关键路径。
- 推动前端模块化与公共能力沉淀，将历史资金模块迁移至 unified-asset，并在 UIKit 中沉淀响应式 Table、Dialog、Select、NumberInput 等基础组件及配套测试。
- 参与 SSR/SEO 服务端链路建设，完善 Metadata 数据源、缓存测试、结构化 SSR 日志、活动页服务端渲染及 Skeleton，降低 SSR 与客户端渲染不一致风险。
- 交付 Trade to Own、Buyback 等复杂活动与数据产品，覆盖奖励流程、排行榜、盲盒、奖池、趋势图、移动端适配、多语言及自动化测试。
- 基于 Polymarket SDK 从零搭建预测市场产品 Prediction，深入理解 Polymarket CLOB 订单簿、AMM 定价、条件代币（Conditional Tokens）框架及链上结算机制。
- 完善 GitLab CI、ArgoCD 部署等待、飞书通知及 Sentry Source Map 发布链路，提升前端部署过程的自动化程度和可追踪性。

### 某去中心化衍生品交易所｜前端负责人 & 全栈开发（2026.01 ~ 2026.06）

**技术栈：** React、TypeScript、Rsbuild、Tailwind CSS、Go、gRPC/Protobuf、Kafka、MySQL、DynamoDB、AWS EKS、Kubernetes、GitHub Actions

- 作为前端主要开发者，独立负责交易平台 Web 端核心功能交付，包括 K 线图表系统（保本价线、仓位线、委托指示器、快捷交易）、统计大盘（实时动画组件 + WebSocket 数据推送）、消息中心及移动端适配。
- 全栈交付推荐返佣系统 V2，前端实现推荐绑定、返佣明细、提现历史等完整流程并支持 6 语言 i18n；后端使用 Go 独立设计并实现返佣 API，Kafka 消费链上交易事件实现返佣自动计算，支持 Replay 模式回放历史数据，MySQL + DynamoDB 混合数据源跨库查询。
- 从零搭建做市商面板（MMDashboard）子应用，独立于主站部署，包含登录认证、资产仪表盘、自定义 Node.js Server、Rsbuild 构建配置及完整多语言支持。
- 负责 Go / Java / 前端三类服务的 GitHub Actions CI/CD 流水线及 AWS EKS（Kubernetes）多环境部署清单，完成多个新服务从零到主网的完整部署上线。
- 主导 Vite → Rsbuild 构建迁移，优化 chunk 分包策略；维护 gRPC 协议定义及 API 网关路由。

### 2018.2 ~ 2023.12 深圳店匠科技有限公司 技术专家

- 公司首位前端工程师，担任前端技术负责人，负责招聘、培养新人及团队激励
- 2019 年自主研发前端微服务
- 长期维护和改进前端基础设施，包括 CDN 回源程序、前端项目脚手架、Dockerfile 及所有前端项目的 CI/CD，前端错误监控
- 优化电商网站前端性能，积累并沉淀优化方法论，曾为公司优化客户网站，lighthouse 分数达到 80 分以上
- 领导公司 AB/灰度部署平台的开发，实现前端项目的灰度发布和 AB 测试，并代表公司参加 infoQ 架构师峰会分享经验
- 成立开发体验部门 (DX)，推广 TBD (Trunk Based Development) 开发模式，提高团队效率

### 2016.2 ~ 2018.7 广发证券股份有限公司 应用开发岗

- 熟练用到了云原生技术，Docker，K8S，Istio，Prometheus，Grafana，ELK，Jenkins，Gitlab CI/CD
- 聚焦于 MEAN 全栈开发，负责公司内部应用的前端开发，后端开发，部署，维护

### 2015.1 ~ 2016.1 深圳嘉特通信技术有限公司 前端架构师

### 2013.4 ~ 2014.12 百度 (深圳) web 前端研发工程师

- 负责国际化浏览器 Spark 的前端开发，官网开发，网站性能优化，首页呈现时间由原来 10s 缩短至 3s。
- 使用 HTML5/CSS3，基于 webkit 内核的前端 BT 下载模块，设置等模块，开发表格列宽拖拽，拖拽多选，双击列宽自适应等特色功能和诸多细节打磨和用户体验优化。
- chrome 插件开发视频下载弹窗插件，BT 种子嗅探，Google 图片搜索
- 使用 grunt 改进打包开发效率，async.js 重构异步回调，mockjson 做本地模拟前后端分离。

### 2011.6 ~ 2013.3 百度 (北京) web 前端研发工程师

- 负责百度运维自动化系统 noah 的 web 前端研发工作
- 担任 FE 团队技术负责人，制定技术规范，培养新人
- 设计开发项目使用的通用 Tangram 组件库 nuit 以及模块化
- 点→线图的 web 实现，项目中使用

### 2011.3 ~ 2011.6 京东商城 前端工程师

- 与设计师配合实现项目原型。
- 整理 web 前端开发规范，UI 交互规范
- 整理前端通用 jQuery 组件，使用 LabJs 按需加载

### 2004.9 ~ 2008.7 就读 湖北汽车工业学院

- 电气工程系 电气工程以及自动化专业 本科
