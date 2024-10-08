export default async function fetchBreedList({ queryKey }) {
  const [, animal] = queryKey;
  if (!animal) return [];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`/breeds/${animal} fetch not ok`);
  }

  return apiRes.json();
}
