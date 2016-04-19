console.log("module.js here!");

const secretNumber = 42;
const isModule = true;

export { 
    secretNumber as default,
    isModule 
};