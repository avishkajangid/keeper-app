import axios from "axios";

const URL = "https://keeper-app-ten-umber.vercel.app";

export const addNote = async (note) => {
  try {
    return await axios.post(`${URL}`, note);
  } catch (error) {
    console.log("Error while calling add Note API", error);
  }
};

export const getNotes = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("Error while calling get Note API", error);
  }
}

export const deleteNote = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling delete Note API", error);
  }
}
