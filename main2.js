const myPromise = new Promise((resolve, reject) => {

    const success = false

    setTimeout(() => {

        if (!success) {
            resolve("Operation done!");
        }
        else {
            reject("failed fail");
        }

    }, 2000);
});
myPromise.then(result => console.log(result))
    .catch(error => console.log(error));