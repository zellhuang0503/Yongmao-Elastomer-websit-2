import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: '區塊內容',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: '區塊',
      type: 'block',
      styles: [
        {title: '正常', value: 'normal'},
        {title: '標題 1', value: 'h1'},
        {title: '標題 2', value: 'h2'},
        {title: '標題 3', value: 'h3'},
        {title: '標題 4', value: 'h4'},
        {title: '引用', value: 'blockquote'},
      ],
      lists: [
        {title: '項目符號', value: 'bullet'},
        {title: '編號', value: 'number'}
      ],
      marks: {
        decorators: [
          {title: '粗體', value: 'strong'},
          {title: '斜體', value: 'em'},
          {title: '底線', value: 'underline'},
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
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文字',
          description: '重要：用於螢幕閱讀器和 SEO',
        }
      ]
    }),
  ],
})