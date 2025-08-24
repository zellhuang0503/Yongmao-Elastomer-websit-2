import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

async function getCompanyInfo() {
  return await client.fetch(`
    *[_type == "company" && isActive == true][0]{
      companyName,
      logo,
      introduction,
      vision,
      establishedYear,
      isActive
    }
  `)
}

export default async function AboutPage() {
  const company = await getCompanyInfo()

  if (!company) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-primary">關於我們</h1>
        <p className="text-muted-foreground">目前沒有公司資料</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 頁面標題 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">關於我們</h1>
        <div className="w-24 h-1 bg-[var(--accent)] mx-auto"></div>
      </div>

      {/* 公司簡介區塊 */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">
              {company.companyName}
            </h2>
            <p className="text-lg text-muted-foreground">
              成立於 {company.establishedYear} 年
            </p>
          </div>

          {/* 公司介紹 */}
          {company.introduction && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                公司介紹
              </h3>
              <div className="prose prose-lg max-w-none text-foreground">
                <PortableText value={company.introduction} />
              </div>
            </div>
          )}

          {/* 企業願景 */}
          {company.vision && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                企業願景
              </h3>
              <div className="prose prose-lg max-w-none text-foreground">
                <PortableText value={company.vision} />
              </div>
            </div>
          )}
        </div>

        {/* 企業特色 */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">品質保證</h3>
            <p className="text-muted-foreground">嚴格的品質控制流程，確保每一件產品都符合最高標準</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">創新技術</h3>
            <p className="text-muted-foreground">持續投入研發，運用最新技術提供創新的橡膠解決方案</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 009.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">專業服務</h3>
            <p className="text-muted-foreground">經驗豐富的專業團隊，提供全方位的客戶服務與技術支援</p>
          </div>
        </div>

        {/* 聯絡資訊 CTA */}
        <div className="bg-[var(--accent)] rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">想了解更多？</h3>
          <p className="text-lg mb-6">歡迎聯絡我們，讓我們為您提供最適合的橡膠解決方案</p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--accent)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            聯絡我們
          </a>
        </div>
      </div>
    </div>
  )
}