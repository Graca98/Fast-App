let btnSubmit = document.getElementById("btnSubmit");
let b2bText = document.getElementById("b2bResult");
let kratkyTextResult = document.getElementById("kratkyTextResult");
let kratkyPocetZnaku = document.getElementById("kratkyPocetZnaku");

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

    let kratkyText = kratkyTextInput.value.trim().toLowerCase()
    

    let rozmeryCheckbox = rozmeryCheckboxInput.checked
    let vyska = vyskaInput.value.trim()
    let sirka = sirkaInput.value.trim()
    let hloubka = hloubkaInput.value.trim()

    let rozmery = rozmeryCheckbox ? `\n\nRozměry\nVýška: ${vyska} cm\nŠířka: ${sirka} cm\nHloubka: ${hloubka} cm` : ""
        rozmery = rozmery.replace('.', ',')
    
    // let pocetKostek = document.getElementById("pocetKostek").value.trim();
    let ostatniHlavicka = document.getElementById("ostatniHlavicka").value.trim();
        ostatniHlavicka = ostatniHlavicka.replace(/\.\s/g, "\n");
        ostatniHlavicka = ostatniHlavicka.replace(/\•\s/g, "\n");
        ostatniHlavicka = ostatniHlavicka.replace(/^"|"$/g, '');
        ostatniHlavicka = ostatniHlavicka.replace(/\*\s/g, ''); // odstraní hvezdicku *
        ostatniHlavicka = ostatniHlavicka.replace(/\-\s/g, ''); // odstraní pomlčku -
        ostatniHlavicka = ostatniHlavicka.replace(/•\s+/g, ""); // odstraní • a mezeru
        ostatniHlavicka = ostatniHlavicka.split('\n').filter(Boolean).map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('\n');
        ostatniHlavicka = ostatniHlavicka.trim()
      
  
    // B2B Text
    b2bText.value = `${typ}\n${model}${pn}\n\n${ostatniHlavicka}${rozmery}${b2bBarva}`
  
    // Krátky text
    kratkyTextResult.value = `${typ}, ${kratkyText}${KratkyTextBarva}`

    // Počítadlo
    kratkyPocetZnaku.innerText = `Počet znaků: ${kratkyTextResult.value.length}`
  });


// Přepočítá počet znaků při ručním editu textového pole
kratkyTextResult.addEventListener("input", () => {
  kratkyPocetZnaku.innerText = `Počet znaků: ${kratkyTextResult.value.length}`
})



// Nastaví pozici na začátek při obnovení stránky
window.onload = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};