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

async function getAvatar(name) {
    let result = await fetchApi(url + name)
    console.log(result);

    let img = document.createElement('img')
    img.src = result

    page.appendChild(img)
}







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