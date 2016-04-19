console.log("blockScope start!");

{
    var win = "Win";
    let days = "days";
    const sexteen = 16;
    //sexteen = " 16";
    // Module build failed: SyntaxError: "sexteen" is read-only
}

console.log(win);
//console.log(days);
//JavaScript error: Uncaught ReferenceError: days is not defined

console.log(sexteen);
//JavaScript error: Uncaught ReferenceError: days is not defined



