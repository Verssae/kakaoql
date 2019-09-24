import axios from "axios";
const BASE_URL = "https://dapi.kakao.com/v2/local/";
const KEWORD_URL = `${BASE_URL}search/keyword.json`;

export const getPlaces = async ({query, x, y}) => {
  const {data: {documents}} = await axios(KEWORD_URL, {
    params: {
      x,
      y,
      query
    },
    headers: {
      Authorization: "KakaoAK 278e0ba880ef6afdeadfbb3fcefc7e78",
    }
  });
  console.log(documents)
  return documents;
};

  