const getPokemon = async () => {
    try{
        const userInput = document.getElementById('searchName').value.toLowerCase()
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);

        if(!pokemonData.ok){
            throw new Error ('Could not find pokemon');
        }
        const data = await pokemonData.json();
        const pokemonImage = data.sprites.front_default;

        const displayPokemon = document.getElementById('pokemonImg');

        displayPokemon.src = pokemonImage;
        displayPokemon.style.display = "block";
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

const searchName = document.getElementById("searchName");

searchName.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter') {
        getPokemon();
    }
})