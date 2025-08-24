export default function ElastomerIntroPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 頁面標題 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">彈性體介紹</h1>
        <div className="w-24 h-1 bg-accent mx-auto"></div>
        <p className="text-lg text-gray-600 mt-4">
          了解彈性體的特性、應用與技術優勢
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* 什麼是彈性體 */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">什麼是彈性體？</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                彈性體（Elastomer）是一種具有彈性特質的聚合物材料，在常溫下能夠承受大變形，
                並在外力移除後迅速恢復到原來的形狀和尺寸。這種獨特的性質使彈性體成為現代工業中不可或缺的材料。
              </p>
              <p className="mb-4">
                彈性體的分子結構特點是長鏈分子間存在交聯結構，這種結構賦予了材料優異的彈性回復能力。
                根據交聯方式的不同，彈性體可分為化學交聯和物理交聯兩大類。
              </p>
            </div>
          </div>
        </section>

        {/* 彈性體分類 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">彈性體分類</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">天然橡膠</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 優異的彈性和強度</li>
                <li>• 良好的耐磨性</li>
                <li>• 適用於輪胎、密封件</li>
                <li>• 環保可再生材料</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">合成橡膠</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 耐化學腐蝕性佳</li>
                <li>• 溫度適應範圍廣</li>
                <li>• 可客製化特殊性能</li>
                <li>• 穩定的品質控制</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">矽膠橡膠</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 極佳的耐高低溫性</li>
                <li>• 食品級安全認證</li>
                <li>• 優異的電絕緣性</li>
                <li>• 抗老化性能卓越</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">熱塑性彈性體</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 可重複加工成型</li>
                <li>• 加工效率高</li>
                <li>• 回收再利用性佳</li>
                <li>• 設計靈活性強</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 應用領域 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">主要應用領域</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100">
              <h3 className="text-lg font-semibold text-primary mb-3">汽車工業</h3>
              <p className="text-gray-600 text-sm">輪胎、密封條、減震器、油管等關鍵零件</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100">
              <h3 className="text-lg font-semibold text-primary mb-3">電子電器</h3>
              <p className="text-gray-600 text-sm">絕緣材料、防水密封、電線護套等</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100">
              <h3 className="text-lg font-semibold text-primary mb-3">醫療器械</h3>
              <p className="text-gray-600 text-sm">醫用管材、密封件、生物相容性材料</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100">
              <h3 className="text-lg font-semibold text-primary mb-3">建築工程</h3>
              <p className="text-gray-600 text-sm">防水材料、密封膠、減震墊等</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100">
              <h3 className="text-lg font-semibold text-primary mb-3">食品包裝</h3>
              <p className="text-gray-600 text-sm">食品級密封件、包裝材料、輸送帶</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-100">
              <h3 className="text-lg font-semibold text-primary mb-3">航空航太</h3>
              <p className="text-gray-600 text-sm">高性能密封件、耐極端環境材料</p>
            </div>
          </div>
        </section>

        {/* 詠楙的專業優勢 */}
        <section className="mb-12">
          <div className="bg-accent rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">詠楙企業的彈性體解決方案</h2>
            <p className="text-lg mb-6">
              憑藉多年的材料科學研發經驗，我們提供客製化的彈性體產品，
              滿足各行業的特殊需求與嚴格標準。
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">20+</div>
                <div className="text-sm opacity-90">年專業經驗</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">成功案例</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">ISO</div>
                <div className="text-sm opacity-90">國際品質認證</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                諮詢專業方案
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
