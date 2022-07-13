function isPrimeNum(prime) {
    let isPrime = true;
    for (i = 2; i <= (prime / 2); i++) {
        if (prime % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime == 1 || prime == 2)
        return true;
    else
        return false;
}

function drawSegitiSiku(length) {
    if (length <= 0 || length >= 10) {
        return console.log("note: length input must 0 < alas/tinggi < 10")
    } else {
        let prime = 2;
        for (let i = 1; i <= length; i++) {
            let s = ""
            for (let j = 1; j <= i; j++) {
                while (!isPrimeNum(prime)) {
                    prime++;
                }
                s += prime++ + " ";
            }
            console.log(s);
        }
        return (false);
    }
}

drawSegitiSiku(10)