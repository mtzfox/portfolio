const { when, whenDev } = require("@craco/craco");

module.exports = {
    style: {
        modules: {
            localIdentName: ""
        },
        css: {
            loaderOptions: { /* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */ },
            loaderOptions: (cssLoaderOptions, { env, paths }) => { return cssLoaderOptions; }
        },
        sass: {
            loaderOptions: { /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */ },
            loaderOptions: (sassLoaderOptions, { env, paths }) => { return sassLoaderOptions; }
        }
        // postcss: {
        //     mode: "extends" /* (default value) */ || "file",
        //     plugins: [require('plugin-to-append')], // Additional plugins given in an array are appended to existing config.
        //     plugins: (plugins) => [require('plugin-to-prepend')].concat(plugins), // Or you may use the function variant.
        //     env: {
        //         autoprefixer: { /* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */ },
        //         stage: 3, /* Any valid stages: https://cssdb.org/#staging-process. */
        //         features: {
        //             "nesting-rules": true
        //         }
        //     },
        //     loaderOptions: { /* Any postcss-loader configuration options: https://github.com/postcss/postcss-loader. */ },
        //     loaderOptions: (postcssLoaderOptions, { env, paths }) => { return postcssLoaderOptions; }
        // }
    },
    // eslint: {
    //     // mode: ESLINT_MODES.file,
    //     configure: {
    //         formatter: when(process.env.NODE_ENV === "CI", require("eslint-formatter-vso"))
    //     }
    // },
    babel: {
        presets: [],
        plugins: []
        // loaderOptions: { /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */ },
        // loaderOptions: (babelLoaderOptions, { env, paths }) => { return babelLoaderOptions; }
    },
    // webpack: {
    //     plugins: [
    //         new ConfigWebpackPlugin(),
    //         ...whenDev(() => [new CircularDependencyPlugin()], [])
    //     ]
    // },
    jest: {
        babel: {
            addPresets: true, /* (default value) */
            addPlugins: true  /* (default value) */
        },
        configure: { /* Any Jest configuration options: https://jestjs.io/docs/en/configuration. */ }
        // configure: (jestConfig, { env, paths, resolve, rootDir }) => { return jestConfig; }
    },
    plugins: [{ plugin: require('@semantic-ui-react/craco-less') }]
};
