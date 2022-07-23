
// document.querySelector('.newJoke').addEventListener('click', () => alert('clicked'))
// const appendJoke = () => {
//     let h3 = document.querySelector('h3');
//     let newJoke = document.createElement('p');
//     h3.append(newJoke)
//     newJoke.innerText = targetApiJoke();
// }


const targetJokeBtn = document.querySelector('.newJoke');
targetJokeBtn.addEventListener('click', () => {

    console.log('i was clicked');
    return targetApiJoke();
})



const targetApiJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
    
    .then(res => res.json())
    
    .then(data => {
        JSON.stringify(data);
       let copyJoke = data.joke;
       let h3 = document.querySelector('h3');
       let newJoke = document.createElement('p');
       h3.append(newJoke)
       newJoke.innerText = copyJoke;
       
       console.log(copyJoke);
       
    })
    
    .catch (error => console.log('ERROR'))};

document.addEventListener('DOMContentLoaded', () => console.log('dom loaded'))