/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nycreport.org',
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: './out',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};