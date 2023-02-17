const download = () => {
    /**
     * menjalankan fungsi fetch
     * fetch menerima parameter url dari API
     * fetch dibangun di atas promise
     */

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((results) => {
        return results.json();
    })
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });
};

download();