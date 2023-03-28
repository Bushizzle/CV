module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'preact',
        'react',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:preact/recommended',
        'plugin:react/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'preact/jsx-uses-preact': 'error',
    },
};
