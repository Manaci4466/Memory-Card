export {randomSort,fetchPokemon,getPokemonUrl,isWinOrLose}

const isWinOrLose = (arr,name) => {
    if(arr.filter((value) => value === name ).length === 1 && arr.length < 10){
        arr.splice(0,arr.length);
        return true
    }
    else if(arr.length === 10){
        arr.splice(0,arr.length);
        return false;
    }
}   

const randomSort = (arr) => {
    return arr.sort(() => {return 0.5 - Math.random()});
}

const fetchPokemon = async () => {
    let arr = [];
    for(let i = 0; i < 10 ; i++){
    await fetch(getPokemonUrl()).then((result) => result.json()).then(result => { arr.push({name: result.name, sprite: result.sprites.other['official-artwork'].front_default,});}).catch((e) => {throw e})
    }
    return arr;
}

/***get pokemon Url***/
const ranNumSet = new Set();
const getPokemonUrl = () => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    let ranNum = Math.round(Math.random() * 1010)
        while(ranNumSet.has(ranNum.toString())){
            ranNum =  Math.round(Math.random() * 1010)
        }
        ranNumSet.add(ranNum.toString());
    return `${baseUrl}/${ranNum}`;
}




