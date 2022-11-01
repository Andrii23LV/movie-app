import axios from "axios";

export const getActorMovies = async (person_id, page) => {
  return await axios.get(
    `https://api.themoviedb.org/3/discover/movie?with_cast=${person_id}&sort_by=vote_average.desc&vote_count.gte=100&page=${page}`,
    {
      params: {
        api_key: "1d0ea5d5d24661b778cb30d70fd8d7ea",
      },
    }
  );
};
