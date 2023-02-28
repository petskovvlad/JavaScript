/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
const splitText = (text, len) => {
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
        textArray.push(chunk[0].toUpperCase() + chunk.slice(1));
        startSimbol += len;
    }

    return textArray.join('\n');

} 
const someText = 'abcdefghtkkalfd';
console.log(splitText(someText,));