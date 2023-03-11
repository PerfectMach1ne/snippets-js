let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Hello'), 3000);
})

promise.then(res => console.log(res, "John Doe"));

async function hello() {
    let waiter = await promise;
    console.log(waiter, "John Doe");
    return true;
}
hello();