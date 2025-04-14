import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Backend URL

export const detectPhishing = async (url) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/phishing/detect`, { url });
    return response.data;
  } catch (error) {
    console.error("Error detecting phishing:", error);
    return { message: "Error occurred" };
  }
};
