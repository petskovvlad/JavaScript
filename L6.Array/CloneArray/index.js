/* eslint-disable prettier/prettier */
function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const newArr = arr.slice(0);
    return newArr;
}