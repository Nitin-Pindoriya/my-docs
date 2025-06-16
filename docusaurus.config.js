/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eShop',
  tagline: 'Your one-stop Flutter + Web solution',
  url: 'https://Nitin-Pindoriya.github.io',
  baseUrl: '/',
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
          editUrl: 'https://github.com/Nitin-Pindoriya/my-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: 'eShop',
      items: [
        { to: '/docs/web', label: 'Web', position: 'left' },
        { to: '/docs/intro', label: 'Flutter App', position: 'left' },
      ],
    },
  }),
};

export default config;
