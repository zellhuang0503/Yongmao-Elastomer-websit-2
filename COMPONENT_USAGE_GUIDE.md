# 詠楙企業元件庫使用指南

## 概述
基於 `.superdesign/design_iterations/Orange/` 設計系統建立的 React 元件庫，提供一致且可重複使用的 UI 元件。

## 快速開始

### 1. 匯入元件
```typescript
import { Button, Header, Footer, HeroSection, FeatureCard, ProductCard, IndustryCard } from '@/components/ui';
```

### 2. 基本頁面結構
```typescript
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection 
          title="您的標題"
          subtitle="您的副標題"
        />
        {/* 其他內容 */}
      </main>
      <Footer />
    </>
  );
}
```

## 元件詳細說明

### Button 元件
多種變體的按鈕元件，支援不同尺寸與樣式。

```typescript
// 基本用法
<Button variant="accent" size="md">
  點擊我
</Button>

// 所有變體
<Button variant="primary">主要按鈕</Button>
<Button variant="secondary">次要按鈕</Button>
<Button variant="accent">強調按鈕</Button>
<Button variant="outline">邊框按鈕</Button>

// 不同尺寸
<Button size="sm">小按鈕</Button>
<Button size="md">中按鈕</Button>
<Button size="lg">大按鈕</Button>
```

### Header 元件
固定導航列，包含 Logo、導航選單與 CTA 按鈕。

```typescript
<Header />
```

**特色**:
- 毛玻璃效果背景
- 響應式設計（手機版顯示漢堡選單）
- 自動 sticky 定位

### Footer 元件
4欄式頁尾，包含公司資訊、導航、聯絡資訊與訂閱功能。

```typescript
<Footer />
```

### HeroSection 元件
首頁主視覺區塊，包含大標題、副標題與雙按鈕。

```typescript
<HeroSection 
  title="精準工藝，定義未來彈性體標準"
  subtitle="詠楙企業：您最值得信賴的高性能彈性體解決方案合作夥伴。"
  primaryButtonText="探索解決方案"
  primaryButtonHref="/products"
  secondaryButtonText="聯絡我們"
  secondaryButtonHref="/contact"
/>
```

### FeatureCard 元件
功能特色展示卡片，適用於優勢介紹區塊。

```typescript
import { Cpu } from 'lucide-react';

<FeatureCard 
  icon={Cpu}
  title="技術專業"
  description="擁有深厚的材料科學知識與應用經驗，解決您最嚴苛的技術挑戰。"
/>
```

### ProductCard 元件
產品展示卡片，包含圖片、標題、描述與連結。

```typescript
<ProductCard 
  title="O型環/墊圈"
  description="提供各種國際標準規格與客製化尺寸，適用於靜態與動態密封。"
  imageUrl="/images/o-ring.jpg"
  href="/products/o-ring"
/>
```

### IndustryCard 元件
產業應用展示卡片，簡潔的圖示與標題組合。

```typescript
import { Factory } from 'lucide-react';

<IndustryCard 
  icon={Factory}
  title="機械製造"
  onClick={() => router.push('/industries/manufacturing')}
/>
```

## 佈局範例

### 首頁完整範例
```typescript
import { 
  Header, 
  Footer, 
  HeroSection, 
  FeatureCard, 
  ProductCard, 
  IndustryCard 
} from '@/components/ui';
import { Cpu, Settings2, ShieldCheck, Factory, Dumbbell } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection 
          title="精準工藝，定義未來彈性體標準"
          subtitle="詠楙企業：您最值得信賴的高性能彈性體解決方案合作夥伴。"
        />

        {/* Features Section */}
        <section className="py-16 bg-subtle-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">我們的核心優勢</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={Cpu}
                title="技術專業"
                description="擁有深厚的材料科學知識與應用經驗"
              />
              <FeatureCard 
                icon={Settings2}
                title="客製化能力"
                description="提供全方位的客製化服務"
              />
              <FeatureCard 
                icon={ShieldCheck}
                title="品質保證"
                description="遵循國際標準，確保卓越品質"
              />
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">產業應用</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <IndustryCard icon={Factory} title="機械製造" />
              <IndustryCard icon={Dumbbell} title="運動器材" />
              {/* 更多產業卡片... */}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-subtle-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">產品類別</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <ProductCard 
                title="O型環/墊圈"
                description="提供各種國際標準規格與客製化尺寸"
                imageUrl="/images/o-ring.jpg"
                href="/products/o-ring"
              />
              {/* 更多產品卡片... */}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
```

## 樣式自訂

### CSS 變數
所有顏色與樣式都使用 CSS 變數定義，可在 `app/globals.css` 中調整：

```css
:root {
  --primary: #1F2937;    /* 主要色 */
  --accent: #F97316;     /* 強調色 */
  --background: #FFFFFF; /* 背景色 */
  --secondary: #F9FAFB;  /* 次要背景 */
}
```

### 互動效果類別
```css
.lift-and-shadow     /* 卡片懸停上升效果 */
.btn-press          /* 按鈕按壓效果 */
.arrow-nudge        /* 箭頭滑動效果 */
.fade-in-up         /* 滾動進入動畫 */
```

## 最佳實踐

### 1. 一致性
- 所有頁面都使用相同的 Header 和 Footer
- 按鈕統一使用 Button 元件，避免自訂樣式

### 2. 響應式設計
- 使用 Tailwind 的響應式前綴 (`sm:`, `md:`, `lg:`)
- 測試各種螢幕尺寸的顯示效果

### 3. 可訪問性
- 為圖片提供適當的 alt 文字
- 使用語意化的 HTML 標籤
- 確保鍵盤導航功能正常

### 4. 效能優化
- 使用 Next.js Image 元件載入圖片
- 適當使用 lazy loading

## 常見問題

### Q: 如何修改按鈕顏色？
A: 在 `app/globals.css` 中修改對應的 CSS 變數，所有使用該變數的元件會自動更新。

### Q: 如何新增新的卡片變體？
A: 在對應的元件檔案中新增 variant prop，並在樣式物件中定義新的樣式類別。

### Q: 圖片路徑如何設定？
A: 將圖片放在 `public/` 資料夾中，使用相對路徑如 `/images/product.jpg`。

## 維護與更新

當需要修改設計時：
1. 更新對應的元件檔案
2. 測試所有使用該元件的頁面
3. 更新此使用指南
4. 提交 Git 版本控制

---
**建立日期**: 2025年8月24日  
**維護者**: 開發團隊