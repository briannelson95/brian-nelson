export default {
    name: 'cta',
    title: 'Call to Action',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'reference',
            to: [{ type: 'page' }],
            description: 'This should be an internal link only.'
        }
    ],
}