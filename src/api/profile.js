import axios from "./axios";

export const pictureRequest = picture => axios.put("/picture", picture)

export const profileRequest = dataUser => axios.patch("/updateProfile", dataUser)

