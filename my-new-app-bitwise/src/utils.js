export const getMoviesBySearchTerm = async (search) => {
  const url = new URL("http://www.omdbapi.com/");
  url.searchParams.append("apikey", "");
  url.searchParams.append("s", search);
  return await fetch(url);
};

export const getMovieDetailsById = async (id) => {
  const url = new URL("http://www.omdbapi.com/");
  url.searchParams.append("apikey", "");
  url.searchParams.append("i", id);
  return await fetch(url);
};

getMoviesBySearchTerm("batman")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

getMovieDetailsById("tt0372784")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
