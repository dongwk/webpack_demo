const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { // 样式
                test: /\.css$/,
                use: [
                        'style-loader',
                        'css-loader'
                ]
            },
            { // 图片
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            { // 字体
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            { // csv
              test: /\.(csv|tsv)$/,
              use: [
                'csv-loader'
              ]
            },
            { // xml
              test: /\.xml$/,
              use: [
                'xml-loader'
              ]
            }
        ]
    }
};
