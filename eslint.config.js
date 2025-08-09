import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      import: importPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // JSX 쓰면 React import 강제
      'react/react-in-jsx-scope': 'error',
      'react/jsx-uses-react': 'error',

      // 타입 import는 항상 `import type`으로
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // import 정렬/개행
      'import/order': [
        'error',
        {
          groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
          pathGroups: [
            // react, react-dom을 external 맨 앞에
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'react-dom', group: 'external', position: 'before' },
          ],
          // 그룹 사이 개행
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },

          // 사이드이펙트/스타일 import도 검사 대상으로 포함
          warnOnUnassignedImports: true,
        },
      ],
      // 중복 import 방지 (type/값 import 모두 포함)
      'import/no-duplicates': ['error', { considerQueryString: true }],
    },
  },
];
