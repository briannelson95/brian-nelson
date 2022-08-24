export default {
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Display naame',
            type: 'string',           
        },
        {
            name: 'body',
            title: 'Client Testimonial',
            type: 'blockContent'
        }
    ],
}