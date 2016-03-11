/* global process */
/**
 * File containing most of the configuration variables
 */
var config = (() => {
    var client = './public/';
    
    /**
     * Database Config Data
     */
    var database = {
        url: process.env.DB_URL || 'mongodb://admin:iamrelosdbadmin@ds051645.mongolab.com:51645/iamrelos-db'
    };
    
    /**
     * Server Environment Config Data
     */
    var server = {
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'dev',
        secret: process.env.SECRET || 'IAMRELOS'
    };
    
    /**
     * Paths
     */
    var paths = {
        root: './',
        client: client,
        css: client + 'css',
        js: client + 'js'
    };
    
    /**
     * Gulp Config Data
     */
    var gulp = {
        tsConfigJson: {
            tsOrder: [
                '**/application.ts',
                '**/*-services.ts',
                '**/application-*.ts',
                '**/*-directive.ts',
                '**/*-controller.ts'
            ],
            tsConfig: {
                "compilerOptions": {
                    module: 'commonjs',
                    target: 'es5',
                    removeComments: true,
                    noImplicitAny: true,
                    sourceMap: true,
                    noImplicitReturns: true,
                    suppressImplicitAnyIndexErrors: true,
                    noFallthroughCasesInSwitch: true,
                    allowUnreachableCode: false,
                    outFile:  client + 'js/app.js'
                }
            }
        },
        minifyOpts: {
            ext: {
                min: '.min.js'
            },
            ignoreFiles: ['-min.js', '.min.js']
        },
        nodemonOpts: {
            script: 'server.js',
            ext: 'js html less ts',
            delayTime: 3
        },
        cssnanoOpts: {
            convertValues: false,
            discardComments: { removeAll: true },
            autoprefixer: false
        }
    };

    return {
        database,
        server,
        gulp,
        paths
    }
})();

module.exports = config;