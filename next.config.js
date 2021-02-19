const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  basePath: '/nevatrip_testcase',
  assetPrefix: '/nevatrip_testcase/',
})
