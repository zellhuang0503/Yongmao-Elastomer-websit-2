import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: '彈性體技術文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '文章標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '網址別名',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '文章摘要',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'category',
      title: '文章分類',
      type: 'string',
      options: {
        list: [
          {title: '材料科學', value: 'material-science'},
          {title: '應用案例', value: 'application-case'},
          {title: '技術指南', value: 'technical-guide'},
          {title: '產業趨勢', value: 'industry-trend'},
          {title: '品質控制', value: 'quality-control'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: '特色圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: '文章內容',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: '標準', value: 'normal'},
            {title: '標題 1', value: 'h1'},
            {title: '標題 2', value: 'h2'},
            {title: '標題 3', value: 'h3'},
            {title: '引用', value: 'blockquote'},
          ],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: '粗體', value: 'strong'},
              {title: '斜體', value: 'em'},
              {title: '底線', value: 'underline'},
              {title: '刪除線', value: 'strike-through'},
            ],
            annotations: [
              {
                title: '連結',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: '網址',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: '發布日期',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: '精選文章',
      type: 'boolean',
      description: '是否為精選文章（首頁顯示）',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: '啟用狀態',
      type: 'boolean',
      description: '是否在網站上顯示此文章',
      initialValue: true,
    }),
    defineField({
      name: 'tags',
      title: '標籤',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'readingTime',
      title: '預估閱讀時間（分鐘）',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(60),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'featuredImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {title, category, publishedAt} = selection
      const categoryLabels = {
        'material-science': '材料科學',
        'application-case': '應用案例',
        'technical-guide': '技術指南',
        'industry-trend': '產業趨勢',
        'quality-control': '品質控制',
      }
      return {
        title,
        subtitle: `${categoryLabels[category as keyof typeof categoryLabels] || category} • ${
          publishedAt ? new Date(publishedAt).toLocaleDateString('zh-TW') : '未發布'
        }`,
      }
    },
  },
  orderings: [
    {
      title: '發布日期（新到舊）',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: '發布日期（舊到新）',
      name: 'publishedAtAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
    {
      title: '標題',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
})
