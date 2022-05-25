import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/books/'

// Create new book
const createBook = async (bookData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, bookData, config)

  return response.data
}

// Get user books
const getBooks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}


// Update new book
const updateBook = async (bookId,bookData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log("in222")
  console.log(bookId)
  const response = await axios.put(API_URL + bookId, bookData, config)
console.log(response.data)
  return response.data
}



// Delete user book
const deleteBook = async (bookId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + bookId, config)

  console.log("Delete REssss:")
  console.log(response.data.id)
  console.log(bookId)
  return response.data
}

const bookService = {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
}

export default bookService
