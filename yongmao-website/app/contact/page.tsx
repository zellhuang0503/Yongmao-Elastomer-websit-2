// import { client } from '@/lib/sanity'

// async function getContactInfo() {
//   return await client.fetch(`
//     *[_type == "contact" && isActive == true][0]{
//       title,
//       address,
//       phone,
//       email,
//       isActive
//     }
//   `)
// }

export default async function ContactPage() {
  // 暫時使用靜態資料，避免部署時的Sanity配置問題
  const contact = {
    title: "聯絡我們",
    address: "台灣台北市信義區信義路五段7號",
    phone: "+886-2-1234-5678",
    email: "info@yongmao-elastomer.com"
  }

  if (!contact) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-primary">聯絡我們</h1>
        <p className="text-muted-foreground">目前沒有聯絡資料</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 頁面標題 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">聯絡我們</h1>
        <div className="w-24 h-1 bg-[var(--accent)] mx-auto"></div>
        <p className="text-lg text-muted-foreground mt-4">
          我們很樂意為您提供專業的橡膠解決方案
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 聯絡資訊 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">聯絡資訊</h2>
            
            <div className="space-y-6">
              {/* 地址 */}
              {contact.address && (
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">地址</h3>
                    <p className="text-muted-foreground">{contact.address}</p>
                  </div>
                </div>
              )}

              {/* 電話 */}
              {contact.phone && (
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">電話</h3>
                    <a href={`tel:${contact.phone}`} className="text-muted-foreground hover:text-[var(--accent)] transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* 電子郵件 */}
              {contact.email && (
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">電子郵件</h3>
                    <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-[var(--accent)] transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 營業時間 */}
            <div className="mt-8 p-6 bg-secondary rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">營業時間</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>週一 - 週五</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>週六</span>
                  <span>09:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>週日</span>
                  <span>休息</span>
                </div>
              </div>
            </div>
          </div>

          {/* 聯絡表單 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">發送訊息</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-colors"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    電子郵件 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-colors"
                    placeholder="請輸入您的電子郵件"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                  電話號碼
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-colors"
                  placeholder="請輸入您的電話號碼"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                  主旨 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-colors"
                  placeholder="請輸入訊息主旨"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  訊息內容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-colors resize-vertical"
                  placeholder="請詳細描述您的需求或問題..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--accent)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
              >
                發送訊息
              </button>
            </form>

            <div className="mt-6 p-4 bg-secondary rounded-lg">
              <p className="text-sm text-[var(--accent)]">
                <strong>注意：</strong> 此表單目前為展示用途。如需實際聯絡，請直接使用上方的聯絡資訊。
              </p>
            </div>
          </div>
        </div>

        {/* 地圖區域 (預留) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">位置地圖</h2>
          <div className="bg-secondary rounded-lg h-64 flex items-center justify-center">
            <p className="text-muted-foreground">地圖功能將在後續版本中加入</p>
          </div>
        </div>
      </div>
    </div>
  )
}