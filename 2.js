// Voucher  DumbwaysJoss
const diskonDumbwaysJoss = 21.1 / 100;
const maxDiskonDumbwaysJoss = 20000;

// Voucher DumbwaysMantap
const diskonDumbwaysMantap = 30 / 100;
const maxDiskonDumbwaysMantap = 40000;

function dumbwaysJoss(value) {
    if (value >= 50000) {
        let sumDiscont = value * diskonDumbwaysJoss;

        if (sumDiscont < maxDiskonDumbwaysJoss) {
            let result = value - sumDiscont;
            let again = value - result;

            console.log("Uang yang harus dibayar:" + result)
            console.log("Diskon:" + parseInt(sumDiscont))
            console.log("Kembalian : Rp." + again);
        } else {
            let result = value - maxDiskonDumbwaysJoss;
            let again = value - result;

            console.log("Uang yang harus dibayar:" + result)
            console.log("Diskon:" + parseInt(maxDiskonDumbwaysJoss))
            console.log("Kembalian : Rp." + again);
        }
    } else {
        let result = value - !diskonDumbwaysJoss
        let again = value - result;

        console.log("Uang yang harus dibayar:" + result)
        console.log("Diskon:" + 0)
        console.log("Kembalian : Rp." + again);
    }
}
dumbwaysJoss(100000)

function dumbwaysMantap(value) {
    if (value >= 80000) {
        let sumDiscont = value * diskonDumbwaysMantap;

        if (sumDiscont < maxDiskonDumbwaysMantap) {
            let result = value - sumDiscont;
            let again = value - result;

            console.log("Uang yang harus dibayar:" + result)
            console.log("Diskon:" + parseInt(sumDiscont))
            console.log("Kembalian : Rp." + again);
        } else {
            let result = value - maxDiskonDumbwaysMantap;
            let again = value - result;

            console.log("Uang yang harus dibayar:" + result)
            console.log("Diskon:" + parseInt(maxDiskonDumbwaysMantap))
            console.log("Kembalian : Rp." + again);
        }
    } else {
        let result = value - !diskonDumbwaysJoss
        let again = value - result;

        console.log("Uang yang harus dibayar:" + result)
        console.log("Diskon:" + 0)
        console.log("Kembalian : Rp." + again);
    }
}
dumbwaysMantap(100000)