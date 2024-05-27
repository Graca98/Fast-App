let btnSubmit = document.getElementById("btnSubmit");
let b2bText = document.getElementById("b2bResult");
let kratkyTextResult = document.getElementById("kratkyTextResult");

let modelInput = document.getElementById("model");
let model2Input = document.getElementById("model2");
let pnInput = document.getElementById("pn");
let kratkyTextPocet = document.getElementById("kratkyTextPocet");

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
function copyPN() {
  navigator.clipboard.writeText(pnInput.value.trim())
}

btnSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    b2bText.value = ""
    
    //. Proměnné
    let typ = document.getElementById("typ").value.trim();
    let model = modelInput.value.trim();
    let model2 = model2Input.value.trim();
    let pn = pnInput.value.trim();
    let vek = document.getElementById("vek").value.trim();
    let pocetKostek = document.getElementById("pocetKostek").value.trim();
    let ostatniHlavicka = document.getElementById("ostatniHlavicka").value.trim();
    ostatniHlavicka = ostatniHlavicka
    .replace(/^"\s*|\s*"\s*$/g, '') // Remove quotes at the beginning and end
    .replace(/\n/g, '')            // Remove all existing new lines
    .replace(/•\s*/g, "\n")
    .trim(); 
      
  
  
    //. If podmínky na "ostatní"
    // Pokud se vyplní "Ostatní" tak se zařadí do textu
    
  
  
    //. Uložení bloku textu do jedné proměnné
    
  
    //. Vypsání uložených bloků textů zpět do stránky
    // B2B Text
    b2bText.value = `${typ}\nLEGO® ${model} ${model2}\nPN ${pn}\n\nPočet kostek ${pocetKostek}\nVěk ${vek}+\n\n${ostatniHlavicka}`
  
    // Krátky text
    kratkyTextResult.value = `${typ} LEGO® ${model} ${model2}, doporučený věk ${vek}+, počet kostek ${pocetKostek}`
    // Počítadlo
    kratkyTextPocet.innerText = "Počet znaků: " + kratkyTextResult.value.length
    console.log("velikost: " + kratkyTextResult.value.length)
  });


// Nastaví pozici na začátek při obnovení stránky
window.onload = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};