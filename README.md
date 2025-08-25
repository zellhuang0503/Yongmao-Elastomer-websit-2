# 詠楙企業網站（Yongmao Elastomer Website）

本倉庫為單一倉儲（monorepo）結構，包含：
- `yongmao-website/`：官網前端（Next.js 15 + React 19）
- `yongmao-sanity-studio/`：CMS 後台（Sanity v4 Studio）

此外，根目錄包含設計資產與專案文檔：
- `logo/`、`.superdesign/`：品牌識別與設計素材
- `UI_UX 規格文件 (UI_UX Specification)_ 詠楙企業網站開發專案.md`：UI/UX 需求與風格規範
- `COMPONENT_USAGE_GUIDE.md`：元件使用指南
- 其他專案說明文件（PRD、架構文件、使用者故事等）

---

## 1. 需求與環境（Prerequisites）
- Node.js：建議使用 LTS（v20+），至少 v18 以上
- npm 版本：建議 v10+（或改用 pnpm/yarn 皆可，以下以 npm 為例）
- Sanity CLI（選用，用於啟動與部署 Studio）：
  ```bash
  npm i -g @sanity/cli
  ```
- Git 與 GitHub 權限

---

## 2. 專案結構（Monorepo Structure）
```
/ (repo root)
├─ yongmao-website/           # Next.js 官網前端
│  ├─ app/                     # App Router 頁面
│  ├─ components/              # 前端元件（含導航）
│  ├─ lib/                     # 工具/常數（含 sanity.ts）
│  └─ public/                  # 靜態資源
│
├─ yongmao-sanity-studio/     # Sanity Studio（CMS）
│  ├─ schemaTypes/             # Sanity 資料結構 schema
│  └─ ...
│
├─ logo/、.superdesign/         # 設計資產
└─ 各式說明文件（PRD、架構、UI/UX）
```

---

## 3. 環境變數（Environment Variables）
前端網站會透過 `yongmao-website/lib/sanity.ts` 連線 Sanity，需在網站端設定以下公開環境變數：
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`（例如 `2025-01-01`，請依實際 API 版本）

建議在 `yongmao-website/` 建立 `.env.local` 檔案：
```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

Sanity Studio 端通常不需要在程式中讀取上述變數，但若要使用管理 API 或部署 GraphQL，請先以 CLI 登入並將專案與 dataset 設定正確（見下方 Studio 章節）。

---

## 4. 安裝與啟動（Install & Run）
請在專案根目錄依序進行：

### 4.1 安裝依賴
各子專案分別安裝依賴：
```bash
# 前端網站
cd yongmao-website
npm install

# Sanity Studio
cd ../yongmao-sanity-studio
npm install
```

### 4.2 開發模式啟動
兩個服務可分開啟動：
```bash
# 啟動前端網站（預設 http://localhost:3000）
cd yongmao-website
npm run dev

# 另開一個終端啟動 CMS（預設 http://localhost:3333）
cd yongmao-sanity-studio
npm run dev
```

### 4.3 主要腳本（package.json）
- `yongmao-website/package.json`
  - `dev`：`next dev`
  - `build`：`next build`
  - `start`：`next start`
  - `lint`：`next lint`

- `yongmao-sanity-studio/package.json`
  - `dev`：`sanity dev`
  - `start`：`sanity start`
  - `build`：`sanity build`
  - `deploy`：`sanity deploy`
  - `deploy-graphql`：`sanity graphql deploy`

---

## 5. Sanity Studio 操作（CMS）
1. 登入與連線：
   ```bash
   # 安裝好 @sanity/cli 後
   sanity login
   sanity whoami
   ```
2. 確認或設定專案、dataset（若為既有專案通常已設定）：
   ```bash
   sanity init
   # 依互動流程選擇或連結既有 Project / Dataset
   ```
3. 啟動本機 CMS：`npm run dev`
4. 部署（選用）：
   - Studio：`npm run deploy`
   - GraphQL API Schema：`npm run deploy-graphql`

---

## 6. 開發規範與分支策略
- 分支：
  - `main`：穩定釋出版（Production）
  - `develop`：開發整合分支（日常開發請基於此分支）
- 建議使用 Conventional Commits：
  - `feat: ...`、`fix: ...`、`docs: ...`、`chore: ...`、`refactor: ...`、`style: ...`
- PR 流程：功能分支 -> 發 PR 到 `develop` -> 測試通過後合併；釋出前將 `develop` 合併到 `main`

---

## 7. 版本控制與推送（Git）
常用指令：
```bash
# 檢查狀態
git status -sb

# 新增全部變更並提交
git add -A
git commit -m "docs: update README"

# 與遠端同步（避免衝突，建議使用 rebase）
git pull --rebase origin develop

# 推送（首次分支可設定上游）
git push -u origin develop
```

---

## 8. 常見問題（FAQ）
- 看不到 CMS 資料？
  - 先確認本機已登入 Sanity，且 `NEXT_PUBLIC_SANITY_*` 變數設定正確。
  - 確認 `yongmao-website/lib/sanity.ts` 的 `projectId/dataset/apiVersion` 與 Studio 一致。
- Next.js build 失敗？
  - 請先執行 `npm install` 並確認 Node 版本（≥18）。
- 想部署到外網？
  - 前端可部署至 Vercel / Netlify；Studio 可使用 `sanity deploy`。

---

## 9. 執行順序（建議）
1. 先閱讀 `UI_UX 規格文件` 與 `COMPONENT_USAGE_GUIDE.md`
2. 設定 `yongmao-website/.env.local` 的 `NEXT_PUBLIC_SANITY_*`
3. 於兩個子專案執行 `npm install`
4. 啟動 `yongmao-sanity-studio`（確認 schema 與內容模型）
5. 啟動 `yongmao-website` 串接 Sanity 資料
6. 版本控制：提交並推送到 GitHub

---

## 10. 可重複使用與變數化（Maintainability）
- 將專案相關可變資訊（如 Sanity 專案 ID、dataset、API 版本）集中於環境變數管理，減少日後修改成本。
- 共用 UI 元件請集中於 `yongmao-website/components/`，並建立使用說明於 `COMPONENT_USAGE_GUIDE.md`。

---

## 11. 授權與版權
本專案屬於詠楙企業有限公司內部專案，未經允許不得轉載或商用。
