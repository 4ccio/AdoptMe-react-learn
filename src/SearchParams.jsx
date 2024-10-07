import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
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
      ></SearchFrom>
      <Results pets={pets}></Results>
    </div>
  );
};

export default SearchParams;
