import {defineField, defineType} from 'sanity'

export const customElement = defineType(
    {
        name: 'customElement',
        title: 'Custom Element',
        type: 'object',
        fields: [
            defineField({
                name: 'key',
                title: 'Key',
                type: 'string',
                description: 'Unique key to identify the object',
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: (Rule) => Rule.required(),
                
            }),
            defineField(   {
                name: 'value',
                title: 'Value',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },)
          ],
    }
)