import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/'
// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData)

  if (response.data) {
    // localStorage.setItem('user', JSON.stringify(response.data))
    localStorage.removeItem('user')
  }

  return response.data
}

// Login user
const login = async (userData) => {
  console.log("in login....");
  const response = await axios.post(API_URL + 'authenticate', userData);
  console.log(response);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
