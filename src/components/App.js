import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch("http://localhost:3001/pets")
    .then(r => r.json())
    .then(data => setPets(data))
  }, [])

  function handleFilter(selectedFilter) {
    setFilters({type: selectedFilter})
    
  }

  function handleFindPetsClick() {
    let url = "http://localhost:3001/pets";

    if (filters.type !== "all") {
      url += `?type=${filters.type}`;
    }

    fetch(url)
      .then((r) => r.json())
      .then((petsArray) => {
        setPets(petsArray);
      });
  }

  function handleAdoptPet(id) {
    // grab pet.id from Pet Component
    // map over pets to find pet with corresponding id
    //  update pet.isAdopted==true
    // add this pet to the pets array
    const updatedPets = pets.map(pet => {
      console.log(pet)
      if (pet.id === id) {
        pet.isAdopted = true
        return pet
      } else return pet
    })
    //  update pet.isAdopted==true
    // add this pet to the pets array
    console.log(updatedPets)
    setPets(updatedPets) 
    

  }



  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleFilter} onFindPetsClick = {handleFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets = {pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
