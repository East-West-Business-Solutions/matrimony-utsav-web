/* eslint-disable @typescript-eslint/no-require-imports */

const next = require("eslint-config-next");

const restrictedHeaderFooterImports = {
  "no-restricted-imports": [
    "error",
    {
      paths: [
        {
          name: "@/components/site-header",
          message:
            "Do not import SiteHeader outside src/app/layout.tsx. Global navigation is layout-owned."
        },
        {
          name: "@/components/site-footer",
          message:
            "Do not import SiteFooter outside src/app/layout.tsx. Global footer is layout-owned."
        }
      ]
    }
  ]
};

const config = [
  ...next,

  // Allow imports in the root layout
  {
    files: ["src/app/layout.tsx"],
    rules: {
      "no-restricted-imports": "off"
    }
  },

  // Restrict everywhere else
  {
    files: ["src/**/*.{js,jsx,ts,tsx}", "app/**/*.{js,jsx,ts,tsx}"],
    ignores: ["src/app/layout.tsx"],
    rules: restrictedHeaderFooterImports
  }
];

module.exports = config;
