import axios from "axios";

export const rateMovie = async (movieId, guestSessionId, rating) => {
  return await axios.post(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=1d0ea5d5d24661b778cb30d70fd8d7ea&guest_session_id=${guestSessionId}`,
    {
      value: rating,
    }
  );
};
