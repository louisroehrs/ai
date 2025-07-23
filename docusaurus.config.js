// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Louis Roehrs | AI Strategy & Innovation',
  tagline: 'Transforming Business Through Strategic AI Implementation',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://roehrs.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'louisroehrs', // Usually your GitHub org/user name.
  projectName: 'ai', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  staticDirectories: ['static'],

  // Add custom scripts for GitHub Pages compatibility
  scripts: [
    {
      src: '/js/scrollAnimations.js',
      defer: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'mydocs',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 15,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/louisroehrs/ai',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'Louis Roehrs',
        logo: {
          alt: 'Louis Roehrs AI Strategy Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/blog', label: 'Insights', position: 'left'},
          {to: '/patents', label: 'Innovation', position: 'left'},
          {to: '/contact', label: 'Engage', position: 'left'},
          {
            href: 'https://www.linkedin.com/in/louisroehrs',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://github.com/louisroehrs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Services',
            items: [
              {
                label: 'AI Strategy Consulting',
                to: '/contact',
              },
              {
                label: 'Innovation Advisory',
                to: '/patents/intro',
              },
              {
                label: 'Thought Leadership',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/louisroehrs',
              },
              {
                label: 'X',
                href: 'https://x.com/louisroehrs',
              },
              {
                label: 'Contact',
                to: '/contact',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'AI Insights',
                to: '/blog',
              },
              {
                label: 'Innovation Portfolio',
                to: '/patents',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/louisroehrs',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Louis F. Roehrs. Strategic AI Consulting for Enterprise Innovation.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
