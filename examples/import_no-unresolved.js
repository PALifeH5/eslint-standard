// "import/no-unresolved": ["error", { "ignore": [ "project_" ] }],

// If you want to use Webpack's alias, you should starts its key with 'project_'
// to specify it's project path alias.

// correct: webpack config
module.exports = {
    // ...
    alias: {
        project_utils: path.resolve(__dirname, 'src/utils'),
        project_libs: path.resolve(__dirname, 'src/libs'),
    },
    // ...
}

// wrong
module.exports = {
    // ...
    alias: {
        utils: path.resolve(__dirname, 'src/utils'),
        libs: path.resolve(__dirname, 'src/libs'),
    },
    // ...
}
