import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      //지정된 디렉터리를 루트로 보고 탐색하여, .d.ts 타입 정의 파일을 생성
      entryRoot: 'src',
      //생성된 .d.ts 파일들이 어디에 저장될지 지정
      outDir: 'dist',
      // 타입 정의 진입점(index.d.ts)을 자동 생성, package.json의 "types": "dist/index.d.ts"와 연결됨
      insertTypesEntry: true,
    }),
  ],
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
      // Vite가 이 파일부터 코드를 분석해 필요한 모듈을 모두 번들링
      entry: resolve(__dirname, 'src/index.ts'),
      // 빌드할 모듈 형식을 지정. (ES Modules 만)
      formats: ['es'],
      // 빌드 후 생성될 파일 이름 지정
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
