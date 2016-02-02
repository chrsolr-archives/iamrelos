var ExceptionHandler;
(function (ExceptionHandler) {
    'use strict';
    /**
     * Handler RequestJS Exceptions
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
//# sourceMappingURL=exception-handler.js.map