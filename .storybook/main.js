module.exports = {
    stories: ['../docs/**/*.stories.tsx'],
    addons: ['@storybook/addon-actions'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
            },
        });

        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
