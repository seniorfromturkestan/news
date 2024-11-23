import { axiosInstance } from "./axiosInstance";

export const getNews = async () => {
  const response = await axiosInstance.get(`latest-news`);

  return response;
};
