import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Extend Next.js and TypeScript support
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': true }],
      'no-unused-vars': 'error',
      'no-console': 'error',
      'prettier/prettier': 'error',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
];
