// Enable logging
const appName = 'app'
const enabled = `${appName}:*,server:*,webpack:*`
const logger = require('debug')

if (process.env.BROWSER) {
    // Enable logging
    logger.enable(enabled)
} else {
    // Enable logging
    process.env.DEBUG = enabled

    if (process.env.NODE_ENV !== 'production') {
        // Let's add some colors to our console.
        // You might want to use your own logger here.
        console.debug = logger(appName + ':debug').bind(console);
        console.info  = logger(appName + ':info').bind(console);
        console.warn  = logger(appName + ':warn').bind(console);
        console.error = logger(appName + ':error').bind(console);
    } else {
        // Make sure debug exists
        console.debug = console.info.bind(console);
    }
}
