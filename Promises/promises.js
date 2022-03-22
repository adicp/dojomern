const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() === 2) {
        resolve("Good, it's Tuesday!");
    } else {
        reject("Someone has a case of the Tuesdays!");
    }
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );