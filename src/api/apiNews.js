import axios from "axios";

const BASE_URL = "https://api.currentsapi.services/v1/";
const API_KEY = "8XVmoIwbWRsBBlW4FHUP7CSDa4lofBFDWAJM3QhcEx8IhOOP";

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе новостей:", error);
  }
};
