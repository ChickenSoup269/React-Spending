import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'

export default [
  js.configs.recommended, // Cấu hình ESLint mặc định
  ts.configs.recommended, // Cấu hình cho TypeScript
  {
    ignores: ['dist', 'vite.config.ts'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser // Sử dụng parser của TypeScript
    },
    plugins: {
      '@typescript-eslint': ts,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier
    },
    rules: {
      // Quy tắc cho react-refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Quy tắc cho prettier
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ],
      'prettier/prettier': 'error' // Prettier sẽ báo lỗi nếu không đúng quy tắc
    }
  }
]
