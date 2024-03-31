let noAngkot = 1
let jmlAngkot = 10
let angkotTersedia = 4
while (noAngkot <= angkotTersedia){
  console.log(`Angkot No. ${noAngkot} berjalan dengan baik.`)
  noAngkot++
}

for (noAngkot = angkotTersedia + 1; noAngkot <= jmlAngkot; noAngkot++){
  console.log((`Angkot No. ${noAngkot} berjalan dengan rusak.`))
}