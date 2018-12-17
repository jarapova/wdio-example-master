exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
    sync: true,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['trueautomation'],
    path: '/',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 50000
    }
}
