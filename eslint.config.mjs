import globals from "globals";
import tsEslint from "typescript-eslint";
import paratcoEslintConfig from "@paratco/eslint-config";
// Flat config compatibility with old config
import { FlatCompat } from '@eslint/eslintrc';

// eslint-plugin-tailwindcss doesn't compatible with flat config:
// https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/280
// We use this method to make it compatible.
const compat = new FlatCompat()

export default tsEslint.config(
    ...paratcoEslintConfig.react,
    ...paratcoEslintConfig.stylisticFormatter,

    { languageOptions: { globals: globals.browser } },

    {
        languageOptions: {
            globals: {
                ...globals.browser
            },
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            }
        }
    },

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
        ignores: [
            "dist",
            "eslint.config.mjs",
            "vite.config.ts",
            "vite-env.d.ts",
            "tailwind.config.js",
            "postcss.config.js"
        ]
    }
);
