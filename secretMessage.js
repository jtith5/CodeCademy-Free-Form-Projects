let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily',
    'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure',
    'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
//console.log(secretMessage);
secretMessage.push('to', 'Program');
//console.log(secretMessage);

secretMessage[7] = 'right';
//console.log(secretMessage);

secretMessage.shift();
//console.log(secretMessage);

secretMessage.unshift('Programming');
//console.log(secretMessage);

// for (let i = 6; i < 10; i++) {
//     secretMessage.splice(i, i + 1);
// }
secretMessage.splice(7, 4);
//console.log(secretMessage);

secretMessage[6] = 'know';
console.log(secretMessage.join());