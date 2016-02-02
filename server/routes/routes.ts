///<reference path="../../typings/tsd.d.ts" />

import path = require('path');
import {Express} from "express";

class Routes {
    constructor(private app: Express) {

        this.app.get('*', (req, res) => {
            res.sendFile(path.resolve('./public/partials/index.html'));
        });
    }
}

module.exports = (app) => new Routes(app);