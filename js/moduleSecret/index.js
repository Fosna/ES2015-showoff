import * as module from "./module";

console.log("index.js here!");
console.log("module.isModule", module.isModule);
console.log("module.secretNumber", module.secretNumber);
console.log("module.default", module.default);

import secretNumber from "./module";
console.log("secretNumber", secretNumber);