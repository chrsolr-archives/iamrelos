module ExceptionHandler {
    'use strict';
        
    /**
     * Handler RequestJS Exceptions
     */
    export function requestJsException(error: any): any {
        console.error(`Error: ${error.statusCode}, ${error.statusMessage}`);
        
        return {
            success: false,
            statusCode: error.statusCode,
            statusMessage: error.statusMessage
        }
    }
}

module.exports = ExceptionHandler;