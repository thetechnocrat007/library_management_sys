import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import bookService from './bookService'

const initialState = {
  books: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new book
export const createBook = createAsyncThunk(
  'books/create',
  async (bookData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access
      console.log(token)
      return await bookService.createBook(bookData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user books
export const getBooks = createAsyncThunk(
  'books/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access
      return await bookService.getBooks(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)






// Create new book
export const updateBook = createAsyncThunk(
  'books/update',
  async (id,bookData, thunkAPI) => {
    try {
      console.log("innn update")
      const token = thunkAPI.getState().auth.user.access
      console.log(token)
      return await bookService.updateBook(id,bookData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)







// // Update new book
// export const updateBook = createAsyncThunk(
//   'books/update',
//   async (id,bookData, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.access
//       console.log(token)
//       console.log("inside update")
//       // const token = thunkAPI.getState().auth.user.access
//       console.log(token)
//       // return await bookService.updateBook(id,bookData, token)

//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )




// Delete user book
export const deleteBook = createAsyncThunk(
  'books/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access
      return await bookService.deleteBook(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBook.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.books.push(action.payload)
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.books = action.payload
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })


      .addCase(updateBook.pending, (state) => {
        console.log("inside update case1")
        state.isLoading = true
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        console.log("inside update case2")
        state.isLoading = false
        state.isSuccess = true
        state.books.map((book)=>{
          if(book.id==action.payload.id){
            book.title=action.payload.title;
            book.author=action.payload.author;
          }
        })
      })
      .addCase(updateBook.rejected, (state, action) => {
        console.log("inside update case3")
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        console.log(state.message)
      })



      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        console.log(",..addcase delete")
        console.log(action.payload.id)
        state.books = state.books.filter(
          (book) => book.id !== action.payload.id
        )
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = bookSlice.actions
export default bookSlice.reducer
