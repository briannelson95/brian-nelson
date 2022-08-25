/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: "https://brian-nelson-films.vercel.app/",
    generateIndexSitemap: false,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', disallow: '/' }]
    }
}