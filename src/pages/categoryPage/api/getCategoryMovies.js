import axios from "axios";

export const getCategoryMovies = async (id, page, sort) => {
  return await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=1d0ea5d5d24661b778cb30d70fd8d7ea&sort_by=${sort}&with_genres=${id}&page=${page}&vote_count.gte=100`
  );
};
