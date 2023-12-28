let btnSubmit = document.getElementById("btnSubmit");
let b2bText = document.getElementById("b2bResult");
let kratkyTextResult = document.getElementById("kratkyTextResult");
let kratkyPocetZnaku = document.getElementById("kratkyPocetZnaku");
let kratkyPocetZnaku2 = document.getElementById("kratkyPocetZnaku2"); // Pro kontorlu pod krátkých textem

let mySelectForm = document.getElementById("mySelectForm")
let modelInput = document.getElementById("model");
let pnCheckboxInput = document.getElementById("pnCheckbox")
let pnInput = document.getElementById("pn");

let kratkyTextInput = document.getElementById("kratkyText")

let rozmeryCheckboxInput = document.getElementById("rozmeryCheckbox")
let vyskaInput = document.getElementById("vyska")
let sirkaInput = document.getElementById("sirka")
let hloubkaInput = document.getElementById("hloubka")

// Zkopíruje text buttonu
function copyB2B() {
  navigator.clipboard.writeText(b2bText.value.trim())
}
function copyKratky() {
  navigator.clipboard.writeText(kratkyTextResult.value.trim())
}
function copyModel() {
  navigator.clipboard.writeText(modelInput.value.trim())
}
// function copyPN() {
//   navigator.clipboard.writeText(pnInput.value.trim())
// }



btnSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    b2bText.value = ""
    
    //. Proměnné
    let typ = document.getElementById("typ").value.trim();
    let model = modelInput.value.trim();
    let pnCheckbox = pnCheckboxInput.checked
    let pn = pnCheckbox ? `\nPN ${pnInput.value.trim()}` : "";

    let barva = document.getElementById("barva").value.trim();
        barva = barva.toLowerCase()
    let KratkyTextBarva = barva ? `, barva ${barva}` : ""
    let b2bBarva = barva ? `\n\nBarva ${barva}` : ""

    // Formát krátkého textu
    // let kratkyText = kratkyTextInput.value.trim()
    // kratkyText = kratkyText.split('\n').filter(Boolean).map(sentence => sentence.charAt(0).toLowerCase() + sentence.slice(1)).join('\n');
    let kratkyText = kratkyTextInput.value.trim()
    kratkyText = kratkyText.split('\n').filter(Boolean).map(sentence => sentence.charAt(0).toLowerCase() + sentence.slice(1)).join('\n');
    kratkyText = kratkyText.replace(/\n/g, ', '); // nahradí dvojtečky za ""
    kratkyText = kratkyText.replace(/:/g, ""); // nahradí dvojtečky za ""
    kratkyText = kratkyText.replace(/ ,/g, ","); // nahradí mezeru před čárkou pouze čárkou
    kratkyText = kratkyText.replace(/ w/g, " W"); // vezme " w" (mezera w) a nahradí " W"
    kratkyText = kratkyText.replace(/ db/g, " dB"); // vezme " db" (mezera db) a nahradí " dB"
    kratkyText = kratkyText.replace(/ hepa/g, " HEPA"); // vezme " hepa" (mezera hepa) a nahradí " HEPA"
    kratkyText = kratkyText.replace(/ v nimh/g, " V NiMH"); // vezme " v nimh" (mezera v nimh) a nahradí " V NiMH"
    kratkyText = kratkyText.replace(/ li-ion/g, " Li-Ion"); // vezme " li-ion" (mezera li-ion) a nahradí " Li-Ion"
    kratkyText = kratkyText.replace(/li-ion/g, "Li-Ion");
    kratkyText = kratkyText.replace(/ bpa/g, " BPA"); // vezme " bpa" (mezera ) a nahradí bpa" BPA"
    kratkyText = kratkyText.replace(/ tare/g, " TARE"); // vezme " tare" (mezera tare) a nahradí " TARE"
    kratkyText = kratkyText.replace(/ lcd/g, " LCD"); // vezme " lcd" (mezera lcd) a nahradí " LCD"
    kratkyText = kratkyText.replace(/xtendlan/g, "XtendLan");
    kratkyText = kratkyText.replace(/ utp/g, " UTP");
    kratkyText = kratkyText.replace(/ cat/g, " Cat");
    kratkyText = kratkyText.replace(/rj/g, "RJ");
    kratkyText = kratkyText.replace(/\./g, "");
    kratkyText = kratkyText.replace(/ leifheit/g, " Leifheit");
    kratkyText = kratkyText.replace(/ profi/g, " PROFI");
    kratkyText = kratkyText.replace(/ click/g, " CLICK");
    kratkyText = kratkyText.replace(/ classic/g, " Classic");
    kratkyText = kratkyText.replace(/ xl/g, " XL");
    kratkyText = kratkyText.replace(/ xxl/g, " XXL");

    let rozmeryCheckbox = rozmeryCheckboxInput.checked
    let vyska = vyskaInput.value.trim()
    let sirka = sirkaInput.value.trim()
    let hloubka = hloubkaInput.value.trim()

    let rozmery = rozmeryCheckbox ? `\n\nRozměry\nVýška: ${vyska} cm\nŠířka: ${sirka} cm\nHloubka: ${hloubka} cm` : ""
        rozmery = rozmery.replace('.', ',')
    
    //! Format B2B textu
    let ostatniHlavicka = document.getElementById("ostatniHlavicka").value.trim();
        ostatniHlavicka = ostatniHlavicka.replace(/\.\s/g, "\n");
        ostatniHlavicka = ostatniHlavicka.replace(/\•\s/g, "\n");
        ostatniHlavicka = ostatniHlavicka.replace(/^"|"$/g, '');
        ostatniHlavicka = ostatniHlavicka.replace(/\*\s/g, ''); // odstraní hvezdicku *
        ostatniHlavicka = ostatniHlavicka.replace(/\-\s/g, ''); // odstraní pomlčku - a mezeru
        ostatniHlavicka = ostatniHlavicka.replace(/\–\s/g, ''); // odstraní pomlčku - a mezeru
        // ostatniHlavicka = ostatniHlavicka.replace(/\-/g, ''); 
        ostatniHlavicka = ostatniHlavicka.replace(/•\s+/g, ""); // odstraní • a mezeru
        ostatniHlavicka = ostatniHlavicka.replace(/•/g, ""); // odstraní • a mezeru
        ostatniHlavicka = ostatniHlavicka.replace(/®/g, "");
        ostatniHlavicka = ostatniHlavicka.split('\n').filter(Boolean).map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('\n');
        ostatniHlavicka = ostatniHlavicka.trim()
      
  
    // B2B Text
    b2bText.value = `${typ}\n${model}${pn}\n\n${ostatniHlavicka}${rozmery}${b2bBarva}`
  
    // Krátky text
    kratkyTextResult.value = `${typ}, ${kratkyText}${KratkyTextBarva}`

    // Počítadlo
    kratkyPocetZnaku.innerText = `Počet znaků: ${kratkyTextResult.value.length}`
    kratkyPocetZnaku2.innerText = `Počet znaků: ${kratkyTextResult.value.length}`
  });


// Přepočítá počet znaků při ručním editu textového pole
kratkyTextResult.addEventListener("input", () => {
  kratkyPocetZnaku.innerText = `Počet znaků: ${kratkyTextResult.value.length}`
})
// Přepočítá počet znaků při ručním editu textového pole
kratkyTextResult.addEventListener("input", () => {
  kratkyPocetZnaku2.innerText = `Počet znaků: ${kratkyTextResult.value.length}`
})



// Nastaví pozici na začátek při obnovení stránky
window.onload = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};