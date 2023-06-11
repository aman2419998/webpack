const path = require( 'path' );

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, './dist' ),
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                      }
                }
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            }
        ],
    }
}