/**
 * Helper module to handle common functionalities
 */
var Helper = (function () {
    'user strict';
    
    /**
     * Check if the request has via ajax
     */
    function isAjaxRequest(req) {
        return req.headers.accept.indexOf('json') !== -1;
    };

    /**
     * Expose functions
     */
    return {
        isAjaxRequest: isAjaxRequest
    }
    
})();

module.exports = Helper;