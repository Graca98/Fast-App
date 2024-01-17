const url = 'https://mc-heads.net/avatar/'

const fetchApi = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`)
    }
    const data = response.url
    // console.log(data);


    return data
}
// console.log(fetchApi('https://mc-heads.net/avatar/'));

let page = document.getElementById('root')

// name = herní minecraft jméno hráče
// elementId = do jakého elementu chceme umístit ikonku
// imgClass = zda chceme img tagu dat nějaké classy
async function getAvatar(name, elementId, imgClass="") {
    let result = await fetchApi(url + name + "/16/nohelm")
    console.log(result);

    let img = document.createElement('img')
    img.src = result
    img.classList = imgClass

    elementId.appendChild(img)
}

getAvatar("Gracous", page, "jedenHracImg2")
getAvatar("Davisiiiik", page)


let seznamHracu = document.querySelector(".seznamHracu")

// Funkce na vytvoření:
/** 
 * <div class="jedenHrac">
        <div class="jedenHracSkupina">
            <img class="jedenHracImg" src="https://mc-heads.net/avatar/Gracous/16/nohelm">
            <p>Gracous</p>
        </div>
        <h4>1. místo</h4>
    </div>
*/
async function getTopPlayer(name, poradi, elementId) {
    let jedenHrac = document.createElement("div")
    jedenHrac.classList = "jedenHrac"
    let jedenHracSkupina = document.createElement("div")
    jedenHracSkupina.classList = "jedenHracSkupina"

    await getAvatar(name, jedenHracSkupina, "jedenHracImg")
    let h4 = document.createElement("h4")
    h4.innerHTML = name
    jedenHracSkupina.appendChild(h4)

    let p = document.createElement("p")
    p.innerHTML = `${poradi}. místo`

    
    jedenHrac.appendChild(jedenHracSkupina)
    jedenHrac.appendChild(p)
    elementId.appendChild(jedenHrac)
}

// zavolá a načte hráče v daném pořadí
async function loadTopPlayers() {
    await getTopPlayer("Gracous", 1, seznamHracu)
    await getTopPlayer("Kat02", 2, seznamHracu)
    await getTopPlayer("Pepa", 3, seznamHracu)
    await getTopPlayer("Davisiiiik", 4, seznamHracu)
    await getTopPlayer("AlmostPanda", 6, seznamHracu)
    await getTopPlayer("1Azazel1", 7, seznamHracu)
}

loadTopPlayers()








// let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
// let rootDiv = document.getElementById("root")

// fetchData = async () => {
//     const response = await fetch(url)
//     const data = await response.json()
//     const result = `<h2>Joke generator</h2>
//     <h2>${data.joke}</h2>
//     <p>ID: ${data.id}, kategorie: ${data.category}</>
//     <ul>
//       <li>Nsfw: ${data.flags.nsfw}</li>
//     </ul>`

//     rootDiv.innerHTML = result
//     console.log(data.joke)
//     // return result
// }

// fetchData()




//* Odpadkový koš, materiál ocel, typ sáčku J Simplehuman, bezdotykové, objem 58l, na třídění odpadu, vyjímatelná nádoba, barva bílá

//* Odpadkový koš, materiál ocel, typ sáčku J Simplehuman, bezdotykové, objem 58l, barva bílá