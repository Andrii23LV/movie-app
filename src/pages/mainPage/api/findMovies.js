import axios from "axios";

export const findMovies = async (data) => {
  return await axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "1d0ea5d5d24661b778cb30d70fd8d7ea",
      query: data,
    },
  });
};
