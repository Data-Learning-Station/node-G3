const internet = true

function getData() {

    function executor(resolve, reject) {
        if (internet) {
            resolve("")
        }
        else {
            reject('No internet')
        }
    }

    return new Promise(executor)
}

const result = getData()

result
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err)
    })

