//! Tečky na čárky
let text = document.getElementById("teckyNaCarky")
let readyBox = document.getElementById("teckyNaCarkyReady")
let btnTecka = document.getElementById("btnTecka")
let readyBoxValue;
let btnSmazTeckaText = document.getElementById("btnSmazTeckaText")

text.addEventListener("input", function handleChange(e) {
  let text = e.target.value
  let textSCarkama = text.replace(/\d+\.\d+/g, function(match) {
    return match.replace('.', ',');
  });

  readyBoxValue = readyBox.value = textSCarkama
})

// Zkopíruje text buttonu
function copyTeckaText() {
  navigator.clipboard.writeText(readyBoxValue)
}

//! Text na jeden řádek
let textNaRadek = document.getElementById("textNaJednomRadku")
let readyBoxNaRadek = document.getElementById("textNaJednomRadkuReady")
let pocetZnaku = document.querySelector(".pocetZnaku")
let count = pocetZnaku.innerHTML = "Počet znaků: " + readyRadekValue.length
let readyRadekValue;

console.log(readyBoxNaRadek.value.length)


textNaRadek.addEventListener("input", function handleChange(e) {
  let text = e.target.value
  let formatovanyText = text.trim().replace(/\n/g, ', ');
  formatovanyText = formatovanyText.charAt(0).toUpperCase() + formatovanyText.slice(1).toLowerCase();
  formatovanyText = formatovanyText.replace(/:/g, ""); // nahradí dvojtečky ničím
  formatovanyText = formatovanyText.replace(/ ,/g, ","); // nahradí mezeru před čárkou pouze čárkou
  formatovanyText = formatovanyText.replace(/ w/g, " W"); // vezme " w" (mezera w) a nahradí " W"
  formatovanyText = formatovanyText.replace(/ db/g, " dB"); // vezme " db" (mezera db) a nahradí " dB"
  formatovanyText = formatovanyText.replace(/ hepa/g, " HEPA"); // vezme " db" (mezera db) a nahradí " dB"



  // Výsledek
  readyRadekValue = readyBoxNaRadek.value = formatovanyText
  // Počet znaků výsledku
  // pocetZnaku.innerHTML = `Počet znaků: ${formatovanyText.length}`
})

// Zkopíruje text buttonu
function copyRowText() {
  navigator.clipboard.writeText(readyRadekValue)
}


/* 
Podlahový vysavač
Vysávání: suché
Příkon vysavače: 700 W
Hlučnost: 79 dB
Objem prachového sáčku nebo nádoby: 1.5 l
Typ filtrace: bezsáčkový
Druh filtru: HEPA H 12
Délka kabelu: 7 m
Šířka: 42.5 cm
Výška: 34.5 cm
Hloubka: 26.5 cm
Hmotnost: 6.41 kg 
*/



