const a = ["cook", "save", "taste", "aves", "vase", "state", "map", "pam"];

//fungsi pengelompokkan anagrams
//pada pengelompokkan digunakan metode hash yang mana key dari hash adalah kata yang sudah diurutkan
//dan value dari hash adalah array yang berisi kata-kata yang merupakan anagram dari key tersebut
//contoh: key = "aetst", value = ["taste", "state"]
const allocateAnagrams = (arr) => {
  const sortedAnagrams = [];
  const hash = {};

  //1. Pengurutan: mengurutkan huruf tiap kata yang ada pada array input
  for (let i = 0; arr[i]; i++) {
    const word = arr[i];
    const charArray = [];

    //memasukkan kata ke dalam array
    for (let j = 0; word[j]; j++) {
      charArray[j] = word[j];
    }

    //mengurutkan huruf dari tiap kata pada array
    for (let k = 0; k < charArray.length - 1; k++) {
      for (let l = k + 1; l < charArray.length; l++) {
        if (charArray[k] > charArray[l]) {
          const temp = charArray[k];
          charArray[k] = charArray[l];
          charArray[l] = temp;
        }
      }
    }

    //menggabungkan huruf yang sudah diurutkan
    let sortedWord = "";
    for (let m = 0; charArray[m]; m++) {
      sortedWord += charArray[m];
    }

    //memasukkan kata yang sudah diurutkan ke dalam array sortedAnagrams
    sortedAnagrams[i] = sortedWord;
  }

  //2. Pengelompokkan Anagram: mengelompokkan kata-kata yang merupakan anagram
  for (let i = 0; arr[i]; i++) {
    //mengambil key dari hash
    const key = sortedAnagrams[i];
    //jika key belum ada pada hash, maka akan membuat key baru
    if (hash[key] === undefined) {
      hash[key] = [];
    }

    //mencari index group yang kosong
    let groupIndex = 0;
    //jika group sudah terisi, maka akan mencari group yang kosong
    for (; hash[key][groupIndex]; groupIndex++) {}
    //memasukkan kata ke dalam group yang kosong
    hash[key][groupIndex] = arr[i];
  }

  //3. Menampilkan Hasil: hasil dari pengelompokkan anagram ditampilkan ke console
  const result = [];
  let resultIndex = 0;
  //mengambil value dari hash dan memasukkannya ke dalam array result
  for (const key in hash) {
    result[resultIndex] = hash[key];
    resultIndex++;
  }

  //menampilkan hasil ke console
  console.log(result);
};

allocateAnagrams(a);
