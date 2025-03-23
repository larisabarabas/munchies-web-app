import {defineField, defineType} from 'sanity'

export const staticContentType = defineType(
    {
        name: 'content',
        title: 'Static Content',
        type: 'document',
        fields: [
            defineField({
                name: 'key',
                title: 'Key',
                type: 'string',
                description: 'Unique key to identify the content',
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: (Rule) => Rule.required(),
                
            }),
            defineField(   {
                name: 'body',
                title: 'Body',
                type: 'array',
                of: [{type: 'customElement'}],
              },)
          ],
    }
)