let arr = [10, 6, 8, 4, 2, 3];
let x = +prompt("Nhập số nguyên x");
let index = +prompt("Nhập vị trí index");

function insertNumberToArray(arr, x, index) {
    if (index < 0 || index > arr.length) {
        return arr;
    }
    let newArr = new Array(arr.length + 1);
    for (let i = 0; i < newArr.length; i++) {
        if (i < index) {
            newArr[i] = arr[i];
        } else if (i === index) {
            newArr[i] = x;
        } else {
            newArr[i] = arr[i - 1];
        }
    }
    return newArr;
}

document.write(insertNumberToArray(arr, x, index));