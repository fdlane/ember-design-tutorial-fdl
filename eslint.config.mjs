import { eslint, merge } from "@nrg-ui/standards";

export default await merge(
  eslint.rules.ignore([
    "/blueprints/*/files/",
    "/declarations/",
    "/dist/",
    "/coverage/",
    "!.*",
    ".*/",
    "/.node_modules.ember-try/",
  ]),
  eslint.rules.base(),
  eslint.rules.js(),
  eslint.rules.gjs(),
  eslint.rules.scripts([
    "./.prettierrc.js",
    "./.stylelintrc.js",
    "./.template-lintrc.js",
    "./blueprints/*/index.js",
    "./config/**/*.js",
    "./ember-cli-build.js",
    "./eslint.config.mjs",
    "./lib/*/index.js",
    "./server/**/*.js",
    "./testem.js",
  ]),
);
