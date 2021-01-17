import React from "react";
import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  const petElements = pets.map(pet => {
    return <Pet pet={pet} onAdoptPet={onAdoptPet}/>
  })
  return <div className="ui cards">{petElements}</div>;
}

export default PetBrowser;
