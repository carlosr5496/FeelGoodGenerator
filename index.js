
//Fetch joke and extract only the joke to append to DOM

const targetApiJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,explicit,racist,sexist&type=single')

        .then(res => res.json())

        .then(data => {
            JSON.stringify(data);
            let copyJoke = data.joke;
            let h3 = document.querySelector('h3');
            let newJoke = document.createElement('p');
            const resetBtn = document.querySelector('#h3Reset');

            resetBtn.addEventListener('click', () =>

                h3.removeChild(newJoke)
            );

            h3.append(newJoke);
            newJoke.innerText = copyJoke;

            console.log(copyJoke);
        })

        .catch(error => console.log(error))
};


// const targetNsfwJoke = () => {
const targetNsfwJoke = function () {
    fetch('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=religious,political,racist,sexist&type=single')

        .then(res => res.json())

        .then(data => {
            JSON.stringify(data);
            console.log(data, typeof data);
            let nsfwJoke = data.joke;
            let h4 = document.querySelector('h4');
            let newJoke = document.createElement('p');
            const resetBtn = document.querySelector('#h4Reset');

            resetBtn.addEventListener('click', () =>

                h4.removeChild(newJoke)
            );

            h4.append(newJoke);
            newJoke.innerText = nsfwJoke;

            console.log(nsfwJoke);
        })

        .catch(error => console.log(error))
};

const arr = [];

const catAPI = function () {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json())
        .then(data => {
            const image = document.querySelector('img');

            const { url } = data[0];
            console.log(url);
            image.src = url;
            // map 
            arr.push(data.map(img => img.url));
            console.log(arr)
            
        })
    }
    
    
    
    //destructure json array, taking out the URL variable
    /* [{
        "id": "6r6",
        "url": "https://cdn2.thecatapi.com/images/6r6.jpg",
        "width": 2736,
        "height": 3648
        }]
     */
    
const imgSource = document.querySelector('.imgSource');
imgSource.addEventListener('click', () => {
        let urlSource = "";


    // 1) declare an empty string
    // 2) loop array and push value into string, separate by \n
    // 3) alert the string 

    arr.forEach(url => {
        urlSource += url.toString() + '\n';
    } )
    alert(`Here are image sources:` + `\n` + urlSource);


})

const h3Reset = () => {
    const deleteBtn = document.querySelector('#h3Reset');
    let resetTarget = document.querySelector('h3');
    deleteBtn.addEventListener('click', () => resetTarget.removeChild())
}

// Variable handling the Joke button with click event
const safeJokeBtn = document.querySelector('#safeJoke');
safeJokeBtn.addEventListener('click', () => {

    //Once clicked, fetch to the Joke API will occur
    console.log('i clicked safe joke');
    return targetApiJoke();
})

const nsfwBtn = document.querySelector('.nsfwJoke');
nsfwBtn.addEventListener('click', () => {
    console.log('I clicked nsfw')
    return targetNsfwJoke();
})

const catImg = document.querySelector('.catBtn');
catImg.addEventListener('click', () => {
    return catAPI();
})



document.addEventListener('DOMContentLoaded', () => console.log('dom loaded'));