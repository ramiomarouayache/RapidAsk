import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RapidAsk',
  tagline: 'RapidAsk',
  favicon: 'img/favicon.ico',
  staticDirectories: ['public', 'static'],

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/RapidAsk/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ramiomarouayache', // Usually your GitHub org/user name.
  projectName: 'RapidAsk', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          sidebarCollapsible: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-5JTQWMMT'
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'RapidAsk',
      logo: {
        alt: 'RapidAsk_logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: '/',
          label: 'Available on :',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: `<a href="https://ramiayache.gumroad.com/l/rapidaskapp" target="_blank" title="Gumroad">
                    <img src="https://cdn.brandfetch.io/idMw8qr5lW/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1667593186460" alt="Gumroad" style="height: 24px;" />
                  </a>`,
        },
        {
          type: 'html',
          position: 'right',
          value: `<a href="https://ramiomar.lemonsqueezy.com/buy/bbbb90f8-f674-45e0-af78-34971da53e96" target="_blank" title="Lemon Squeezy">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWm8Ii4M4dO3OkunUpQf1M1G_6_z6jlVzyQ&s" alt="LemonSqueezy" style="height: 24px; " />
                  </a>`,
        },
        {
          href: 'mailto:rami.omar.ayache@gmail.com',
          label: 'Support',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
