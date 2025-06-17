/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eShop',
  tagline: 'Your one-stop Flutter + Web solution',
  url: 'https://Nitin-Pindoriya.github.io',
  baseUrl: '/my-docs/',
  organizationName: 'Nitin-Pindoriya',
  projectName: 'my-docs',
  favicon: 'img/favicon.ico',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  onBrokenLinks: 'ignore',
  trailingSlash: false,
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    toc: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    navbar: {
      title: 'eShop Multivendor Doc',
      logo: {
        alt: 'eShop Logo',
        src: 'img/eshop-logo.png',
      },
      items: [
        { to: '/docs/web', label: 'Web', position: 'left' },
        { to: '/docs/intro', label: 'Flutter App', position: 'left' },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
  }),
};

export default config;
