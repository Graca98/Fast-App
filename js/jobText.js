let btnSubmit = document.getElementById("btnSubmit");
let result = document.getElementById("result");

let poziceInput = document.getElementById("pozice");
let pozice;
let ukazkaInput = document.getElementById("ukazka");

function copyResult() {
  navigator.clipboard.writeText(result.value.trim());
}

function resetBtn() {
  // typInput.value = "";
  result.value = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  pozice = poziceInput.value.trim();

  let ukazka = `Dobrý den,

jmenuji se Denis Gracias a rád bych se ucházel o pozici ${pozice}. Mám za sebou zkušenosti jako Content Editor, kde jsem spravoval a přidával obsah na webové stránky. Později jsem se posunul k samotnému vývoji, kde jsem pracoval na vývoji webových služeb, reagoval na požadavky klientů a postupně se více ponořil do frontendu.

Aktivně pracuji s technologiemi jako HTML, CSS, JavaScript a React, používám Git i Azure DevOps, a vím si rady také s MS Office a SAPem.
V poslední době jsem se začal více věnovat i testování – konkrétně pomocí Pytestu a Playwrightu, a to jak v prostředí JavaScriptu, tak Pythonu.

Myslím si, že mohu nabídnout kombinaci technických dovedností, pečlivosti a chuti učit se dál. Zároveň mám rád srozumitelnou komunikaci, spolehlivost a přístup, který nezůstává jen u kódu.

Budu rád za příležitost ukázat, co umím – a zároveň se od zkušenějších kolegů dál rozvíjet.`;

  // B2B Text
  result.value = ukazka;
});

// Nastaví pozici na začátek při obnovení stránky
window.onload = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
