let returnapromise = () => new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Hello world'), 5000);
})

// returnapromise();
returnapromise().then(result => console.log(result));