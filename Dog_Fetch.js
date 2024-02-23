// Fetch a list of dog breeds
function fetchDogBreeds() {
    fetch('https://dogapi.dog/api/v2/breeds')
    // verify response is successful, if not throw an error
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        //parse the JSON from the response
        return response.json();
      })
      //log the list of dog breeds
      .then(data => {
        displayBreeds(data.breeds); 
      })
      //error catch
      .catch(error => {
        console.error('There is a problem with your fetch operation', error);
      });
  }
  
  // Function to display the detailed info of the breed
  function displayBreeds(breeds) {
    //get the html element to display
    const breedsList = document.getElementById('breedsList'); 
    breeds.forEach(breed => {
        //create a new list itme for each breed
      const listItem = document.createElement('li');
      //set the text content to breed name 
      listItem.textContent = breed.name;
      //add click to fectch and display
      listItem.addEventListener('click', () => fetchBreedDetails(breed.id));
      //add the list to the list
      breedsList.appendChild(listItem); 
    });
  }
  
  // Fetch the details for a specific breed
  function fetchBreedDetails(breedId) {
    fetch(`https://dogapi.dog/api/v2/breeds/${breedId}`)
    //parse the response
      .then(response => response.json())
      .then(data => {
        //display detailed info about the breed
        displayBreedDetails(data.breed); 
      })
      .catch(error => {
        //log any fetch errors
        console.error('Error fetching breed details:', error);
      });
  }
  
  // Display the detailed info of the breed
  function displayBreedDetails(breed) {
    //container for the brred details
    const detailsContainer = document.getElementById('breedDetails'); 
    //set the inner HTML of the container with the breed info
    detailsContainer.innerHTML = `
      <h2>${breed.name}</h2>
      <p>Description: ${breed.description}</p>
    `;
  }
  
  function fetchDogFacts() {
    fetch('https://someapi.com/facts')
      .then(response => response.json())
      .then(facts => {
        // Display facts on the webpage
      })
      .catch(error => console.error(error));
  }
  
  function fetchDogGroups() {
    fetch('https://someapi.com/groups')
      .then(response => response.json())
      .then(groups => {
        // Display groups information on the webpage
      })
      .catch(error => console.error(error));
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    fetchDogBreeds();
  }); 
  