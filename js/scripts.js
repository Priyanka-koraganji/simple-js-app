/////////////// Task 1.7 ///////////////

let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //creating element p to show loading mesg
  let message = document.createElement('p');
  message.innerText = "Data Loading";
  let list = document.querySelector('.pokemon-list');
  list.appendChild(message);

  function showLoadingMessage() {
    message.classList.add('message-show');
  }

  function hideLoadingMessage() {
    message.classList.add('message-hide');
  }
  function getAll() {
    return pokemonList;
  }

  function add(item) {
    return pokemonList.push(item);
  }

  function addListItem(pokemon) {
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    // added event listener
    button.addEventListener('click', () => {
      showDetails(pokemon);
    });
    list.appendChild(listItem);
    listItem.appendChild(button);
    // stylings for each button created
    let allButtons = document.querySelectorAll('button');
    allButtons.forEach(item => {
      item.classList.add('button-style');
    })
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      console.log(pokemon);
    });
  }

  function loadList() {
    showLoadingMessage()
    return fetch(apiUrl).then(function(response) {
      hideLoadingMessage()
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      hideLoadingMessage()
      console.error(e);
    })
  }

  function loadDetails(item) {
    showLoadingMessage()
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      hideLoadingMessage()
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      hideLoadingMessage()
      console.error(e);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  }
})();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});




///////////////////////////////task 1.6///////////////////

// let pokemonRepository = (function() {
//   let pokemonList = [{
//       name: 'Bulbasaur',
//       height: 0.7,
//       types: ['grass', 'poison'],
//       abilities: ['Chlorophyll', 'Overgrow']
//     },
//     {
//       name: 'Charmander',
//       height: 0.6,
//       types: ['fire'],
//       abilities: ['Blaze', 'Solar-power']
//     },
//     {
//       name: 'Wartortle',
//       height: 1.5,
//       types: ['water'],
//       abilities: ['Rain-dish', 'Torrent']
//     },
//     {
//       name: 'Weedle',
//       height: 0.3,
//       types: ['bug', 'poison'],
//       abilities: ['Shield-dust', 'Run-away']
//     }
//   ];
// let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
//   function getAll() {
//     return pokemonList;
//   }
//
//   function add(item) {
//     return pokemonList.push(item);
//   }
//
//   function addListItem(pokemon) {
//     let list = document.querySelector('.pokemon-list');
//     let listItem = document.createElement('li');
//     let button = document.createElement('button');
//     button.innerText = pokemon.name;
//     // added event listener
//     button.addEventListener('click', () => {
//       showDetails(pokemon);
//     });
//     list.appendChild(listItem);
//     listItem.appendChild(button);
//     // stylings for each button created
//     let allButtons = document.querySelectorAll('button');
//     allButtons.forEach(item => {
//       item.classList.add('button-style');
//     })
//   }
//
//   function showDetails(pokemon) {
//     console.log(pokemon.name);
//   }

//   return {
//     getAll: getAll,
//     add: add,
//     addListItem: addListItem,
//     showDetails: showDetails,
//   }
// })();
//
// pokemonRepository.getAll().forEach((pokemon) => {
//   pokemonRepository.addListItem(pokemon);
// })


//////////////////////////* Task 1.5 part-1 */////////////////////////
// let pokemonList = [{
//     name: 'Bulbasaur',
//     height: 0.7,
//     types: ['grass', 'poison'],
//     abilities: ['Chlorophyll', 'Overgrow']
//   },
//   {
//     name: 'Charmander',
//     height: 0.6,
//     types: ['fire'],
//     abilities: ['Blaze', 'Solar-power']
//   },
//   {
//     name: 'Wartortle',
//     height: 1.5,
//     types: ['water'],
//     abilities: ['Rain-dish', 'Torrent']
//   },
//   {
//     name: 'Weedle',
//     height: 0.3,
//     types: ['bug', 'poison'],
//     abilities: ['Shield-dust', 'Run-away']
//   }
// ];
// pokemonList.forEach(pokemon => {
//   let list = document.createElement("li");
//   // declare the variables
//   let eachPokemon;
//   let pokemonName = pokemon.name;
//   let pokemonHeight = pokemon.height;
//   let message = 'Wow, thats Big!';
//   // conditional statement
//   if (pokemonHeight > 1) {
//     eachPokemon = document.createTextNode(pokemonName + ' (height:' + pokemonHeight + ')' + ' -' + message);
//   } else {
//     eachPokemon = document.createTextNode(pokemonName + ' (height:' + pokemonHeight + ')');
//   }
//   // append text to li ele
//   list.appendChild(eachPokemon);
//   let element = document.getElementById("names");
//   //append li ele to ul element
//   element.appendChild(list);
// })
//
// /////////////////////////* Task 1.5 part-2 *////////////////////////////
// let pokemonRepository = (function() {
//   let pokemonList = [{
//       name: 'Bulbasaur',
//       height: 0.7,
//       types: ['grass', 'poison'],
//       abilities: ['Chlorophyll', 'Overgrow']
//     },
//     {
//       name: 'Charmander',
//       height: 0.6,
//       types: ['fire'],
//       abilities: ['Blaze', 'Solar-power']
//     },
//     {
//       name: 'Wartortle',
//       height: 1.5,
//       types: ['water'],
//       abilities: ['Rain-dish', 'Torrent']
//     },
//     {
//       name: 'Weedle',
//       height: 0.3,
//       types: ['bug', 'poison'],
//       abilities: ['Shield-dust', 'Run-away']
//     }
//   ];
//
//   function getAll() {
//     return pokemonList;
//   }
//
//   function add(item) {
//     return pokemonList.push(item);
//   }
//   return {
//     getAll: getAll,
//     add: add
//   }
// })();
// //retrieving pokemon list
// let newList = pokemonRepository.getAll();
// newList.forEach(pokemon => {
//   let list = document.createElement("li");
//   // declare the variables
//   let eachPokemon;
//   let pokemonName = pokemon.name;
//   let pokemonHeight = pokemon.height;
//   let message = 'Wow, thats Big!';
//   // conditional statement
//   if (pokemonHeight > 1) {
//     eachPokemon = document.createTextNode(pokemonName + ' (height:' + pokemonHeight + ')' + ' -' + message);
//   } else {
//     eachPokemon = document.createTextNode(pokemonName + ' (height:' + pokemonHeight + ')');
//   }
//   // append text to li ele
//   list.appendChild(eachPokemon);
//   let element = document.getElementById("names");
//   //append li ele to ul element
//   element.appendChild(list);
// })
//
// //adding pokemon to newList
// let newPokemon ={
//   name:'Pidgeot',
//   height:1.5,
//   types: ['flying', 'normal'],
//   abilities: ['Keen-eye', 'Tangled-feet', 'Big-pecks']
// }
// let features = Object.keys(newList[1]);
// let newPokemonFeatures = Object.keys(newPokemon);
// if(typeof(newPokemon) == typeof(newList[1]) && (JSON.stringify(features) === JSON.stringify(newPokemonFeatures))){
//   pokemonRepository.add(newPokemon);
//   console.log(pokemonRepository.getAll());
// }else{
//   console.log("try again");
// }

////////////////* filter function *///////////////

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
