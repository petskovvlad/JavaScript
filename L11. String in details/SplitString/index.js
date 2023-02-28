/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
const splitString = (text, len) => {
    if(typeof(text) !== 'string') {
        return null
    }

    if (len === undefined) {
        len = 10;
    }

    const textArray = [];
    let startSimbol = 0;
    while(true) {
        let chunk = text.substr(startSimbol, len);
        if (chunk.length === 0) {
            break;
        };
        textArray.push(chunk.padEnd(len, '.'));
        startSimbol += len;
    }

    return textArray;

} 
const someText = 'abcdefghtkkalfd';
console.log(splitString(someText,));