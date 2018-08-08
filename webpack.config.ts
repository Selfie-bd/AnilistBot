import path from 'path';

module.exports = {
    target: 'node',
    mode: 'development',
    entry: path.join(__dirname, 'src/main.ts'),
    node: {
        __dirname: false
    },
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.tsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto",
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.gql?$/,
                use: [
                    {
                        loader: 'webpack-graphql-loader',
                        options: {
                            // validate: true,
                            // schema: "./path/to/schema.json",
                            // removeUnusedFragments: true
                            // etc. See "Loader Options" below
                        }
                    }
                ]
            }
        ]
    }
};