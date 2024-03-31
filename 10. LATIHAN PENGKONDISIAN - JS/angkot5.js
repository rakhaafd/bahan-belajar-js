const jmlAngkot = 10
const angkotTersedia = 6
for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

    if (noAngkot <= angkotTersedia && noAngkot !==5){ // mengeluarkan no angkot 5
        console.log(`angkot no ${noAngkot} lancar`)
    }

    else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5){ //untuk mengisi angkot 8, 10, 5 (pembatas dari else)
        console.log(`angkot no ${noAngkot} sedang lembur`)
    }

    else { //untuk mengisi angko 7,9,10
        console.log(`angkot no ${noAngkot} rusak.`)
    }
}