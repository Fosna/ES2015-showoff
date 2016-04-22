import SimpleClass from "./simpleClass.js";

class DerivedClass extends SimpleClass {
    constructor(propVal) {
        super(propVal);
    }
    
    showPropVal() {
        console.log(this.propVal + " from derived class");
    }
}

export default DerivedClass;