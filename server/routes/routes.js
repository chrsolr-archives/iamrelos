///<reference path="../../typings/tsd.d.ts" />
var path = require('path');
var Routes = (function () {
    function Routes(app) {
        this.app = app;
        this.app.get('*', function (req, res) {
            res.sendFile(path.resolve('./public/partials/index.html'));
        });
    }
    return Routes;
})();
module.exports = function (app) { return new Routes(app); };
//# sourceMappingURL=routes.js.map