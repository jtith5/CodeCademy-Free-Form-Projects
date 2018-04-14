let input = 'vdseryuesuue'
let vowels = 'aeiouy'
let resultArray = []

for (let i=0; i < input.length; i++){
    for (let j = 0; j < vowels.length; j++){
        if (input[i] === vowels[j]){
            resultArray.push(input[i])
        }
       // console.log(`j is ${j}`);
    } if (input[i] === 'e'){
        resultArray.push(input[i])
    } if (input[i] === 'u'){
        resultArray.push(input[i])
    }
    //console.log(`i is ${i}`);
    // console.log('i is ' + i);
} console.log(resultArray.join('').toUpperCase());
