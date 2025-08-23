import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: '產品',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '產品名稱',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '網址代稱',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: '主要圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文字',
        }
      ]
    }),
    defineField({
      name: 'category',
      title: '產品類別',
      type: 'string',
      options: {
        list: [
          {title: '橡膠製品', value: 'rubber'},
          {title: '彈性體', value: 'elastomer'},
          {title: '工業用品', value: 'industrial'},
          {title: '客製化產品', value: 'custom'},
        ],
      },
    }),
    defineField({
      name: 'shortDescription',
      title: '簡短描述',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(200),
    }),
    defineField({
      name: 'description',
      title: '詳細描述',
      type: 'blockContent',
    }),
    defineField({
      name: 'features',
      title: '產品特色',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'isActive',
      title: '是否啟用',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: '發布日期',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category: 'category',
    },
    prepare(selection) {
      const {title, media, category} = selection
      const categoryTitle = category ? `[${category}]` : ''
      return {
        title: title,
        subtitle: categoryTitle,
        media: media,
      }
    },
  },
})