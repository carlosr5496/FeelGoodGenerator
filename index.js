
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

const memeAPI = function () {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json())
        .then(data => {
            const image = document.querySelector('img');
            //destructure json array, taking out the URL variable
            /* [{
                "id": "6r6",
                "url": "https://cdn2.thecatapi.com/images/6r6.jpg",
                "width": 2736,
                "height": 3648
                }]
             */
            const { url } = data[0];
            // const url = data[0].url;


            console.log(url);
            image.src = url;

            // image.innerText = data.url;
        })
}


//Create delete button with click event



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
    return memeAPI();
})


// NSFW api

document.addEventListener('DOMContentLoaded', () => console.log('dom loaded'))



// const targetNsfwJoke = function () {
//     fetch('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=religious,political,racist,sexist&type=single')

//         .then(res => res.json())

//         .then(data => {
//             JSON.stringify(data);
//             let nsfwJoke = data.joke;
//             let h4 = document.querySelector('h4');
//             let newJoke = document.createElement('p');
//             let deleteBtn = document.createElement('button');
//             deleteBtn.innerText = 'X';
//             h4.append(newJoke);
//             newJoke.innerText = nsfwJoke ;
//             h4.insertAdjacentElement('beforeend', deleteBtn);

//             console.log(nsfwJoke);
//         })

//         .catch(error => console.log(error))
// };