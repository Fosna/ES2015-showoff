import "babel-polyfill";

function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

function logSeconds() {
    console.log((new Date()).getSeconds());
}

timeout(1000).then(() => {
    logSeconds();
    return timeout(2000);
}).then(() => {
    logSeconds();
    
    throw new Error("hmm");
}).catch(err => {
    console.log("poking error");
});