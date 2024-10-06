import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import SearchFrom from "./SearchForm";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <SearchFrom
        animals={ANIMALS}
        location={location}
        setLocation={setLocation}
        animal={animal}
        setAnimal={setAnimal}
        breed={breed}
        setBreed={setBreed}
        breeds={breeds}
        requestPets={requestPets}
      ></SearchFrom>
      <Results pets={pets}></Results>
    </div>
  );
};

export default SearchParams;
