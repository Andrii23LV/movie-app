import axios from "axios";

export const getCollection = async (id) => {
  return await axios.get(`https://api.themoviedb.org/3/collection/${id}`, {
    params: {
      api_key: "1d0ea5d5d24661b778cb30d70fd8d7ea",
    },
  });
};
