const loadJoke = async () => {
    try {
        const norrisJokeFetch = await fetch ('https://api.chucknorris.io/jokes/random',{
            headers: {
                Accept: "application/json"
            }
        });
        const jokeData = await norrisJokeFetch.json();
        document.getElementById("loadingJoke").innerHTML = jokeData.value;
        console.log(jokeData);
    }catch(error) {
        console.log(error);
    }
}

document.getElementById("loadJokeBtn").addEventListener("click", loadJoke)