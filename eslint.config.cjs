const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
// const _import = require("eslint-plugin-import");
const jsdoc = require("eslint-plugin-jsdoc");
const angularEslintEslintPlugin = require("@angular-eslint/eslint-plugin");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptEslintTslint = require("@typescript-eslint/eslint-plugin-tslint");
const importPlugin = require('eslint-plugin-import');

const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    extends: compat.extends(
        "plugin:@angular-eslint/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ),

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        "sourceType": "module",

        parserOptions: {
            "project": "tsconfig.json",
        },
    },

    plugins: {
        // import: fixupPluginRules(_import),
        import: importPlugin,
        jsdoc,
        "@angular-eslint": angularEslintEslintPlugin,
        "@typescript-eslint": typescriptEslint,
        "@typescript-eslint/tslint": typescriptEslintTslint,
    },

    "rules": {
        "@angular-eslint/component-class-suffix": "error",
        "@angular-eslint/directive-class-suffix": "error",
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-output-on-prefix": "error",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "off",

        "@typescript-eslint/explicit-member-accessibility": ["off", {
            "accessibility": "explicit",
        }],

        "@typescript-eslint/indent": "error",

        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true,
            },

            "singleline": {
                "delimiter": "semi",
                "requireLast": false,
            },
        }],

        "@typescript-eslint/member-ordering": "error",

        "@typescript-eslint/naming-convention": ["error", {
            "selector": "variable",
            "format": ["camelCase", "UPPER_CASE"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
        }],

        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",

        "@typescript-eslint/no-inferrable-types": ["error", {
            "ignoreParameters": true,
        }],

        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "error",

        "@typescript-eslint/no-shadow": ["error", {
            "hoist": "all",
        }],

        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/prefer-function-type": "error",
        // "@typescript-eslint/quotes": ["error", "single"],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "brace-style": ["error", "1tbs"],
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": ["error", "smart"],
        "guard-for-in": "error",
        "id-denylist": "off",
        "id-match": "off",
        "import/no-deprecated": "warn",
        "indent": "off",
        "jsdoc/no-types": "error",

        "max-len": ["error", {
            "code": 140,
        }],

        "no-bitwise": "error",
        "no-caller": "error",

        "no-console": ["error", {
            "allow": [
                "log",
                "warn",
                "error",
                "dir",
                "timeLog",
                "assert",
                "clear",
                "count",
                "countReset",
                "group",
                "groupEnd",
                "table",
                "dirxml",
                "groupCollapsed",
                "Console",
                "profile",
                "profileEnd",
                "timeStamp",
                "context",
                "createTask",
            ],
        }],

        "no-debugger": "error",
        "no-empty": "off",
        "no-empty-function": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-new-wrappers": "error",
        "no-restricted-imports": ["error", "rxjs/Rx"],
        "no-shadow": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-use-before-define": "off",
        "no-var": "error",
        "prefer-const": "error",
        "quotes": "off",
        "radix": "error",
        "semi": "off",

        "spaced-comment": ["error", "always", {
            "markers": ["/"],
        }],

        "@typescript-eslint/tslint/config": ["error", {
            "rules": {
                "import-spacing": true,
                "use-host-property-decorator": true,
                "use-input-property-decorator": true,
                "use-life-cycle-interface": true,
                "use-output-property-decorator": true,

                "whitespace": [
                    true,
                    "check-branch",
                    "check-decl",
                    "check-operator",
                    "check-separator",
                    "check-type",
                ],
            },
        }],
    },
}]);
