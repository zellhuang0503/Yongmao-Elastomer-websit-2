### **UI/UX 規格文件 (UI/UX Specification): 詠楙企業網站開發專案**

文件版本: 2.0  
日期: 2025年8月24日

### **1\. 簡介 (Introduction)**

本文件定義了詠楙企業新官方網站的使用者體驗目標、資訊架構、使用者流程與視覺設計規格。它將作為視覺設計與前端開發的基礎，確保為所有目標使用者（技術人員、商務人員、決策者）提供一個具凝聚力且以使用者為中心的體驗。

#### **1.1 整體 UX 目標與原則 (Overall UX Goals & Principles)**

* **目標使用者**:  
  * **技術人員 (工程師、研發人員)**: 快速獲取精確的技術數據。  
  * **商務人員 (採購人員)**: 評估供應商的專業度與可靠性。  
  * **決策者 (中高階主管)**: 確認公司的市場領導地位與專業形象。  
* **易用性目標 (Usability Goals)**:  
  * **效率**: 使用者能在 3 次點擊內找到任一主要產品或技術規格頁面。  
  * **清晰度**: 技術數據與圖表需一目了然，無歧義。  
  * **信賴感**: 網站的視覺與互動需傳達出穩定、精準的專業形象。  
* **核心設計原則 (Core Design Principles)**:  
  1. **清晰勝於花俏 (Clarity over cleverness)**: 優先考慮資訊的清晰傳達，而非不必要的視覺特效。  
  2. **數據驅動信賴 (Data-driven trust)**: 以專業、準確的數據內容作為建立使用者信任的基石。  
  3. **專業極簡主義 (Professional minimalism)**: 介面設計應簡潔、有條理，移除所有非必要的元素，讓使用者專注於內容。

#### **1.2 變更日誌 (Change Log)**

| 日期 | 版本 | 描述 | 作者 |
| :---- | :---- | :---- | :---- |
| 2025/08/24 | 2.0 | 新增設計系統與元件庫規格，基於 Orange 主題實作 | AI Assistant |
| 2025/08/23 | 1.1 | 新增使用者流程與品牌風格指南。 | Sally (UX) |
| 2025/08/23 | 1.0 | 初始草稿建立 | Sally (UX) |

### **2\. 資訊架構 (Information Architecture)**

#### **2.1 網站地圖 (Site Map)**

此網站地圖基於您提供的架構圖進行結構化呈現。

```
首頁
├── 關於詠楙
├── 產業應用
│   ├── 機械製造業
│   ├── 運動器材
│   ├── 食品製造業
│   ├── 半導體製造業
│   ├── 航太配件
│   └── 樂器配件
├── 產品類別
│   ├── O型環/墊圈
│   ├── 矽膠封條
│   ├── 橡膠墊片
│   ├── 矽膠片
│   └── 客製化矽橡膠
├── 彈性體介紹
│   └── 文章內頁
└── 聯絡我們
    └── 需求表單
```

#### **2.2 導覽結構 (Navigation Structure)**

* **主導覽列 (Primary Navigation)**: 網站頁首將包含以下主要連結：「關於詠楙」、「產業應用」、「產品類別」、「彈性體介紹」、「聯絡我們」。  
* **下拉式選單 (Dropdown Menus)**: 「產業應用」與「產品類別」在主導覽列中將以滑鼠懸停 (hover) 或點擊 (click) 方式展開下拉選單，顯示其下的子頁面連結。  
* **頁尾導覽 (Footer Navigation)**: 頁尾將重複主導覽列的連結，並包含公司地址、聯絡電話、隱私權政策等次要資訊。

### **3\. 使用者流程 (User Flows)**

#### **3.1 核心流程：尋找技術資訊並提交客製化需求**

* **使用者目標**: 一位半導體產業的研發工程師，需要尋找耐高溫的特殊矽膠材料，並提交客製化零件的詢價需求。

```
進入首頁 → 尋找資訊 → 瀏覽技術文章/產業應用 → 閱讀詳細規格 → 聯絡我們 → 填寫需求表單 → 提交表單 → 確認提交成功
```

### **4\. 設計系統 (Design System)**

#### **4.1 視覺風格 (Visual Identity)**

* **關鍵詞**: 專業、精準、高科技、信賴、簡潔。  
* **整體感覺**: 網站應給人一種瀏覽高階技術手冊的感覺，而非行銷網站。版面配置應寬敞、留白充足，以突顯內容的重要性。

#### **4.2 色彩計畫 (Color Palette)**

基於 Orange 主題設計，使用 CSS 變數系統：

| 顏色類型 | CSS 變數 | Hex 色碼 | 用途 |
| :---- | :---- | :---- | :---- |
| **主要色 (Primary)** | `--primary` | #1F2937 | 標題、主要文字、專業感 |
| **強調色 (Accent)** | `--accent` | #F97316 | Logo 橘色、按鈕、連結 |
| **背景色 (Background)** | `--background` | #FFFFFF | 主要內容區塊背景 |
| **次要背景 (Secondary)** | `--secondary` | #F9FAFB | 區塊背景、微妙區隔 |
| **前景色 (Foreground)** | `--foreground` | #374151 | 內文、次要資訊 |
| **邊框色 (Border)** | `--border` | #E5E7EB | 分隔線、卡片邊框 |

