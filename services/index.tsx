import Axios from "axios";

export const SearchMovie = async (value) => {
  const forMattedValue = value.replaceAll(" ", "_");
  const response = await Axios({
    method: "GET",
    url: `https://sg.media-imdb.com/suggests/h/${forMattedValue}.json`,
  });
  const dataString = await response.data;
  const jsonString = dataString.substring(
    dataString.indexOf("{"),
    dataString.lastIndexOf("}") + 1
  );
  return JSON.parse(jsonString);
};

// export const SearchMovie = async (value) => {
//   const options = {
//     method: "GET",
//     url: process.env.SERVICE_URL,
//     params: { q: "" },
//     headers: {
//       "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
//       "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
//     },
//   };
//   options.params = { q: value.length > 0 ? value : "avengers" };
//   const response = await Axios(options);
//   const data = await response.data;
//   return data;
// };
