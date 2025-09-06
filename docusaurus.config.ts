import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Vypravěčův koutek',
  tagline: 'Střípky a útržky z neviditelného bojiště',
  favicon: 'img/avatar.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kajicnik', // Usually your GitHub org/user name.
  projectName: 'vypravec', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: undefined,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          breadcrumbs: false,
        },
        blog: false, // Disable blog completely
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'navody',
        path: 'navody',
        routeBasePath: 'navody',
        sidebarPath: require.resolve('./sidebarsNavody.ts'),
        editUrl: undefined,
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
        breadcrumbs: false,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Vypravěčův koutek',
      logo: {
        alt: 'Vypravěčův koutek Logo',
        src: 'img/avatar.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Příběhy',
        },
        {
          to: '/navody',
          position: 'left',
          label: 'Návody',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Oddělení',
          items: [
            {
              label: 'Příběhy',
              to: '/docs/intro',
            },
            {
              label: 'Návody',
              to: '/navody',
            },
          ],
        },
        {
          title: 'Moje odkazy',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.seznam.cz/autor/vypravec-29259',
            },
            {
              label: 'Substack',
              href: 'https://vypravec.substack.com/'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vypravec Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
