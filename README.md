# eslint-rule

Для подключения правила создать файл `<custom-plugin>.js`

```javascript:
const rules = require("./rules");
const plugin = { rules: { "custom-plugin": rules } };
module.exports = plugin;
```

`eslint.config.js`

```javascript:
"use strict";

const eslintPluginExample = require("./custom-plugin");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest",
        },
        // Using the eslint-plugin-example plugin defined locally
        plugins: {"example": eslintPluginExample},
        rules: {
            "example/custom-plugin": "error",
        },
    }
]
```

Примеры

```javascript:
// Невалидные переменные 
let a = 1
const bI0 = 1
var OoI = 1


// Валидные переменные
const IO10 = 1
let O1I0O000 = 1
var O1001I = 1

// Проверяем только литералы, function expression и function declaration не проверяются
```
