let b = [7,8,9,10,6,5]
let sum = 0
let a = 0

function findAvg() {
    for (let i = 0; i < b.length; i++) {
        sum += b[i]
    }
    a = sum / (b.length)
    alert(a)
}

findAvg()