
/**
 * Module to handler errors
 */
var ErrorHandler = (function(){
    'use strict';
    
    /**
     * Log error
     */
    function log(error) {
        console.log(error);        
    }
    
    /**
     * Parse error
     */
    function parse(error) {
        console.log(error);
    }
    
    /**
     * Return all public functions
     */
    return {
        log: log,
        parse: parse
    }
})();

module.exports = ErrorHandler;