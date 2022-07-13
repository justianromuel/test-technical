function isPrimeNum(prima) {
    let isPrime = true;
    for (i = 2; i <= (prima / 2); i++) {
        if (prima % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime == 1 || prima == 2)
        return true;
    else
        return false;
}

function drawSegitiSiku(siku) {
    // let siku = 7;
    let prima = 2;
    for (let i = 1; i <= siku; i++) {
        let s = ""
        for (let j = 1; j <= i; j++) {
            while (!isPrimeNum(prima)) {
                prima++;
            }
            s += prima++ + " ";
        }
        console.log(s);
    }
    return (false);
}

drawSegitiSiku(3)