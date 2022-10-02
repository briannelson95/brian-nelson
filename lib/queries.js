export const homepage = `{
    "pageData": *[_type == "page" && title == "Homepage"] {
        title,
        mainImage,
        hero {
            heading,
            tagline,
            image,
            cta {
                title,
                link->{
                    slug
                }
            }
        },
        seo
    },
    "testimonials": *[_type == "testimonial"],
    "videos": *[_type == "portfolio"]{
        allVideos
    },
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug,
            icon
        }
    },
    "siteSettings": *[_type == "siteSettings"]{
        email,
        phone,
        seo,
        title,
        navigation[]->{
            title,
            slug,
            icon
        }
    }
}`

export const blogPage = `{
    "pageData": *[_type == "page" && title == "Blog Page"],
    "allPosts": *[_type == "post"] | order(_createdAt desc) {
        title,
        mainImage,
        excerpt,
        slug
    },
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`

export const singleBlog = `{
    "pageData": *[_type == "post" && slug.current == $slug][0],
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`

export const contactPage = `{
    "pageData": *[_type == "page" && title == "Contact"],
    "contactInfo": *[_type == "siteSettings"] {
        email,
        phone
    },
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`

export const portfolioPage = `{
    "pageData": *[_type == "page" && title == "Portfolio"],
    "portfolio": *[_type == "portfolio"],
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`

export const allPages = `{
    "pageData": *[_type == "page" && slug.current == $slug][0],
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`