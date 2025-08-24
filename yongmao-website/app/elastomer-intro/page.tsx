'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/ui/Footer';
import { Search, ChevronDown, ArrowRight, Tag, Calendar, ArrowLeft } from 'lucide-react';
import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';

interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  featuredImage?: any;
  publishedAt: string;
  isFeatured: boolean;
  readingTime?: number;
  content: any[];
}

async function getArticles() {
  try {
    return await client.fetch(`
      *[_type == "article" && isActive == true] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        category,
        featuredImage,
        publishedAt,
        isFeatured,
        readingTime,
        content
      }
    `);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

async function getFeaturedArticle() {
  try {
    return await client.fetch(`
      *[_type == "article" && isActive == true && isFeatured == true][0] {
        _id,
        title,
        slug,
        excerpt,
        category,
        featuredImage,
        publishedAt,
        readingTime,
        content
      }
    `);
  } catch (error) {
    console.error('Error fetching featured article:', error);
    return null;
  }
}

export default function ElastomerIntroPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-content').forEach(section => {
      observer.observe(section);
    });

    // Fetch articles
    const fetchArticles = async () => {
      try {
        const [articlesData, featuredData] = await Promise.all([
          getArticles(),
          getFeaturedArticle()
        ]);
        setArticles(articlesData);
        setFeaturedArticle(featuredData);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    return () => observer.disconnect();
  }, []);

  const getCategoryLabel = (category: string) => {
    const labels = {
      'material-science': '材料科學',
      'application-case': '應用案例',
      'technical-guide': '技術指南',
      'industry-trend': '產業趨勢',
      'quality-control': '品質控制',
    };
    return labels[category as keyof typeof labels] || category;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW');
  };

  if (loading) {
    return (
      <div className="font-noto bg-white text-gray-700">
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="text-lg text-gray-600">載入中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-noto bg-white text-gray-700">
      {/* Main Content */}
      <main>
        {/* Page Header */}
        <section className="bg-subtle-bg py-12">
          <div className="container mx-auto px-6 text-center section-content">
            <h1 className="text-4xl font-bold text-primary">彈性體介紹</h1>
            <p className="text-lg text-gray-600 mt-2">Technical Articles & Resources</p>
          </div>
        </section>

        {/* Intro & Search */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 section-content">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                歡迎來到我們的技術資源中心。在這裡，我們分享關於彈性體材料科學的深入見解、應用案例分析以及最新的產業趨勢，幫助您做出更精準的決策。
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="relative flex-grow">
                  <input 
                    type="search" 
                    placeholder="搜尋文章..." 
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <button className="w-full md:w-auto bg-gray-100 text-primary font-medium py-3 px-6 rounded-md flex items-center justify-center hover:bg-gray-200 transition">
                  所有分類 <ChevronDown className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-20 bg-subtle-bg">
          <div className="container mx-auto px-6 section-content">
            {/* Featured Article */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">精選文章</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex transition-shadow duration-300 hover:shadow-xl">
                <div className="md:w-1/2">
                  <Image 
                    src={featuredArticle?.featuredImage || "https://placehold.co/800x600/F97316/FFFFFF?text=Featured+Article"}
                    alt={featuredArticle?.title || "精選文章"}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {featuredArticle?.title || "如何選擇最適合您應用的彈性體材料？"}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredArticle?.excerpt || "在高溫、高壓的環境下，不同的彈性體展現出截然不同的性能。本文將深入比較 FKM, FFKM, Silicone 等材料的關鍵特性，幫助您做出最明智的選擇。"}
                  </p>
                  <Link 
                    href={featuredArticle ? `/elastomer-intro/${featuredArticle.slug.current}` : "#"}
                    className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center self-start"
                  >
                    閱讀全文 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Latest Articles */}
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">最新文章</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {articles.filter(article => !article.isFeatured).slice(0, 6).map((article) => (
                <div key={article._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-primary mb-2">{article.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <span className="inline-flex items-center">
                      <Tag className="w-4 h-4 mr-1.5 text-accent" />
                      {getCategoryLabel(article.category)}
                    </span>
                    <span className="inline-flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5 text-accent" />
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link 
                    href={`/elastomer-intro/${article.slug.current}`}
                    className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center"
                  >
                    閱讀全文 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              ))}
              
              {articles.length === 0 && (
                <>
                  {/* 預設文章內容 */}
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-8">
                    <h3 className="text-xl font-bold text-primary mb-2">FKM 與 FFKM 的差異性分析</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                      <span className="inline-flex items-center">
                        <Tag className="w-4 h-4 mr-1.5 text-accent" />
                        材料科學
                      </span>
                      <span className="inline-flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5 text-accent" />
                        2024-08-20
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">本文將深入比較兩種高性能氟橡膠的化學結構、耐溫性、耐化學性與成本效益，助您釐清選擇的關鍵。</p>
                    <Link 
                      href="#"
                      className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center"
                    >
                      閱讀全文 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                    </Link>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-primary mb-2">半導體製程中的密封挑戰與解決方案</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                      <span className="inline-flex items-center">
                        <Tag className="w-4 h-4 mr-1.5 text-accent" />
                        應用案例
                      </span>
                      <span className="inline-flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5 text-accent" />
                        2024-08-15
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">探討在蝕刻與沉積工藝中，彈性體密封件如何應對等離子體環境、高溫及化學腐蝕的嚴苛挑戰。</p>
                    <Link 
                      href="#"
                      className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center"
                    >
                      閱讀全文 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                    </Link>
                  </div>
                  
                  <div className="text-center py-8 mt-8 bg-orange-50 rounded-lg">
                    <p className="text-gray-600 text-lg mb-2">更多技術文章即將推出</p>
                    <p className="text-gray-500 text-sm">請到 Sanity Studio 新增更多文章內容</p>
                  </div>
                </>
              )}
            </div>

            {/* Pagination */}
            {articles.length > 6 && (
              <nav className="mt-12 flex justify-center items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-primary rounded-md hover:bg-gray-100">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 rounded-md bg-accent text-white font-bold">1</button>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 font-medium">2</button>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 font-medium">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-primary rounded-md hover:bg-gray-100">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </nav>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
