### **全端架構文件 (Fullstack Architecture Document): 詠楙企業網站開發專案**

文件版本: 1.4  
日期: 2025年8月23日

### **1\. 簡介 (Introduction)**

本文件闡述了詠楙企業新官方網站的完整全端技術架構，涵蓋前端實作、後端內容管理系統 (CMS) 整合，以及部署策略。它是所有開發工作的核心技術指南，確保專案遵循一致、高效且可維護的標準。

#### **1.1 變更日誌 (Change Log)**

| 日期 | 版本 | 描述 | 作者 |
| :---- | :---- | :---- | :---- |
| 2025/08/23 | 1.4 | 新增 SEO 與結構化資料策略章節。 | Winston (Architect) |
| 2025/08/23 | 1.3 | 新增原始碼資料夾結構 (Source Tree) 章節。 | Winston (Architect) |
| 2025/08/23 | 1.2 | 新增資料模型 (Data Models) 章節。 | Winston (Architect) |
| 2025/08/23 | 1.1 | 新增技術堆疊 (Tech Stack) 章節。 | Winston (Architect) |
| 2025/08/23 | 1.0 | 初始草稿建立 | Winston (Architect) |

### **2\. 高層次架構 (High-Level Architecture)**

#### **2.1 技術摘要 (Technical Summary)**

本專案將採用現代化的 **Jamstack** 架構，以實現最佳效能、安全性與成本效益。前端將使用 **Next.js (React)** 框架進行開發，以利於搜尋引擎優化 (SEO) 與快速的頁面渲染。內容管理將由 **Sanity.io** 無頭式內容管理系統 (Headless CMS) 提供支援，特別是用於動態更新的「彈性體介紹」文章區塊。整個網站將部署於 **Netlify** 平台，該平台將處理網站的全球託管、持續部署 (CI/CD) 以及表單提交功能。

#### **2.2 平台與基礎設施選擇 (Platform and Infrastructure Choice)**

* **平台:** Netlify  
* **核心服務:**  
  * **網站託管 (Hosting):** Netlify Global Edge Network  
  * **持續部署 (CI/CD):** Netlify Build  
  * **表單處理 (Form Handling):** Netlify Forms  
  * **內容來源 (Content Source):** Sanity.io API  
* **Rationale**: 此組合完全無伺服器 (Serverless)，極大地降低了維運複雜度與初期成本，完美契合專案「預算不高、希望盡快上線」的核心需求。

#### **2.3 儲存庫結構 (Repository Structure)**

* **結構:** **Monorepo (單一儲存庫)**  
* **Rationale**: 根據 PRD 的決策，我們將採用 Monorepo 結構。這允許我們將前端 Next.js 網站的程式碼與 Sanity Studio 後台的設定檔放在同一個 Git 儲存庫中。這樣做可以簡化版本控制、依賴項管理，並確保前後端介面的一致性。

#### **2.4 高層次架構圖 (High-Level Architecture Diagram)**

graph TD  
    subgraph "使用者端 (User)"  
        A\[訪客瀏覽器\]  
    end

    subgraph "Netlify 平台"  
        B\[Next.js 前端網站\]  
        C\[Netlify Forms\]  
    end

    subgraph "Sanity.io 平台"  
        D\[Sanity Studio 後台\]  
        E\[Sanity Content Lake API\]  
    end

    F\[網站管理者\]

    A \-- 瀏覽網站 \--\> B;  
    B \-- 頁面載入時\<br\>獲取文章內容 \--\> E;  
    A \-- 提交聯絡表單 \--\> C;  
    F \-- 編輯/發布文章 \--\> D;  
    D \-- 儲存內容 \--\> E;

### **3\. 技術堆疊 (Tech Stack)**

此為本專案唯一的技術選型來源，所有開發工作皆須遵循此處定義的工具與版本。

| 類別 | 技術 | 版本 | 用途 | Rationale (選用理由) |
| :---- | :---- | :---- | :---- | :---- |
| **語言** | TypeScript | \~5.x | 主要開發語言 | 提供型別安全，減少執行期錯誤，提升大型專案可維護性。 |
| **執行環境** | Node.js | \~20.x | 伺服器端與建置環境 | 選用 LTS (長期支援) 版本，確保穩定性與社群支援。 |
| **前端框架** | Next.js | \~14.x | 網站主要框架 | 強大的 SEO 功能、優異的效能 (SSG/SSR)，以及活躍的生態系。 |
| **UI 函式庫** | React | \~18.x | Next.js 的核心 | 業界標準，元件化架構便於管理與複用。 |
| **樣式** | Tailwind CSS | \~3.x | CSS 框架 | Utility-first 方法可快速建構客製化且響應式的介面，無需撰寫額外 CSS。 |
| **內容管理** | Sanity.io | \~3.x | Headless CMS | 提供彈性的內容模型、即時編輯體驗 (Studio)，且有免費方案符合預算。 |
| **部署/託管** | Netlify | \- | 平台即服務 (PaaS) | 提供無縫的 Git-based CI/CD、全球 CDN、表單處理，完美整合 Jamstack。 |
| **測試** | Jest / Vitest | latest | 單元/整合測試 | 業界主流的測試框架，用於驗證元件與功能的正確性。 |
| **測試** | React Testing Library | latest | 元件測試工具 | 專注於使用者行為的測試方法，確保 UI 互動符合預期。 |
| **程式碼風格** | ESLint / Prettier | latest | 程式碼檢查與格式化 | 自動化統一程式碼風格，提升可讀性與團隊協作效率。 |

