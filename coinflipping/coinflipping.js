function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    // console.log(attempts);
    return attempts;
    // return `It took ${attempts} tries to flip five "heads"`;
}

// const attempts = fiveHeadsSync();
// console.log( attempts );
// console.log( "This is run after the fiveHeadsSync function completes" );  

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        const attempts = fiveHeadsSync();
            if ( attempts > 0 && attempts < 100) {
                    // console.log(`It took ${attempts} tries to flip five heads`);
                resolve(`It took ${attempts} tries to flip five heads`);
            } else {
                reject("Coin flipped more than 100 times!")
            }
    
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );