import { getPlaces, } from "./db";

const resolvers = {
  Query: {
    places: (_, { request }) => getPlaces(request)
    
  }
};

export default resolvers;  