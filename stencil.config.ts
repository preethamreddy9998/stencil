import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
/*collections: [
    {
      name: '@stencil/router'
    }
  ], */
export const config: Config = {
  namespace: 'health-care',
  globalStyle: 'src/components/shared/styles.scss',
  bundles: [
    { components: ['main-component'] },
    { components: ['home-component'] },
    { components: ['benefits-navigator'] }
  ],
  
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
