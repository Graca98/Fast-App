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
function smazFirstBox() {
  text.value = ""
  readyBox.value = ""
}

//! ============================== Text na jeden řádek =============================================
let textNaRadek = document.getElementById("textNaJednomRadku")
let readyBoxNaRadek = document.getElementById("textNaJednomRadkuReady")
let pocetZnaku = document.querySelector(".pocetZnaku")
let pocetZnakuReady = document.querySelector(".pocetZnakuReady") // test
pocetZnaku.innerHTML = "Počet znaků: " + textNaRadek.value.length // nastaví hodnotu na 0 (prázdný box)
pocetZnakuReady.innerHTML = "Počez znaků v hotovém: " + readyBoxNaRadek.value.length // nastaví hodnotu na 0 (prázdný box)
let readyRadekValue;

console.log(readyBoxNaRadek.value.length)


textNaRadek.addEventListener("input", function handleChange(e) {
  let text = e.target.value
  let formatovanyText = text.trim().replace(/\n/g, ', ');
  formatovanyText = formatovanyText.charAt(0).toUpperCase() + formatovanyText.slice(1).toLowerCase();
  formatovanyText = formatovanyText.replace(/:/g, ""); // nahradí dvojtečky za ""
  formatovanyText = formatovanyText.replace(/ ,/g, ","); // nahradí mezeru před čárkou pouze čárkou
  formatovanyText = formatovanyText.replace(/ w/g, " W"); // vezme " w" (mezera w) a nahradí " W"
  formatovanyText = formatovanyText.replace(/ db/g, " dB"); // vezme " db" (mezera db) a nahradí " dB"
  formatovanyText = formatovanyText.replace(/ hepa/g, " HEPA"); // vezme " hepa" (mezera hepa) a nahradí " HEPA"
  formatovanyText = formatovanyText.replace(/ v nimh/g, " V NiMH"); // vezme " v nimh" (mezera v nimh) a nahradí " V NiMH"
  formatovanyText = formatovanyText.replace(/ li-ion/g, " Li-Ion"); // vezme " li-ion" (mezera li-ion) a nahradí " Li-Ion"
  formatovanyText = formatovanyText.replace(/li-ion/g, "Li-Ion");
  formatovanyText = formatovanyText.replace(/ bpa/g, " BPA"); // vezme " bpa" (mezera ) a nahradí bpa" BPA"
  formatovanyText = formatovanyText.replace(/ tare/g, " TARE"); // vezme " tare" (mezera tare) a nahradí " TARE"
  formatovanyText = formatovanyText.replace(/ lcd/g, " LCD"); // vezme " lcd" (mezera lcd) a nahradí " LCD"

  // formatovanyText = formatovanyText.replace(/ here/g, " here"); // vezme " " (mezera ) a nahradí " "

  
  // Výsledek
  readyRadekValue = readyBoxNaRadek.value = formatovanyText
  // Počet znaků výsledku
  pocetZnaku.innerHTML = `Počet znaků: ${formatovanyText.length}`
})

// Zkopíruje text buttonu
function copyRowText() {
  navigator.clipboard.writeText(readyRadekValue)
}

function smazSecondBox() {
  textNaRadek.value = ""
  readyBoxNaRadek.value = ""
  // Nastaví počítadla na 0 (prazdný box)
  pocetZnaku.innerHTML = "Počet znaků: " + textNaRadek.value.length 
  pocetZnakuReady.innerHTML = "Počez znaků v hotovém: " + readyBoxNaRadek.value.length

}

// Počítá znaky v druhém boxu, pokud se v něm edituje
readyBoxNaRadek.addEventListener("input", function handleChange(e) {
  let text = e.target.value
  pocetZnakuReady.innerHTML = `Počet znaků v hotovém: ${text.length}`
})

//! ============================== Odstranění hvezdiček =============================================
let textareaHvezdicek = document.getElementById("textareaHvezdicek");
let textareaHveznicekReady = document.getElementById("textareaHvezdicekReady");
let result;

textareaHvezdicek.addEventListener("input", function handleChange(e) {
  let text = e.target.value
  let zpracovanyText = text.replace(/\*\s/g, ''); // odstraní hvezdicku *
  zpracovanyText = zpracovanyText.replace(/\-\s/g, ''); // odstraní pomlčku -

  result = textareaHvezdicekReady.value = zpracovanyText
})

function copyBezHvezdicekText() {
  navigator.clipboard.writeText(result)
}
function smazThirdBox() {
  textareaHvezdicek.value = ""
  textareaHveznicekReady.value = ""
}


//! ============================== Porovnání textů =============================================
let rozdil = document.querySelector(".rozdil");
let text1InputSmaz = document.getElementById("textRozdilu1");
let text2InputSmaz = document.getElementById("textRozdilu2");

function porovnej() {
  let text1Input = document.getElementById("textRozdilu1");
  let text2Input = document.getElementById("textRozdilu2");
  
  let text1 = text1Input.value;
  let text2 = text2Input.value;
  
  let words1 = text1.split(" ");
  let words2 = text2.split(" ");

  let differences = [];
  
  for (let i = 0; i < Math.min(words1.length, words2.length); i++) {
    if (words1[i] !== words2[i]) {
      differences.push(`Slovo na pozici ${i} se liší: '${words1[i]}' vs. '${words2[i]}'`);
    }
  }

  if (differences.length > 0) {
    rozdil.innerHTML = differences.join("<br>");
  } else {
    rozdil.innerHTML = "Texty jsou shodné.";
  }
}

function smazFourthBox() {
  text1InputSmaz.value = ""
  text2InputSmaz.value = ""
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



