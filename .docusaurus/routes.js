import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e9a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'ef3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '5b4'),
            routes: [
              {
                path: '/docs/flutter',
                component: ComponentCreator('/docs/flutter', '73c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'a6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/web',
                component: ComponentCreator('/docs/web', '580'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
