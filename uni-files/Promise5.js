function checkParity(number) {
    if (isNaN(number)) {
        return Promise.reject('Is not a number.');
    }
    if (number % 2 == 0) return Promise.resolve('even');
    else return Promise.resolve('odd');
}

checkParity(2).then(res => console.log(res), err => console.log(err));
checkParity(24214).then(res => console.log(res), err => console.log(err));
checkParity(-4).then(res => console.log(res), err => console.log(err));
checkParity(0).then(res => console.log(res), err => console.log(err));
checkParity(3).then(res => console.log(res), err => console.log(err));
checkParity(5285931).then(res => console.log(res), err => console.log(err));
checkParity(-851).then(res => console.log(res), err => console.log(err));
checkParity('2').then(res => console.log(res), err => console.log(err));
checkParity("abcdefghj").then(res => console.log(res), err => console.log(err));
// true == 1 --> 'odd'
checkParity(true).then(res => console.log(res), err => console.log(err));
checkParity(checkParity(2)).then(res => console.log(res), err => console.log(err));
let funnypromise = checkParity(4).then(res => {}, err => {});
checkParity(funnypromise).then(res => console.log(res), err => console.log(err));