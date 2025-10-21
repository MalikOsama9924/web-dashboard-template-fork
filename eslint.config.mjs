import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": [
        "off",
        {
          fixToUnknown: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": ["off"],
      "no-unused-vars": [
        "warn", // Warn for unused variables
        {
          vars: "all", // Check all variables
          args: "after-used", // Ignore unused arguments if they occur before a used argument
          ignoreRestSiblings: true, // Ignore unused variables when using rest syntax
          argsIgnorePattern: "^_", // Ignore unused arguments prefixed with `_`
        },
      ],
      "no-var": ["warn"],
      "prefer-const": ["warn"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
          fixStyle: "separate-type-imports",
        },
      ],
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "next-env.d.ts",
      "build/**",
    ],
  },
];

export default eslintConfig;
