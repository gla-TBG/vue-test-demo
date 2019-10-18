module.exports = {
    // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    publicPath: './',
    devServer: {
        disableHostCheck: true
    },
    pwa: {
        name: 'My App',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/service-worker.js'
        }
    }
}
