/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://brian-nelson-films.vercel.app/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', disallow: '/' }]
    }
  }
  