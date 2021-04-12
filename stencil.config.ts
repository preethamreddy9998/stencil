import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'health-care',
  globalStyle: 'src/components/shared/styles.css',
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
