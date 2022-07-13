const arr = [2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11]

function bubbleSort(arr, n) {
    // cek lenght array
    if (n == 1)
        return;

    let count = 0;
    for (let i = 0; i < n - 1; i++)
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
        return console.log("Array:", arr.toString());;

    // nilai paling besar sudah fix
    // recur sisa array yang ada
    bubbleSort(arr, n - 1);
}

bubbleSort(arr, arr.length);