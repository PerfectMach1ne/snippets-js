let returnapromise = () => new Promise(function(resolve, reject) {
    setTimeout(() => reject('Error...'), 5000);
})

// returnapromise();
returnapromise().catch(error => console.log(error));