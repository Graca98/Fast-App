const url = 'https://mc-heads.net/avatar/'

const fetchApi = async (name) => {
    const response = (url + name)
    const data = await response.url


    return data
}

let page = document.getElementById('root')

async function getAvatar(name) {
    let result = await fetchApi(name)

    let img = document.createElement('img')
    img.src = result

    return img
}

page.appendChild(getAvatar('Gracous'))





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