import axios from 'axios';
const BASE_URL = 'https://dapi.kakao.com/v2/local/';
const KEWORD_URL = `${BASE_URL}search/keyword.json`;
const CATEGORY_URL = `${BASE_URL}search/category.json`;
export const getPlacesByKeword = async ({ query, x, y, sort }) => {
	const { data: { documents } } = await axios(KEWORD_URL, {
		params: {
			x,
			y,
			query,
			sort
		},
		headers: {
			Authorization: 'KakaoAK 278e0ba880ef6afdeadfbb3fcefc7e78'
		}
	});
	console.log(documents);
	return documents;
};
export const getPlacesByCategory = async ({ category_group_code, x, y, sort }) => {
	const { data: { documents } } = await axios(CATEGORY_URL, {
		params: {
			x,
			y,
			category_group_code,
			sort
		},
		headers: {
			Authorization: 'KakaoAK 278e0ba880ef6afdeadfbb3fcefc7e78'
		}
	});
	console.log(documents);
	return documents;
};
