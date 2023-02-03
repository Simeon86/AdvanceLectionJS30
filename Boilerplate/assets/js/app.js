window.addEventListener('DOMContentLoaded', () => {
	
});	

// Task with stars

// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 5; j++){
//         console.log('*');
//     }
// }



for(let i = 0; i <= 5; i++){
    let str = "";
    for(let j = 0; j < i; j++){
        str += "*";
    }
    console.log(str)
}

///////////////////////////////

let numArr = [1,2,3,4,5];
console.log(numArr[2])

console.log('//////////////Shift/////////////////')
let numArr1 = [1,2,3,4,5];
numArr1.shift()
console.log(numArr1)

console.log('//////////////Unshift/////////////////')

let numArr2 = [1,2,3,4,5];
numArr2.unshift(10)
console.log(numArr2)

console.log('//////////////Pop/////////////////')

let numArr3 = [1,2,3,4,5];
numArr3.pop()
console.log(numArr3)

console.log('//////////////Push/////////////////')
let numArr4 = [1,2,3,4,5];
numArr4.push(20)
console.log(numArr4)

console.log('//////////////ForEach/////////////////')

let numArr5 = [1,2,3,4,5];
numArr5.forEach(function(element, index, arr) {
    console.log(element, index, arr)
})

console.log('//////////////Map/////////////////')
//  In Browser working

let numArr6 = [1,2,3,4,5];

numArr6.map((elem, index, arr) => {
    console.log(elem, index, arr);
    return elem + 1;
})
console.log(numArr6)

/////////////////////////

let numArr7 = [1,2,3,4,5];

let newArr7 = numArr7.map((elem, index, arr) => {
    console.log(elem, index, arr);
    return elem + 1;
})
console.log(numArr6)
console.log(newArr7)

console.log('////////////////////////////////////')

let obj = {
    height: '200',
    age: 24,
    eyeColor: 'brown',
};

console.log(obj.height)
console.log(obj["age"])// Strong

obj.name = 'Simeon';
console.log(obj)

obj["city"] = 'Varna';
console.log(obj)
