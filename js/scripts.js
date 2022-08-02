/////////////// Task 1.10 ///////////////
let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //creating element p to show loading img
  let image = document.createElement('img');
  image.src = 'img/loading.jpeg';
  image.setAttribute('width', '80px');
  image.setAttribute('height', '80px');
  let list = document.querySelector('.pokemon-list');
  list.appendChild(image);

  function showLoadingMessage() {
    image.classList.add('message-show');
  }

  function hideLoadingMessage() {
    image.classList.add('message-hide');
  }

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    return pokemonList.push(item);
  }

  function addListItem(pokemon) {
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li'); //creating li ele
    listItem.classList.add('list-item', 'list-group-item', 'col');
    let button = document.createElement('button'); //creating button ele
    button.innerText = pokemon.name;
    button.classList.add(
      'list-button',
      'btn',
      'btn-warning',
      'list-group-item-action'
    );
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModalCenter');
    // added event listener
    button.addEventListener('click', () => {
      showDetails(pokemon);
    });
    list.appendChild(listItem); //appending li
    listItem.appendChild(button); //appending button to li
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      let name = pokemon.name;
      let height = pokemon.height;
      let img = pokemon.imageUrl;
      let types = pokemon.types;
      let modalContainer = document.querySelector('.modal-container');
      showModal(name, height, img, types); // calling modal func

      // creating modal
      function showModal(name, height, img, types) {
        modalContainer.innerHTML = '';
        //modal-dialog
        let modalDialog = document.createElement('div');
        modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');
        modalDialog.setAttribute('role', 'document');
        //modal-content
        let modalContent = document.createElement('div');
        modalContent.classList.add('modal-content', 'modal');
        //modal-header
        let modalHeader = document.createElement('div');
        modalHeader.classList.add('modal-header');
        //header-title
        let modalTitle = document.createElement('h5');
        modalTitle.innerText = name;
        modalTitle.classList.add('modal-title');
        modalTitle.setAttribute('id', 'exampleModalCenterTitle');
        modalHeader.appendChild(modalTitle);
        //header-button
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('close');
        closeButtonElement.innerText = 'close';
        closeButtonElement.setAttribute('data-dismiss', 'modal');
        closeButtonElement.setAttribute('aria-label', 'close');
        closeButtonElement.addEventListener('click', () => {
          hideModal();
        });
        modalHeader.appendChild(closeButtonElement);

        //modal-body
        let modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');

        let contentElement = document.createElement('p');
        contentElement.innerText = 'Height : ' + height;
        modalBody.appendChild(contentElement);

        let contentElementTypes = document.createElement('p');
        contentElementTypes.innerText =
          'Types: ' + types[0].type.name + ', ' + types[1].type.name;
        modalBody.appendChild(contentElementTypes);

        let imageElement = document.createElement('img');
        imageElement.src = img;
        imageElement.classList.add('pokemon-image');
        modalBody.appendChild(imageElement);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalDialog.appendChild(modalContent);
        modalContainer.appendChild(modalDialog);

        modalContainer.classList.add('is-visible');
      }

      function hideModal() {
        modalContainer.classList.remove('is-visible');
      }

      window.addEventListener('keydown', e => {
        if (
          e.key === 'Escape' &&
          modalContainer.classList.contains('is-visible')
        ) {
          hideModal();
        }
      });
      modalContainer.addEventListener('click', e => {
        let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });
    });
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function(response) {
        hideLoadingMessage();
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        hideLoadingMessage();
        /* eslint-disable no-console */
        console.error('Error when validating item', e);
        /* eslint-enable no-console */
      });
  }

  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        hideLoadingMessage();
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function(e) {
        hideLoadingMessage();
        /* eslint-disable no-console */
        console.error('Error when validating item ', e);
        /* eslint-enable no-console */
      });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
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
