const pathTo = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');


// var ExtractTextPlugin = require('extract-text-webpack-plugin') // 分离css文件的插件
// var CopyWebpackPlugin = require('copy-webpack-plugin')  // 复制文件和目录的插件
// var CleanWebpackPlugin = require('clean-webpack-plugin') // 清理dist目录插件

const entry = { index: pathTo.resolve('src', 'entry.js') };
const weexEntry = { index: pathTo.resolve('src', 'entry.js') };
const vueWebTemp = 'dist';
const hasPluginInstalled = fs.existsSync('./web/plugin.js');
var isWin = /^win/.test(process.platform);


function getEntryFileContent(entryPath, vueFilePath) {
    let relativePath = pathTo.relative(pathTo.join(entryPath, '../'), vueFilePath);
    let contents = '';
    if (hasPluginInstalled) {
        const plugindir = pathTo.resolve('./web/plugin.js');
        contents = 'require(\'' + plugindir + '\') \n';
    }
    if (isWin) {
        relativePath = relativePath.replace(/\\/g, '\\\\');
    }
    contents += 'var App = require(\'' + relativePath + '\')\n';
    contents += 'App.el = \'#root\'\n';
    contents += 'new Vue(App)\n';
    return contents;
}

var fileType = '';

function walk(dir) {
    dir = dir || '.';
    const directory = pathTo.join(__dirname, 'src', dir);
    fs.readdirSync(directory)
        .forEach((file) => {
            const fullpath = pathTo.join(directory, file);
            const stat = fs.statSync(fullpath);
            const extname = pathTo.extname(fullpath);
            const basename = pathTo.basename(fullpath);
            if (stat.isFile() && extname === '.vue' && basename != 'App.vue') {
                if (!fileType) {
                    fileType = extname;
                }
                if (fileType && extname !== fileType) {
                    console.log('Error: This is not a good practice when you use ".we" and ".vue" togither!');
                }
                const name = pathTo.join(dir, pathTo.basename(file, extname));
                if (extname === '.vue') {
                    const entryFile = pathTo.join(vueWebTemp, dir, pathTo.basename(file, extname) + '.js');
                    fs.outputFileSync(pathTo.join(entryFile), getEntryFileContent(entryFile, fullpath));

                    entry[name] = pathTo.join(__dirname, entryFile) + '?entry=true';
                }
                weexEntry[name] = fullpath + '?entry=true';
            } else if (stat.isDirectory() && ['build', 'include', 'assets', 'filters', 'mixins'].indexOf(file) == -1) {
                const subdir = pathTo.join(dir, file);
                walk(subdir);
            }
        });
}

walk();
// web need vue-loader
const plugins = [
    // new webpack.optimize.CommonsChunkPlugin('vendor'),
    // new webpack.NoErrorsPlugin(), // 允许错误不打断程序
    // new webpack.optimize.UglifyJsPlugin({ //压缩代码
    //     output: {
    //         comments: false, //不移除注释
    //     },
    //     compress: {
    //         warnings: false //忽略警告，某些没有用到的组件在打包时会被移除，这时会产生警告，无需在意，webpack1默认true，webpack2默认false
    //     },
    // }),
    new webpack.DefinePlugin({
        'process.env': '"production"' //这样
    }),
    // new webpack.ProvidePlugin({
    //     jQuery: "jquery",
    //     $: "jquery"
    // }),
    new webpack.BannerPlugin({
        banner: '// { "framework": ' + (fileType === '.vue' ? '"Vue"' : '"Weex"') + '} \n',
        raw: true,
        exclude: 'Vue'
    })
];
const webConfig = {
    context: pathTo.join(__dirname, ''),
    entry: entry,
    output: {
        path: pathTo.join(__dirname, 'dist'),
        filename: '[name].web.js',
    },
    // resolve: {
    //     extensions: ['', '.js', '.vue', '.less', '.css', '.scss'],
    //     // fallback: [pathTo.join(__dirname, '../node_modules')],
    //     alias: {
    //         'vue$': 'vue/dist/vue.common.js',
    //         'src': pathTo.resolve(__dirname, '../src'),
    //         'assets': pathTo.resolve(__dirname, '../src/assets'),
    //         'components': pathTo.resolve(__dirname, '../src/components')
    //     }
    // },
    // resolveLoader: {
    //     fallback: [pathTo.join(__dirname, '../node_modules')]
    // },
    // devtool: 'source-map',
    module: {
        // webpack 2.0
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    },
                }],
                exclude: /node_modules(?!(\/|\\).*(weex).*)/
            },
            {
                test: /\.(css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                loader: "vue-style-loader!css-loader!sass-loader", //这样写样式和脚本会混在一个文件，也就是不分离样式，webpack有插件可以实现分离样式
                exclude: /node_modules/
            },
            {
                test: /\.(eot(|\?v=.*)|woff(|\?v=.*)|woff2(|\?v=.*)|ttf(|\?v=.*)|svg(|\?v=.*))$/,
                loader: 'file-loader',
                options: { name: 'fonts/[name].[ext]' },
            },
            {
                test: /\.vue(\?[^?]+)?$/,
                use: [{
                    loader: 'vue-loader'
                }]
            }
        ]
    },
    plugins: plugins
};
const weexConfig = {
    entry: weexEntry,
    output: {
        path: pathTo.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    },

                }],
                exclude: /node_modules(?!(\/|\\).*(weex).*)/

            },
            {
                test: /\.vue(\?[^?]+)?$/,
                use: [{
                    loader: 'weex-loader',
                    options: {
                        loaders: {
                            scss: 'style-loader!css-loader!sass-loader',
                            sass: 'style-loader!css-loader!sass-loader?indentedSyntax'
                        },
                    },
                }],
            },
            {
                test: /\.(css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                loader: "vue-style-loader!css-loader!sass-loader", //这样写样式和脚本会混在一个文件，也就是不分离样式，webpack有插件可以实现分离样式
                exclude: /node_modules/
            },
            {
                test: /\.(eot(|\?v=.*)|woff(|\?v=.*)|woff2(|\?v=.*)|ttf(|\?v=.*)|svg(|\?v=.*))$/,
                loader: 'file-loader',
                options: { name: 'fonts/[name].[ext]' },
            },
            {
                test: /\.we(\?[^?]+)?$/,
                use: [{
                    loader: 'weex-loader'
                }]
            }
        ],
    },
    node: {
        setImmediate: false
            // See "Other node core libraries" for additional options.
    },
    plugins: plugins,
};

var exports = [webConfig, weexConfig];
//var exports = [weexConfig];

module.exports = exports;