import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

// Configuración general de ESLint para el proyecto raíz.
// Sigue la línea de la configuración de la carpeta
// "Segunda entrega proyecto" y permite que `npm run lint`
// se ejecute sin errores de configuración.

export default defineConfig([
  // Ignoramos la carpeta de build de la app de React
  globalIgnores(['Segunda entrega proyecto/dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Regla alineada con la segunda entrega: permite constantes en mayúsculas sin usarse
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

