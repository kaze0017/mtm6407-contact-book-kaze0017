async function initialDb() {
  const apiUrl = `https://randomuser.me/api/?results=20`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  localStorage.setItem("aniContacts", JSON.stringify(data.results));
  return data.results;
}

export default initialDb;
