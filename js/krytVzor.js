let btnSubmit = document.getElementById("btnSubmit");
let b2bText = document.getElementById("b2bResult");
let kratkyTextResult = document.getElementById("kratkyTextResult");

let modelInput = document.getElementById("model");
let pnCheckboxInput = document.getElementById("pnCheckbox")
let pnInput = document.getElementById("pn");

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
    // let pocetKostek = document.getElementById("pocetKostek").value.trim();
    let ostatniHlavicka = document.getElementById("ostatniHlavicka").value.trim();
    ostatniHlavicka = ostatniHlavicka.replace(/\.\s/g, "\n");
    ostatniHlavicka = ostatniHlavicka.replace(/^"|"$/g, '');
    ostatniHlavicka = ostatniHlavicka.trim()
      
  
  
    //. If podmínky na "ostatní"
    // Pokud se vyplní "Ostatní" tak se zařadí do textu
    
  
  
    //. Uložení bloku textu do jedné proměnné
    
  
    //. Vypsání uložených bloků textů zpět do stránky
    // B2B Text
    b2bText.value = `${typ}\n${model}${pn}\n\n${ostatniHlavicka}`
  
    // Krátky text
    kratkyTextResult.value = `${typ}, ${barva}`
    // Počítadlo
    // kratkyTextPocet.innerText = "Počet znaků: " + kratkyTextResult.value.length
  });

// Nastaví pozici na začátek při obnovení stránky
window.onload = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};