### **4\. 資料模型 (Data Models)**

此資料模型定義了將在 Sanity.io 中管理的內容結構。在 MVP 階段，我們僅需一個模型來處理技術文章。

#### **4.1 Post (文章)**

* **用途**: 用於儲存「彈性體介紹」區塊中的每一篇技術文章。  
* **Sanity Schema 定義**:

| 欄位名稱 (Field Name) | 類型 (Type) | 描述 | 驗證規則 |
| :---- | :---- | :---- | :---- |
| title | string | 文章的標題。 | 必要欄位 (Required) |
| slug | slug | 網址的一部分，通常由標題自動生成。 | 必要欄位, 唯一值 (Unique) |
| mainImage | image | 文章的主要圖片，用於列表頁與文章頂部。 | \- |
| publishedAt | datetime | 文章的發布日期。 | 必要欄位 |
| body | blockContent | 文章的主要內容，支援富文本格式。 | 必要欄位 |

* **blockContent (富文本) 允許的內容**:  
  * 基本的段落、標題 (H2, H3, H4)、清單 (項目符號與編號)。  
  * 粗體、斜體、連結。  
  * 圖片（包含圖片說明）。  
  * **特別注意**: 內文區塊將會設定為可以插入詠楙企業提供的**材質特性比較圖表圖片**。

### **5\. 原始碼資料夾結構 (Source Tree)**

本專案採用 Monorepo 結構，根目錄下將包含 web (前端) 與 studio (CMS) 兩個主要的 package。

/  
├── .vscode/              \# VSCode 編輯器設定  
├── docs/                 \# 專案文件 (PRD, Architecture...)  
├── packages/  
│   ├── web/              \# Next.js 前端網站  
│   │   ├── app/          \# Next.js App Router  
│   │   │   ├── (pages)/  \# 主要頁面路由  
│   │   │   │   ├── about/  
│   │   │   │   ├── contact/  
│   │   │   │   ├── industry/  
│   │   │   │   ├── posts/  
│   │   │   │   └── products/  
│   │   │   ├── layout.tsx  
│   │   │   └── page.tsx  
│   │   ├── components/   \# 共用 React 元件 (Header, Footer, Button...)  
│   │   ├── lib/          \# 共用函式庫 (Sanity client, utils...)  
│   │   ├── public/       \# 靜態資源 (圖片, favicon...)  
│   │   ├── styles/       \# 全域 CSS 樣式  
│   │   ├── next.config.mjs  
│   │   ├── package.json  
│   │   └── tsconfig.json  
│   │  
│   └── studio/           \# Sanity Studio (CMS 後台)  
│       ├── schemas/      \# Sanity 內容模型定義  
│       │   ├── blockContent.ts  
│       │   └── post.ts  
│       ├── sanity.cli.ts  
│       ├── sanity.config.ts  
│       └── package.json  
│  
├── .eslintrc.json        \# ESLint 設定  
├── .gitignore  
├── package.json          \# Monorepo 根目錄 package.json  
├── prettier.config.js    \# Prettier 設定  
└── tsconfig.base.json    \# TypeScript 基礎設定

### **6\. SEO 與結構化資料 (SEO & Structured Data)**

為最大化網站在搜尋引擎中的可見度並支援 AEO (Answer Engine Optimization) 策略，本專案將全面導入結構化資料 (Schema Markup)。

#### **6.1 實作方法 (Implementation Method)**

* **格式**: 我們將採用 **JSON-LD** 格式來實作結構化資料。這是 Google 推薦的方法，它能將 Schema 標記與 HTML 內容分離，易於管理與動態生成。  
* **生成方式**: 結構化資料將在 Next.js 的頁面元件中動態生成，並透過 \<script type="application/ld+json"\> 標籤注入到每個頁面的 \<head\> 中。

#### **6.2 結構化資料類型 (Schema Types)**

根據網站內容，我們將實作以下幾種主要的 Schema 類型：

* **Organization**:  
  * **用途**: 用於定義「詠楙企業」這個組織。  
  * **應用頁面**: 全站所有頁面，尤其在首頁與「關於我們」頁面提供最完整的資訊 (公司名稱、Logo、地址、聯絡電話、網址等)。  
* **WebSite**:  
  * **用途**: 用於定義網站本身，並可啟用站內連結搜尋框 (Sitelinks Search Box) 功能。  
  * **應用頁面**: 首頁。  
* **Product**:  
  * **用途**: 雖然本站不直接線上銷售，但使用 Product 類型來標記「產品類別」與「產業應用」頁面，有助於搜尋引擎將其識別為商業解決方案，提升在相關搜尋中的能見度。  
  * **應用頁面**: 所有「產品類別」與「產業應用」的子頁面。  
* **TechArticle** (或 Article):  
  * **用途**: 用於標記「彈性體介紹」中的每一篇技術文章。  
  * **應用頁面**: 所有文章內頁。將包含標題、作者 (詠楙企業)、發布日期、主圖等資訊。  
* **BreadcrumbList**:  
  * **用途**: 用於標示使用者在網站中的位置層級（麵包屑導覽）。  
  * **應用頁面**: 所有非首頁的頁面。