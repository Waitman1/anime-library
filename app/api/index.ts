import axios from "axios";

export const IMG_HOST = "https://static-libria.weekstorm.one/";

export const $api = axios.create({
  baseURL: "https://api.anilibria.tv/v3/",
});
