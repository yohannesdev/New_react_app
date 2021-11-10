const API_KEY = "key";
export const getMovie = async (searchTerm) => {
  try {
    const url = `http://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
