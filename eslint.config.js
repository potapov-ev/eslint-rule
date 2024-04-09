"use strict";

const eslintPluginExample = require("./oi10-name-plugin");

module.exports = [
    {
        files: ["src/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest",
        },
        plugins: {"example": eslintPluginExample},
        rules: {
            "example/oi10-name-plugin": "error",
        },
    }
]