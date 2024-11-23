import { axiosInstance } from "./axiosInstance";

export const getNews = async () => {
  const response = await axiosInstance.get(`latest-news`);

  return response;
};

export const getNewsById = async (newsId) => {
  const response = await axiosInstance.get(`latest-news/${newsId}`);

  return response;
};

export const createNews = async (newsBody) => {
  const response = await axiosInstance.post(`news`, newsBody);

  return response;
}

