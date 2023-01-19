const API_KEY = "1e741056fa8a37a631c22f63e6cb49ba";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflix: `/discover/tv?api_key=${API_KEY}&with_network=213`,
};

export default request;
