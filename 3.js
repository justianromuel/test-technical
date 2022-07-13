const arr = [2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11];
let ganjil = [];
let genap = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        genap.push(arr[i])
    } else {
        ganjil.push(arr[i])

    }
}

function bubbleSort(arr) {
    // cek lenght array
    if (arr.length == 1)
        return;

    let count = 0;
    for (let i = 0; i < arr.length - 1; i++)
        if (arr[i] > arr[i + 1]) {
            // swap arr[i], arr[i+1]
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            count++;
        }

    // cek recursion
    // jika recursion tidak ada / tidak terjadi maka di return
    if (count == 0)
        return console.log(
            "Array:", arr.toString(),
            "\nganjil:", ganjil.toString(),
            "\ngenap:", genap.toString()
        );

    // nilai paling besar sudah fix
    // recur sisa array yang ada
    bubbleSort(arr);
}

bubbleSort(arr);