module.exports = {
    entry: './js/client.js',
    output: {
        filename: 'index.js'
    },
    target: 'node',
    devServer: {
        inline: true,
        port: 8080
    },
}
