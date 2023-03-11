let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject('Error'), 3000);
})

// Metoda 1
promise.catch(err => console.log(err, '!!!'));

// Metoda 2
promise.then(undefined, err => console.log(err, '!!!'));

// Metoda 3 (funkcja asynchroniczna)
async function error() {
    try {
        let waiter = await promise;
    } catch(err) {
        console.log(err, "!!!");
    }
}
error();