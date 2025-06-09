function createAlarm (name, delaySecs) {
    return new Promise((resolve, reject) => {
        if (delaySecs < 2) {
            reject("Delay is not sufficient");
        }
        else {
            setTimeout(() => {
                resolve(`Wake me up ${name}`);
            }, delaySecs * 1000)
        }
    });
}

createAlarm('John', 4)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error)
    });

createAlarm('Gustave', 1)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })