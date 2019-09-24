import { getPlacesByCategory, getPlacesByKeword } from "./db";

const resolvers = {
  Query: {
    keword: (_, { request }) => getPlacesByKeword(request),
    category: (_, {request}) => getPlacesByCategory(request)
  }
};

export default resolvers;  