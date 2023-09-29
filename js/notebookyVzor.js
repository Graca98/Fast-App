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
// Displej
let displejTypInput = document.getElementById("displejTyp")
let uhloprickaInput = document.getElementById("uhlopricka")
let rozliseniInput = document.getElementById("rozliseni")
let rozliseniTypInput = document.getElementById("rozliseniTyp")
let svitivostInput = document.getElementById("svitivost")
let frekvenceValueCheckbox = document.getElementById("frekvenceValue") // checkbox true/false
let frekvenceInput = document.getElementById("frekvence")
let ostatniDisplejInput = document.getElementById("ostatniDisplej")
// Grafika
let grafikaTypInput = document.getElementById("grafikaTyp")
let grafikaInput = document.getElementById("grafika")
let pametGrafikaValueCheckbox = document.getElementById("pametGrafikaValue") // checkbox true/false
let grafikaPametInput = document.getElementById("grafikaPamet")
let ostatniGrafikaInput = document.getElementById("ostatniGrafika")
// Specifikace
let touchpadValue = document.getElementById("touchpadValue")
let podsvicenaKlavesniceValue = document.getElementById("podsvicenaKlavesniceValue")
let numerickaKlavesniceValue = document.getElementById("numerickaKlavesniceValue")
let webcameraValue = document.getElementById("webcameraValue")
let cteckaOtiskuValue = document.getElementById("cteckaOtiskuValue")
let ostatniSpecifikaceInput = document.getElementById("ostatniSpecifikace")
let wifiInput = document.getElementById("wifi")
let bluetoothInput = document.getElementById("bluetooth")
let mechanikaValue = document.getElementById("mechanikaValue")
// Barva a bateria
let barvaInput = document.getElementById("barva")
let baterieInput = document.getElementById("baterie")
let baterieVydrzInput = document.getElementById("baterieVydrz")
// Rozměry
let vyskaInput = document.getElementById("vyska")
let sirkaInput = document.getElementById("sirka")
let hloubkaInput = document.getElementById("hloubka")
let hmotnostInput = document.getElementById("hmotnost")




  
btnSubmit.addEventListener("click", function(e) {
  e.preventDefault();
  b2bText.value = ""

  //. Proměnné
  // Hlavička
  //todo Odstranit 'value = "hodnota"'
  let typ = typInput.value;
  let model = modelInput.value;
  let pn = pnInput.value;
  let os = osInput.value == "" ? `Bez operačního systému` : `Operační systém ${osInput.value}`
  let osKratky = osInput.value == "" ? `Bez os` : `Operační systém ${osInput.value}`
  let ostatniHlavicka = ""; //? Ponechá se prázdné jako volitelné

  // Procesor
  let procesor = procesorInput.value
  let typicka = typickaInput.value
  let maximalni = maximalniInput.value
  let jadra = jadraInput.value
  let ostatniProcesor = ""

  // Pamet
  let pamet = pametInput.value
  let uloziste = ulozisteInput.value
  let ostatniPamet = ""
  // Displej
  let displejTyp = displejTypInput.value
  let uhlopricka = uhloprickaInput.value
  let rozliseni = rozliseniInput.value
  let rozliseniTyp = rozliseniTypInput.value
  let svitivost = svitivostInput.value
  let frekvenceValue = frekvenceValueCheckbox.checked
  let frekvence = "" // Hodnota v IF dole
  let ostatniDisplej = ""
  // Grafika
  let grafikaTyp = grafikaTypInput.value
  let grafika = grafikaInput.value
  let pametGrafikaValue = pametGrafikaValueCheckbox.checked
  let grafikaPamet = "" // Hodnota v IF dole
  let ostatniGrafika = ""
  // Specifiakce
  let wifi = wifiInput.value
  let bluetooth = bluetoothInput.value
  let ostatniSpecifikace = ""
  // Barva a bateria
  let barva = barvaInput.value
  let baterie = baterieInput.value
  let baterieVydrz = baterieVydrzInput.value
  // Rozměry
  let vyska = vyskaInput.value
  let sirka = sirkaInput.value
  let hloubka = hloubkaInput.value
  let hmotnost = hmotnostInput.value


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
  if (ostatniDisplejInput.value != "") {
    ostatniDisplej = `\n${ostatniDisplejInput.value}`
  }
  if (ostatniGrafikaInput.value != "") {
    ostatniGrafika = `\n${ostatniGrafikaInput.value}`
  }
  if (ostatniSpecifikaceInput.value != "") {
    ostatniSpecifikace = `\n${ostatniSpecifikaceInput.value}`
  }

  // Pokud je Checkbox zaskrtnuty, vykona se podmínka
  if (pametGrafikaValue) {
    grafikaPamet = `\nPaměť grafické karty ${grafikaPametInput.value} MB`
  }
  if (frekvenceValue) {
    frekvence = `\nObnovovací frekvence displeje ${frekvenceInput.value} Hz`
  }


  //. Uložení bloku textu do jedné proměnné
  let hlavickaText = `${typ}\n${model}\nPN ${pn}\n${os}${ostatniHlavicka}`
  let procesorText = `Procesor ${procesor}\nTaktovací frekvence procesoru (typická) ${typicka} GHz\nTaktovací frekvence procesoru (maximální) ${maximalni} GHz\nPočet jader procesoru ${jadra}${ostatniProcesor}`
  let pametText = `Paměť RAM ${pamet} GB\nÚložiště ${uloziste} GB${ostatniPamet}`
  let displejText = `${displejTyp} displej\nUhlopříčka ${uhlopricka}"\nRozlišení ${rozliseni} ${rozliseniTyp}\nSvítivost displeje ${svitivost} Nitů${frekvence}${ostatniDisplej}`
  let grafikaText = `${grafikaTyp} Grafická karta ${grafika}${grafikaPamet}${ostatniGrafika}`
  // Specifikace
    // checkboxy true/false
    let touchPad = touchpadValue.checked ? `\nPolohovací zařízení TouchPad` : ""
    let podsvicenaKlavesnice = podsvicenaKlavesniceValue.checked ? `\nPodsvícená klávesnice` : ""
    let numerickaKlavesnice = numerickaKlavesniceValue.checked ? `\nNumerická klávesnice` : ""
    let webcamera = webcameraValue.checked ? `\nWeb kamera` : ""
    let cteckaOtisku = cteckaOtiskuValue.checked ? `\nČtečka otisku prstu` : ""
    let mechanika = mechanikaValue.checked ? `\nOptická mechanika` : "\nBez optické mechaniky"
  let specifikaceText = `${touchPad}${podsvicenaKlavesnice}${numerickaKlavesnice}${webcamera}${cteckaOtisku}\nWi-Fi ${wifi}\nBluetooth ${bluetooth}${ostatniSpecifikace}${mechanika}`
  let barvaABaterieText = `Barva ${barva}\nBaterie (typ/kapacita) ${baterie} WHrs\nVýdrž baterie ${baterieVydrz} h`
  let rozmeryText = `Rozměry (V×Š×H) ${vyska} x ${sirka} x ${hloubka} cm\nHmotnost ${hmotnost} kg`


  //. Vypsání uložených bloků textů zpět do stránky
  // B2B Text
  b2bText.value = `${hlavickaText}\n\n${procesorText}\n\n${pametText}\n\n${displejText}\n\n${grafikaText}\n${specifikaceText}\n\n${barvaABaterieText}\n\n${rozmeryText}`

  // Krátky text
  kratkyTextResult.value = `${typ}, procesor ${procesor}, displej ${rozliseni} ${uhlopricka}" ${rozliseniTyp}, grafická karta ${grafika}, RAM ${pamet} GB, paměť ${uloziste} GB, ${osKratky}`
  // Počítadlo
  kratkyTextPocet.innerText = "Počet znaků: " + kratkyTextResult.value.length
});

