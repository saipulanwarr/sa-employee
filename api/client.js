import { getFromAsyncStorage, Keys } from "@/utils/asyncStorage";
import axios from "axios";

const client = axios.create({
  baseURL: "",
});

const baseURL = "";

export const getClient = async (headers) => {
  const token = await getFromAsyncStorage(Keys.AUTH_TOKEN);

  if (!token) return axios.create({ baseURL });

  const defaultHeaders = {
    Authorization: token,
    ...headers,
  };

  return axios.create({ baseURL, headers: defaultHeaders });
};

export default client;
