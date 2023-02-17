function download(){
    /**
     * promise dibuat menggunakan class promise 
     * promise menerima callback/executor
     * executor menerima 2 params: resolve, reject
     * resolve untuk mengembalikan promise berhasil
     * reject untuk mengembalikan promise gagal
     */

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Downloading...");
        }, 3000);
    });
}

function verify(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Verify file...");
        },2000);
    });
}

function notify(){
    console.log("Download complete");
}

download()
    .then((results) => {
        console.log(results);
        return verify();
    })
    .then((results) => {
        console.log(results);
        notify();
    })
    .catch((error) => {
        console.log(error)
    });