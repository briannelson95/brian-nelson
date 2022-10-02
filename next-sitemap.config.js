/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.briannelson.dev/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', disallow: '/' }]
    }
  }
  