import SimpleClass from "./simpleClass.js";
import DerivedClass from "./derivedClass.js";

var simple = new SimpleClass("Win Days 16");

console.log("simple.showPropVal()");
simple.showPropVal();

console.log("simple.propVal");
console.log(simple.propVal);

var derived = new DerivedClass("Build 2016");
console.log("derived.propVal");
derived.showPropVal();














