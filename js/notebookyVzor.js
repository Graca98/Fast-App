let btnSubmit = document.getElementById("btnSubmit");
let b2bText = document.getElementById("b2bResult");
let kratkyTextResult = document.getElementById("kratkyTextResult");
let kratkyTextPocet = document.getElementById("kratkyTextPocet");
// Hlavička
let typInput = document.getElementById("typ");
let modelInput = document.getElementById("model");
let pnInput = document.getElementById("pn");
let osInput = document.getElementById("os");
let ostatniHlavickaInput = document.getElementById("ostatniHlavicka");
// Procesor
let procesorInput = document.getElementById("procesor")
let typickaInput = document.getElementById("typicka")
let maximalniInput = document.getElementById("maximalni")
let jadraInput = document.getElementById("jadra")
let ostatniProcesorInput = document.getElementById("ostatniProcesor")
// Pamet
let pametInput = document.getElementById("pamet")
let ulozisteInput = document.getElementById("uloziste")
let ostatniPametInput = document.getElementById("ostatniPamet")

  
btnSubmit.addEventListener("click", function(e) {
  e.preventDefault();
  b2bText.value = ""

  //. Proměnné
  // Hlavička
  //todo Odstranit 'value = "hodnota"'
  let typ = typInput.value = "Notebook";
  let model = modelInput.value = "Lenovo LOQ 15IRH8";
  let pn = pnInput.value = "82XV005KCK";
  let os = osInput.value = "Windows 11 Home";
  let ostatniHlavicka = ""; //? Ponechá se prázdné jako volitelné

  // Procesor
  let procesor = procesorInput.value = "Intel Core i5-13420H"
  let typicka = typickaInput.value = "2.1"
  let maximalni = maximalniInput.value = "4,6"
  let jadra = jadraInput.value = "8"
  let ostatniProcesor = ""

  // Pamet
  let pamet = pametInput.value = "16"
  let uloziste = ulozisteInput.value = "SSD 512"
  let ostatniPamet = ""


  //. If podmínky na "ostatní"
  // Pokud se vyplní "Ostatní" tak se zařadí do textu
  if (ostatniHlavickaInput.value != "") {
    ostatniHlavicka = `\n${ostatniHlavickaInput.value}`
  }
  if (ostatniProcesorInput.value != "") {
    ostatniProcesor = `\n${ostatniProcesorInput.value}`
  }
  if (ostatniPametInput.value != "") {
    ostatniPamet = `\n${ostatniPametInput.value}`
  }


  //. Uložení bloku textu do jedné proměnné
  let hlavickaText = `${typ}\n${model}\nPN ${pn}\nOperační systém ${os}${ostatniHlavicka}`
  let procesorText = `Procesor ${procesor}\nTaktovací frekvence procesoru (typická) ${typicka} GHz\nTaktovací frekvence procesoru (maximální) ${maximalni} GHz\nPočet jader procesoru ${jadra}${ostatniProcesor}`
  let pametText = `Pamět RAM ${pamet} GB\nÚložiště ${uloziste} GB${ostatniPamet}`


  //. Vypsání uložených bloků textů zpět do stránky
  // B2B Text
  b2bText.value = `${hlavickaText}\n\n${procesorText}\n\n${pametText}`

  // Krátky text
  kratkyTextResult.value = `${typ}, procesor ${procesor}, displej 1920x1080 15,6" IPS, grafická karta NVIDIA GeForce RTX 3050 6 GB, RAM ${pamet} GB, paměť ${uloziste} GB, operační systém ${os}`
  // Počítadlo
  kratkyTextPocet.innerText = "Počet znaků: " + kratkyTextResult.value.length
});

