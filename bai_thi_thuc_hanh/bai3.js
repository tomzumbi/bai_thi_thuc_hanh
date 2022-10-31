let a = +prompt()
let b = 0
let c = 2
let sum = 0

function tong() {
    do {
        for (let i = 0; i <= c; i++) {
            if (c % i === 0)
                b++
        }
        if (b === 2) {
            sum = sum + c

        }
        c = c + 1
        b = 0
    } while (c <= a)
    alert(sum)
}

tong()