import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import useBreedList from "./useBreedList";
import fetSearch from "./fecthSearch";
import Results from "./Results";
import SearchFrom from "./SearchForm";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <SearchFrom
        animals={ANIMALS}
        animal={animal}
        setAnimal={setAnimal}
        breeds={breeds}
        setRequestParams={setRequestParams}
        adoptedPet={adoptedPet}
      ></SearchFrom>
      <Results pets={pets}></Results>
    </div>
  );
};

export default SearchParams;
