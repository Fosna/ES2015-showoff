function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

timeout(1000).then(() => {
    console.log((new Date()).getSeconds());
    return timeout(2000);
}).then(() => {
    console.log((new Date()).getSeconds());
    
    throw new Error("hmm");
}).catch(err => {
    console.log('poking error');
});