// Code your solutions in this file

const arrOfStr = [];

// For loop
const writeCards = (arrOfNames, name) => {
    let newArr = [];
    for (let i = 0; i < arrOfNames.length; i++) {
        newArr.push(`Thank you, ${arrOfNames[i]}, for the wonderful ${name} gift!`)
    }
    return newArr;
}

// While loop 
const countDown = n => {
    while (n >= 0) {
        console.log(n--);
    }
}