const API = "https://rickandmortyapi.com/api/character/";

export const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return id ? data : data.results;
  } catch (error) {
    console.log("[Fetch Error]:", error.message);
  }
};
