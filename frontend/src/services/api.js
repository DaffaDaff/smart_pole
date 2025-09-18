
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/";

export const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("API GET error:", error);
    throw error;
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("API DELETE error:", error);
    throw error;
  }
};

export const getEntries = () =>
    getData('get_entries');

export  const getEntry = (id) =>
    getData(`get_entry/${id}`);

export  const deleteEntry = (id) =>
    deleteData(`delete/${id}`);