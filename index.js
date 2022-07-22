document.addEventListener("click", () => console.log('JokeBtn clicked!'))

const genJoke = (e) => {
    
}

let apiData = fetch("https://v2.jokeapi.dev/joke/Any"
// , {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//     })
//}

) .then(res => {
    if(res.ok) {
        console.log('SUCCESS')
    } else {
        console.log("not successful")
    }
    res.json()
})
.then(data => JSON.stringify(data))
.catch(error => console.log("ERROR"));





document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM LOADED')
})