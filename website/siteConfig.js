/**
 * Copyright (c) 2018-present, React Spectre
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'React Spectre',
  tagline: 'React components for [Spectre.css](https://picturepan2.github.io/spectre)',
  url: 'https://react-spectre.github.io',
  baseUrl: '/',
  organizationName: 'react-spectre',
  projectName: 'react-spectre.github.io',
  headerLinks: [
    {doc: 'intro', label: 'Docs'},
  ],
  /* path to images for header/footer */
  headerIcon: null,
  footerIcon: 'img/react-spectre-logo.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#5759D6',
    secondaryColor: '#505A6B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © 2018-present React Spectre',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/react-spectre/react-spectre',
};

module.exports = siteConfig;
