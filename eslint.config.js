// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from "globals";
import stylistic from '@stylistic/eslint-plugin';

// Flat config compatibility with old config
import { FlatCompat } from '@eslint/eslintrc';

// Plugins
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

// Custom Rules
import typescriptRules from "./lints/typescript/index.js";
import stylisticRules from "./lints/stylistic/index.js";
import reactRules from "./lints/react/index.js";

// eslint-plugin-tailwindcss doesn't compatible with flat config:
// https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/280
// We use this method to make it compatible.
const compat = new FlatCompat()

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,

    // Stylistic Configs
    stylistic.configs.customize({
        jsx: true,
        arrowParens: true,
        flat: true,
        blockSpacing: true,
        braceStyle: 'stroustrup',
        commaDangle: 'always-multiline',
        indent: 2,
        semi: true,
        quotes: 'double',
        quoteProps: 'always'
    }),

    // Tailwind CSS
    ...compat.config({
        extends: ['plugin:tailwindcss/recommended'],
        rules: {
            "tailwindcss/classnames-order": ["warn"],
            "tailwindcss/enforces-negative-arbitrary-values": ["warn"],
            "tailwindcss/enforces-shorthand": ["warn"],
            "tailwindcss/migration-from-tailwind-2": ["error"],
            "tailwindcss/no-arbitrary-value": ["error"],
            "tailwindcss/no-contradicting-classname": ["error"],
            "tailwindcss/no-custom-classname": ["off"],
            "tailwindcss/no-unnecessary-arbitrary-value": ["warn"],
        },
    }),

    {
        languageOptions: {
            globals: {
                ...globals.browser
            },
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        }
    },

    // TypeScript Rules
    {
        files: ["**/*.{ts,tsx}"],
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
            ...typescriptRules
        }
    },

    // Stylistic Rules
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
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
            ...stylisticRules
        }
    },

    // React Plugin
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
        plugins: {
            react: react,
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
            ...reactRules,
            // ...react.configs.recommended.rules,
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
            "lints",
            "tailwind.config.js",
            "postcss.config.js",
            "eslint.config.js",
            "vite.config.ts",
            "vite-env.d.ts",
        ]
    }
);
