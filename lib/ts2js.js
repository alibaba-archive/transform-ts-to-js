"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@babel/core");
const babelDecoratorPlugin_1 = require("./babelDecoratorPlugin");
const babelDynamicImportPlugin_1 = require("./babelDynamicImportPlugin");
const babelTransformTSPlugin_1 = require("./babelTransformTSPlugin");
function ts2js(fileList, option = {}) {
    const jsFiles = fileList.map((entity) => {
        const { code } = core_1.transformSync(entity.data, {
            plugins: [
                [
                    babelDecoratorPlugin_1.default,
                    {
                        decoratorsBeforeExport: !!option.decoratorsBeforeExport,
                    },
                ],
                [babelDynamicImportPlugin_1.default],
                [
                    babelTransformTSPlugin_1.default,
                    {
                        isTSX: true,
                    },
                ],
            ],
        });
        return {
            ...entity,
            data: code,
        };
    });
    return jsFiles;
}
exports.default = ts2js;
