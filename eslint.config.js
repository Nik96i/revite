// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from "globals";

// Plugins
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,

    {
        languageOptions: {
            globals: {
                ...globals.browser
            },
            parserOptions: {
                project: "./tsconfig.eslint.json",
                tsconfigRootDir: import.meta.dirname
            }
        }
    },

    // React Plugin
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh
        },
        settings: {
            react: {
                version: "detect",
            }
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.browser
            }
        },
        rules: {
            ...reactHooks.configs.recommended.rules,

            // Enforce Rules of Hooks
            "react-hooks/rules-of-hooks": ["error"],
            // Verify the list of the dependencies for Hooks like useEffect and similar
            "react-hooks/exhaustive-deps": ["error"],

            // React Refresh
            "react-refresh/only-export-components": ["warn", { "allowConstantExport": true }],
        }
    },

    {
        ignores: [
            "dist",
            "eslint.config.js",
            "vite.config.ts"
        ]
    }
);