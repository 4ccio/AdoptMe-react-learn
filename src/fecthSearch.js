export default async function fetSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!apiRes.ok) {
    throw new Error(`pet search not ok ${animal} ${breed} ${location}`);
  }

  return apiRes.json();
}
