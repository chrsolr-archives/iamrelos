module ExceptionHandler {
    'use strict';
        
    /**
     * Handler RequestJs Exceptions
     */
    export function requestJsException(error: any) {
        console.error(`Error: ${error.statusCode}, ${error.statusMessage}`);
        
        return {
            success: false,
            statusCode: error.statusCode,
            statusMessage: error.statusMessage
        }
    }
}

module.exports = ExceptionHandler;