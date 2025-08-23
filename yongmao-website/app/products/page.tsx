import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

interface Product {
  _id: string
  title: string
  category: string
  shortDescription?: string
  description?: any
  features?: string[]
  mainImage?: any
  publishedAt: string
}

async function getProducts() {
  return client.fetch(`*[_type == "product" && isActive == true] | order(publishedAt desc) {
    _id,
    title,
    category,
    shortDescription,
    description,
    features,
    mainImage,
    publishedAt
  }`)
}

const categoryNames = {
  rubber: '橡膠製品',
  elastomer: '彈性體',
  industrial: '工業用品',
  custom: '客製化產品'
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 頁面標題 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            產品展示
          </h1>
          <p className="text-xl text-gray-600">
            專業橡膠製品與彈性體解決方案
          </p>
        </header>

        {/* 產品列表 */}
        {products && products.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* 產品圖片 */}
                {product.mainImage && (
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={urlFor(product.mainImage).width(400).height(200).url()}
                      alt={product.mainImage.alt || product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  {/* 產品標題和類別 */}
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h2>
                    {product.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {categoryNames[product.category as keyof typeof categoryNames] || product.category}
                      </span>
                    )}
                  </div>

                  {/* 簡短描述 */}
                  {product.shortDescription && (
                    <p className="text-gray-600 mb-4">
                      {product.shortDescription}
                    </p>
                  )}

                  {/* 產品特色 */}
                  {product.features && product.features.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">產品特色：</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 發布日期 */}
                  <div className="text-xs text-gray-400 mt-4">
                    發布於 {new Date(product.publishedAt).toLocaleDateString('zh-TW')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">目前沒有產品資料</p>
            <p className="text-gray-400 text-sm mt-2">
              請在 Sanity Studio 中新增產品內容
            </p>
          </div>
        )}

        {/* 返回首頁 */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            返回首頁
          </a>
        </div>
      </div>
    </main>
  )
}