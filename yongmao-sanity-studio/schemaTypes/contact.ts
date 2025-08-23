import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: '聯絡資訊',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: '聯絡我們',
    }),
    defineField({
      name: 'address',
      title: '地址',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: '街道地址',
          type: 'string',
        },
        {
          name: 'city',
          title: '城市',
          type: 'string',
        },
        {
          name: 'postalCode',
          title: '郵遞區號',
          type: 'string',
        },
        {
          name: 'country',
          title: '國家',
          type: 'string',
          initialValue: '台灣',
        },
      ],
    }),
    defineField({
      name: 'phone',
      title: '電話',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: '標籤',
              type: 'string',
              options: {
                list: [
                  {title: '總機', value: 'main'},
                  {title: '傳真', value: 'fax'},
                  {title: '業務', value: 'sales'},
                  {title: '客服', value: 'service'},
                ],
              },
            },
            {
              name: 'number',
              title: '號碼',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'number',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'email',
      title: '電子郵件',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: '標籤',
              type: 'string',
              options: {
                list: [
                  {title: '一般詢問', value: 'general'},
                  {title: '業務合作', value: 'business'},
                  {title: '技術支援', value: 'support'},
                ],
              },
            },
            {
              name: 'address',
              title: '電子郵件地址',
              type: 'email',
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'address',
            },
          },
        },
      ],
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
      title: 'title',
    },
  },
})