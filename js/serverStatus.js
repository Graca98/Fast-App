// https://api.mcsrvstat.us/


const fetchApi = async (url) => {
    let response = await fetch(url)
    if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`)
    }
    let data = response.json()
    return data
}

let rootDiv = document.getElementById("root")

async function getServerStatus(url) {
    try {
        let server = await fetchApi(url)
        console.log(server);
        let ip = `<p class="status">IP: ${server.hostname}</p>`
        let mcVersion = `Verze: ${server.protocol.name}`
        let status = `Status: ${server.online ? "Zapnutý" : "Vypnutý"}`
        let players = `Hráčů online: ${server.players.online}/${server.players.max}`
        let icon = server.icon
        let motd = server.motd.html[0]
        let motd2 = server.motd.html[1]
    


        rootDiv.innerHTML = ip + motd + motd2
    
        return ip
    }
    catch{
        throw new Error("Tento server neexistuje")
    }

}

// console.log(getServerStatus("https://api.mcsrvstat.us/3/play.tcraft.eu"));
async function displayServerStatus() {
    await getServerStatus("https://api.mcsrvstat.us/3/play.tcraft.eu")
}

// displayServerStatus()

getServerStatus("https://api.mcsrvstat.us/3/play.tcraft.eu")
getServerStatus("https://api.mcsrvstat.us/3/play.tcrafft.eu")
