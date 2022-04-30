//////////////////////////* Task 1.5 part-1 */////////////////////////
let pokemonList = [{
    name: 'Bulbasaur',
    height: 0.7,
    types: ['grass', 'poison'],
    abilities: ['Chlorophyll', 'Overgrow']
  },
  {
    name: 'Charmander',
    height: 0.6,
    types: ['fire'],
    abilities: ['Blaze', 'Solar-power']
  },
  {
    name: 'Wartortle',
    height: 1.5,
    types: ['water'],
    abilities: ['Rain-dish', 'Torrent']
  },
  {
    name: 'Weedle',
    height: 0.3,
    types: ['bug', 'poison'],
    abilities: ['Shield-dust', 'Run-away']
  }
];
pokemonList.forEach(pokemon => {
  let list = document.createElement("li");
  // declare the variables
  let eachPokemon;
  let pokemonName = pokemon.name;
  let pokemonHeight = pokemon.height;
  let message = 'Wow, thats Big!';
  // conditional statement
  if (pokemonHeight > 1) {
    eachPokemon = document.createTextNode(pokemonName + ' (height:' + pokemonHeight + ')' + ' -' + message);
  } else {
    eachPokemon = document.createTextNode(pokemonName + ' (height:' + pokemonHeight + ')');
  }
  // append text to li ele
  list.appendChild(eachPokemon);
  let element = document.getElementById("names");
  //append li ele to ul element
  element.appendChild(list);
})

/////////////////////////* Task 1.5 part-2 *////////////////////////////
let pokemonRepository = (function() {
  let pokemonList = [{
      name: 'Bulbasaur',
      height: 0.7,
      types: ['grass', 'poison'],
      abilities: ['Chlorophyll', 'Overgrow']
    },
    {
      name: 'Charmander',
      height: 0.6,
      types: ['fire'],
      abilities: ['Blaze', 'Solar-power']
    },
    {
      name: 'Wartortle',
      height: 1.5,
      types: ['water'],
      abilities: ['Rain-dish', 'Torrent']
    },
    {
      name: 'Weedle',
      height: 0.3,
      types: ['bug', 'poison'],
      abilities: ['Shield-dust', 'Run-away']
    }
  ];

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    return pokemonList.push(item);
  }
  return {
    getAll: getAll,
    add: add
  }
})();
//retrieving pokemon list
let newList = pokemonRepository.getAll();
newList.forEach(pokemon => {
  let list = document.createElement("li");
  // declare the variables
  let eachPokemon;
  let pokemonName = pokemon.name;
  let pokemonHeight = pokemon.height;
  let message = 'Wow, thats Big!';
  // conditional statement
  if (pokemonHeight > 1) {
    eachPokemon = document.createTextNode(pokemonName + ' (height:' + pokemonHeight + ')' + ' -' + message);
  } else {
    eachPokemon = document.createTextNode(pokemonName + ' (height:' + pokemonHeight + ')');
  }
  // append text to li ele
  list.appendChild(eachPokemon);
  let element = document.getElementById("names");
  //append li ele to ul element
  element.appendChild(list);
})

/////////////////////////////* Task 1.4 *///////////////////////////////

// for (let i = 0; i < pokemonList.length; i++) {
//   // create li element
//   let list = document.createElement("li");
//   // declare the variables
//   let pokemon;
//   let pokemonName = pokemonList[i].name;
//   let pokemonHeight = pokemonList[i].height;
//   let message = 'Wow, thats Big!';
//   // conditional statement
//   if (pokemonList[i].height > 1) {
//     pokemon = document.createTextNode(pokemonName + ' (height:' + pokemonHeight + ')' + ' -' + message);
//   } else {
//     pokemon = document.createTextNode(pokemonName + ' (height:' + pokemonHeight + ')');
//   }
//   // append text to li ele
//   list.appendChild(pokemon);
//   let element = document.getElementById("new");
//   //append li ele to ul element
//   element.appendChild(list);
// }
