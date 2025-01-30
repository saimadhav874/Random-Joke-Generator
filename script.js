const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.remove("opacity-0")
        jokeContainer.classList.add("fade","opacity-1","transition-opacity");
    });
}
btn.addEventListener("click",getJoke);
getJoke();
