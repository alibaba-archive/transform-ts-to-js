"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_syntax_dynamic_import_1 = require("@babel/plugin-syntax-dynamic-import");
function default_1() {
    return {
        name: 'syntax-dynamic-import',
        inherits: plugin_syntax_dynamic_import_1.default,
        visitor: {},
    };
}
exports.default = default_1;
