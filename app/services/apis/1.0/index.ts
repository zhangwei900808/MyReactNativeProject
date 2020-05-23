import { apiRequest } from "../../../utils/request";

class Apis {
  getMovies = params => apiRequest.fetchData("https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json", params);
}

export default new Apis();
