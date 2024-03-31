// FUNCTION DECLARATION
// rumus: function namaFunction (parameter opt){body}

// bentuk:
// function tampilNama(nama){
//     alert(`halo ${nama}`)
// }

// ciri2:
//lebih fleksibel. bisa di deklarasikan dulu, maupun dipanggil. begitu pula sebaiknya (karena hoisting)

// FUNCTION EXPRESSION
// rumus: function opsionalAjah (parameter opt){body}

//bentuk:
let tampilNama = function (nama) {
  //menggunakan variable
  console.log(`halo ${nama}`);
};
tampilNama("rakha"); //jika pemanggilan function ditaruh ke atas, maka akan menghasilkan error

//ciri2:
// harus didefinisikan lebih dulu sebelum dipanggil.
// lebih powerfull, sebagai closure
// IIFE
