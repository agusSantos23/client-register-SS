import axios from "./axios";

export const pictureRequest = picture => axios.post("/picture", picture)