function fiveHeads() {
        return new Promise( (resolve, reject) => {
            if (fiveHeadsSync() > 0 && fiveHeadsSync () < 100) {
                let attempts= fiveHeadsSync();
                resolve(`It took $ { attempts } tries to flip five heads`);
            } else {
                reject("Coin flipped more than 100 times!")
            }
    
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );