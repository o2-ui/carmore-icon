import { resolve } from 'path';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    dts({
      //지정된 디렉터리를 루트로 보고 탐색하여, .d.ts 타입 정의 파일을 생성
      entryRoot: 'src',
      //생성된 .d.ts 파일들이 어디에 저장될지 지정
      outDir: 'dist',
      include: ['src/index.ts', 'src/ui/**/*'],
      // Storybook 파일 제외 (.stories.ts / .stories.tsx)
      exclude: ['**/*.stories.*'],
      // 배럴에서 참조한 타입들을 하나의 index.d.ts로 번들링
      rollupTypes: false,
      // dist/index.d.ts 보장
      insertTypesEntry: true,
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  css: {
    modules: {
      // SSR 시 클래스명이 서버/클라이언트 동일하도록 결정적 네이밍
      // (컴포넌트명__로컬명__해시)
      generateScopedName: '[name]__[local]__[hash:base64:5]',
      localsConvention: 'camelCase',
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    // 하나의 CSS로 합치기
    cssCodeSplit: false,
    // outDir 폴더를 빌드 전에 비워주기
    emptyOutDir: true,

    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],

      output: {
        // Vite가 보통 'style.css'로 내보내므로 'index.css'로 강제
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'index.css';
          return '[name][extname]';
        },
      },
    },
  },
});
