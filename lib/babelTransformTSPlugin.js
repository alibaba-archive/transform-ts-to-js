"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_transform_typescript_1 = require("@babel/plugin-transform-typescript");
function default_1() {
    return {
        name: 'transform-typescript',
        inherits: plugin_transform_typescript_1.default,
        visitor: {},
    };
}
exports.default = default_1;
