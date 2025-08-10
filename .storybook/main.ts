import type { StorybookConfig } from '@storybook/react-vite';

import path from 'path';

import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // 1) 경로 alias
    config.plugins?.push(tsconfigPaths());
    config.resolve = {
      ...(config.resolve || {}),
      alias: { ...(config.resolve?.alias || {}), '@': path.resolve(__dirname, '../src') },
    };

    // 2) SCSS 모듈 옵션 주입 (vite.config.ts와 동일하게)
    config.css = {
      ...(config.css || {}),
      modules: {
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        localsConvention: 'camelCase',
        ...(config.css?.modules || {}),
      },
    };

    return config;
  },
};
export default config;
