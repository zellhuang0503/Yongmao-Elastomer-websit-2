import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'company',
  title: '公司資訊',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: '公司名稱',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: '公司標誌',
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
      name: 'introduction',
      title: '公司介紹',
      type: 'blockContent',
    }),
    defineField({
      name: 'vision',
      title: '企業願景',
      type: 'blockContent',
    }),
    defineField({
      name: 'establishedYear',
      title: '成立年份',
      type: 'number',
      validation: Rule => Rule.min(1900).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'isActive',
      title: '是否啟用',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'companyName',
      media: 'logo',
      year: 'establishedYear',
    },
    prepare(selection) {
      const {title, media, year} = selection
      return {
        title: title,
        subtitle: year ? `成立於 ${year}` : '',
        media: media,
      }
    },
  },
})