function download(){
    /**
     * Promise dibuat menggunakan promise
     * promise menerima callback/executor
     * executor menerima 2 params : resolve, reject
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
        }, 2000);
    });
}

function notify(){
    console.log("Download complete");
}

const main = async() => {
    console.log(await download());
    console.log(await verify());
    notify();
}

main();