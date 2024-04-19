import axios from 'axios';

const API_URL = 'http://localhost:1337';

// Fetch a list of all employees
export const getAllEmployees = async () => {
  const response = await axios.get(`${API_URL}/api/employees`);
  return response.data;
};

