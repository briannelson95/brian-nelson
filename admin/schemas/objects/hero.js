export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage'
        },
        {
            name: 'cta',
            type: 'cta',
        }
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'tagline',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `Hero ${disabled ? 'DISABLED' : title}`
            }
        }
    }
}