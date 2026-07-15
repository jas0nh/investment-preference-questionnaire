# 投资偏好问卷

一个纯静态中文网页问卷，用于本地自测投资/交易风格偏好。问卷采用 1-5 分 Likert 量表，覆盖价值、成长、动量、系统化、风险偏好和期限偏好等维度，并在浏览器本地即时生成结果报告。

## 功能

- 20 道投资/交易偏好题目
- 1-5 分同意程度评分
- 反向计分题处理
- 分步答题、进度显示和遗漏提示
- 本地生成风格画像和维度得分
- 不登录、不上传、不保存答卷数据

## 运行

直接打开 `index.html`，或在当前目录启动静态服务：

```bash
python3 -m http.server 8789
```

然后访问 `http://localhost:8789`。

## Cloudflare Pages

通过 GitHub 导入部署时使用以下设置：

- Framework preset: `None`
- Build command: 留空
- Build output directory: `/`
- Root directory: `/`

本项目也包含 `wrangler.jsonc`，可用于本地 Cloudflare Pages 预览：

```bash
pnpm dlx wrangler pages dev .
```

如需直接上传部署：

```bash
pnpm dlx wrangler pages deploy . --project-name investment-preference-questionnaire
```

## 说明

本页面仅用于投资偏好自测与投资者教育，不构成投资建议、资产推荐或收益承诺。实际投资决策应结合个人财务状况、风险承受能力与专业意见。
