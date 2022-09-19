import axios from "axios";

export const getCategories = async () => {
  return await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=1d0ea5d5d24661b778cb30d70fd8d7ea"
  );
};
