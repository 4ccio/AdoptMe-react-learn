export default function SearchFrom({
  animals,
  animal,
  setAnimal,
  breeds,
  setRequestParams,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get("animal") ?? "",
          breed: formData.get("breed") ?? "",
          location: formData.get("location") ?? "",
        };
        setRequestParams(obj);
      }}
    >
      <label htmlFor="location">
        Location
        <input id="location" name="location" placeholder="Location" />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option />
          {animals.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="breed">
        Breed
        <select disabled={!breeds.length} id="breed" name="breed">
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
}
