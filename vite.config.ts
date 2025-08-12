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
      // Storybook 파일 제외 (.stories.ts / .stories.tsx)
      exclude: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.stories.js', '**/*.stories.jsx'],
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
      entry: {
        'ui/ArrowDoubleDown/index': resolve(__dirname, 'src/ui/ArrowDoubleDown/index.tsx'),
        'ui/ArrowDoubleUp/index': resolve(__dirname, 'src/ui/ArrowDoubleUp/index.tsx'),
        'ui/ArrowDown/index': resolve(__dirname, 'src/ui/ArrowDown/index.tsx'),
        'ui/ArrowUp/index': resolve(__dirname, 'src/ui/ArrowUp/index.tsx'),
        'ui/BackBtn/index': resolve(__dirname, 'src/ui/BackBtn/index.tsx'),
        'ui/Cancel/index': resolve(__dirname, 'src/ui/Cancel/index.tsx'),
        'ui/Chat/index': resolve(__dirname, 'src/ui/Chat/index.tsx'),
        'ui/Check/index': resolve(__dirname, 'src/ui/Check/index.tsx'),
        'ui/Copy/index': resolve(__dirname, 'src/ui/Copy/index.tsx'),
        'ui/CopyLink/index': resolve(__dirname, 'src/ui/CopyLink/index.tsx'),
        'ui/Download/index': resolve(__dirname, 'src/ui/Download/index.tsx'),
        'ui/LoadingSpinner/index': resolve(__dirname, 'src/ui/LoadingSpinner/index.tsx'),
        'ui/PinMap/index': resolve(__dirname, 'src/ui/PinMap/index.tsx'),
        'ui/Nowhere/index': resolve(__dirname, 'src/ui/Nowhere/index.tsx'),
        'ui/OutLink/index': resolve(__dirname, 'src/ui/OutLink/index.tsx'),
        'ui/Refresh/index': resolve(__dirname, 'src/ui/Refresh/index.tsx'),
        'ui/Reply/index': resolve(__dirname, 'src/ui/Reply/index.tsx'),
        'ui/Search/index': resolve(__dirname, 'src/ui/Search/index.tsx'),
        'ui/Setting/index': resolve(__dirname, 'src/ui/Setting/index.tsx'),
        'ui/Share/index': resolve(__dirname, 'src/ui/Share/index.tsx'),
        'ui/StepperMinus/index': resolve(__dirname, 'src/ui/StepperMinus/index.tsx'),
        'ui/StepperPlus/index': resolve(__dirname, 'src/ui/StepperPlus/index.tsx'),
        'ui/SwitchArrow/index': resolve(__dirname, 'src/ui/SwitchArrow/index.tsx'),
        'ui/User/index': resolve(__dirname, 'src/ui/User/index.tsx'),
      },
      // 빌드할 모듈 형식을 지정. (ES Modules 만)
      formats: ['es'],
    },
    // 하나의 CSS로 합치기
    cssCodeSplit: false,
    // outDir 폴더를 빌드 전에 비워주기
    emptyOutDir: true,

    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],

      output: {
        entryFileNames: '[name].js',
        // 폴더 구조 유지
        preserveModules: true,
        // dist/ 안에 src 구조 그대로
        preserveModulesRoot: 'src',
        // Vite가 보통 'style.css'로 내보내므로 'index.css'로 강제
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'index.css';
          return '[name][extname]';
        },
      },
    },
  },
});
