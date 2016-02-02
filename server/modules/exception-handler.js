var ExceptionHandler;
(function (ExceptionHandler) {
    'use strict';
    /**
     * Handler RequestJs Exceptions
     */
    function requestJsException(error) {
        console.error("Error: " + error.statusCode + ", " + error.statusMessage);
        return {
            success: false,
            statusCode: error.statusCode,
            statusMessage: error.statusMessage
        };
    }
    ExceptionHandler.requestJsException = requestJsException;
})(ExceptionHandler || (ExceptionHandler = {}));
module.exports = ExceptionHandler;
