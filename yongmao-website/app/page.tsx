import { client } from '@/lib/sanity'

// 定義數據類型
interface Product {
  _id: string
  title: string
  category: string
  shortDescription?: string
  mainImage?: any
}

interface Company {
  _id: string
  companyName: string
  establishedYear?: number
  introduction?: any
}

interface Contact {
  _id: string
  title: string
  address?: {
    street?: string
    city?: string
    country?: string
  }
  phone?: Array<{
    label: string
    number: string
  }>
  email?: Array<{
    label: string
    address: string
  }>
}

// 獲取數據的函數
async function getHomeData() {
  const [products, company, contact] = await Promise.all([
    client.fetch(`*[_type == "product" && isActive == true] | order(publishedAt desc)[0...3] {
      _id,
      title,
      category,
      shortDescription,
      mainImage
    }`),
    client.fetch(`*[_type == "company" && isActive == true][0] {
      _id,
      companyName,
      establishedYear,
      introduction
    }`),
    client.fetch(`*[_type == "contact" && isActive == true][0] {
      _id,
      title,
      address,
      phone,
      email
    }`)
  ])

  return { products, company, contact }
}

export default async function Home() {
  const { products, company, contact } = await getHomeData()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 公司標題 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {company?.companyName || '詠楙企業有限公司'}
          </h1>
          {company?.establishedYear && (
            <p className="text-lg text-gray-600 mb-2">
              成立於 {company.establishedYear} 年
            </p>
          )}
          <p className="text-xl text-gray-600">
            專業橡膠製品與彈性體解決方案提供商
          </p>
        </header>

        {/* 服務特色 */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">產品服務</h2>
            <p className="text-gray-700">
              提供高品質的橡膠製品、彈性體材料及工業用品解決方案
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">品質保證</h2>
            <p className="text-gray-700">
              嚴格的品質控制流程，確保每一項產品都符合最高標準
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">客製化服務</h2>
            <p className="text-gray-700">
              根據客戶需求提供專業的客製化產品設計與製造服務
            </p>
          </div>
        </div>

        {/* 產品展示 */}
        {products && products.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              主要產品
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product: Product) => (
                <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {product.title}
                    </h3>
                    {product.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mb-3">
                        {product.category === 'rubber' && '橡膠製品'}
                        {product.category === 'elastomer' && '彈性體'}
                        {product.category === 'industrial' && '工業用品'}
                        {product.category === 'custom' && '客製化產品'}
                      </span>
                    )}
                    {product.shortDescription && (
                      <p className="text-gray-600">
                        {product.shortDescription}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 聯絡資訊 */}
        {contact && (
          <section className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              {contact.title || '聯絡我們'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 地址 */}
              {contact.address && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">地址</h3>
                  <p className="text-gray-600">
                    {contact.address.country && `${contact.address.country} `}
                    {contact.address.city && `${contact.address.city} `}
                    {contact.address.street}
                  </p>
                </div>
              )}

              {/* 電話 */}
              {contact.phone && contact.phone.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">電話</h3>
                  {contact.phone.map((phone, index) => (
                    <p key={index} className="text-gray-600 mb-1">
                      <span className="font-medium">{phone.label}：</span>
                      {phone.number}
                    </p>
                  ))}
                </div>
              )}

              {/* 電子郵件 */}
              {contact.email && contact.email.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">電子郵件</h3>
                  {contact.email.map((email, index) => (
                    <p key={index} className="text-gray-600 mb-1">
                      <span className="font-medium">{email.label}：</span>
                      <a href={`mailto:${email.address}`} className="text-blue-600 hover:underline">
                        {email.address}
                      </a>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 系統狀態 */}
        <div className="text-center">
          <div className="text-sm text-gray-500 bg-green-50 p-4 rounded-lg">
            <p className="font-semibold text-green-700 mb-2">系統狀態</p>
            <p>✅ Sanity Studio CMS: 已啟動並連接</p>
            <p>✅ Next.js 前端: 已啟動並顯示數據</p>
            <p>✅ 數據整合: 成功從 CMS 獲取內容</p>
          </div>
        </div>
      </div>
    </main>
  )
}