#### **4.3 字體排印 (Typography)**

* **主要字體 (Primary Font)**: Noto Sans TC (思源黑體)，專業無襯線字體，適合技術內容。
* **字體層級 (Type Scale)**:  
  * **H1 (頁面主標題)**: 32px (md:40px), 粗體 (Bold)  
  * **H2 (章節標題)**: 24px (md:30px), 粗體 (Bold)  
  * **H3 (次級標題)**: 20px (md:24px), 次粗體 (Semi-bold)  
  * **內文 (Body)**: 16px (md:18px), 一般 (Regular)  
  * **註解 (Caption)**: 14px, 一般 (Regular)

### **5\. 元件庫 (Component Library)**

#### **5.1 核心元件 (Core Components)**

基於 `.superdesign/design_iterations/Orange/` 的設計實作，所有元件位於 `components/ui/`：

##### **5.1.1 Button 元件**
```typescript
<Button variant="primary|secondary|accent|outline" size="sm|md|lg">
  按鈕文字
</Button>
```

**變體說明**:
- `primary`: 深灰色主要按鈕
- `secondary`: 淺灰色次要按鈕  
- `accent`: 橘色強調按鈕
- `outline`: 橘色邊框按鈕

##### **5.1.2 Header 元件**
```typescript
<Header />
```
- 固定導航，毛玻璃效果 (`backdrop-blur-md`)
- Logo + 導航選單 + CTA 按鈕
- 響應式設計，手機版顯示漢堡選單

##### **5.1.3 Footer 元件**
```typescript
<Footer />
```
- 4欄式布局：公司資訊、網站導覽、聯絡資訊、訂閱
- 深色背景 (`bg-primary`)，白色文字

##### **5.1.4 HeroSection 元件**
```typescript
<HeroSection 
  title="主標題"
  subtitle="副標題"
  primaryButtonText="主要按鈕"
  secondaryButtonText="次要按鈕"
/>
```

##### **5.1.5 卡片元件系列**

**FeatureCard**: 功能特色卡片
```typescript
<FeatureCard 
  icon={LucideIcon}
  title="標題"
  description="描述"
/>
```

**ProductCard**: 產品展示卡片
```typescript
<ProductCard 
  title="產品名稱"
  description="產品描述"
  imageUrl="/path/to/image"
  href="/product-link"
/>
```

**IndustryCard**: 產業應用卡片
```typescript
<IndustryCard 
  icon={LucideIcon}
  title="產業名稱"
  onClick={() => {}}
/>
```

#### **5.2 互動效果 (Interactive Effects)**

所有效果已整合至 `globals.css`：

- **lift-and-shadow**: 卡片懸停上升效果
- **btn-press**: 按鈕按壓回饋效果
- **arrow-nudge**: 箭頭滑動效果
- **fade-in-up**: 滾動進入動畫

#### **5.3 響應式設計 (Responsive Design)**

- **行動優先**: 使用 Tailwind CSS 的響應式前綴 (`sm:`, `md:`, `lg:`)
- **斷點**: 
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+

### **6\. 開發指南 (Development Guidelines)**

#### **6.1 元件使用原則**

1. **統一性**: 所有頁面都應使用相同的 Header 和 Footer 元件
2. **一致性**: 按鈕、卡片等 UI 元素應使用統一的元件庫
3. **可維護性**: 修改設計時只需更新元件庫，所有頁面自動同步

#### **6.2 檔案結構**

```
yongmao-website/
├── app/
│   ├── globals.css          # 主題與全域樣式
│   └── ...                  # Next.js 頁面
├── components/
│   └── ui/                  # UI 元件庫
│       ├── Button.tsx
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── FeatureCard.tsx
│       ├── ProductCard.tsx
│       ├── IndustryCard.tsx
│       └── index.ts         # 統一匯出
└── lib/
    ├── utils.ts             # 工具函式 (cn)
    └── sanity.ts            # Sanity 連線
```

#### **6.3 程式碼品質**

- **TypeScript**: 所有元件使用 TypeScript，提供型別安全
- **Props 介面**: 每個元件都有明確的 Props 介面定義
- **可訪問性**: 使用語意化 HTML 標籤，支援鍵盤導航
- **效能**: 使用 Next.js Image 元件優化圖片載入

### **7\. 品牌一致性檢查清單**

- [ ] 使用正確的 Logo 檔案 (`YM-logo-M-noBG-BlackWords.png` / `YM-logo-M-noBG-WhiteWords.png`)
- [ ] 遵循色彩規範 (主要色 #1F2937，強調色 #F97316)
- [ ] 使用 Noto Sans TC 字體
- [ ] 保持專業極簡的視覺風格
- [ ] 確保所有互動效果正常運作
- [ ] 響應式設計在各裝置正常顯示

### **8\. 後續維護**

#### **8.1 元件更新流程**

1. 修改 `components/ui/` 中的對應元件
2. 測試所有使用該元件的頁面
3. 更新此文件中的相關說明
4. 提交 Git 版本控制

#### **8.2 設計系統擴展**

當需要新增元件時：
1. 參考現有元件的設計模式
2. 遵循相同的命名慣例和檔案結構
3. 加入 `components/ui/index.ts` 統一匯出
4. 更新此規格文件

---

**文件維護者**: AI Assistant  
**最後更新**: 2025年8月24日  
**版本**: 2.0