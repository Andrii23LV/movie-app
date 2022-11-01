import axios from "axios";

export const getActorDetails = async (person_id) => {
  return await axios.get(
    `https://api.themoviedb.org/3/person/${person_id}?api_key=1d0ea5d5d24661b778cb30d70fd8d7ea`
  );
};
