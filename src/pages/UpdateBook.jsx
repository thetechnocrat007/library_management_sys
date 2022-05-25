import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate , useParams} from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { updateBook, reset } from '../features/books/bookSlice'
import Spinner from '../components/Spinner'

function UpdateBook() {

const oldId=useParams()

const { books, isLoading, isError,isSuccess, message } = useSelector(
  (state) => state.books
)
console.log(books)

const oldBook = books.filter(
  (book) => book.id !== oldId
)




  const [formData, setFormData] = useState({
   
    title: oldBook.title,
    author: oldBook.author,
    publication:oldBook.publication,
    category:oldBook.category
  })

  const { id,title, author,publication,category} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // if (isSuccess) {
    //   toast.error("Updated Successfully...")
    //   navigate('/')
    // }

    dispatch(reset())
  }, [books, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    
      const userData = {
        
        title,
        author,
        publication,
        category
      }
      console.log("dispaching update...")
      console.log(userData.id)
      console.log(userData)

      dispatch(updateBook(oldId,userData))
    
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          Update
        </h1>
        <p>Please enter info</p>
      </section>

      <section className='form black'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
          <label htmlFor='text'>Title</label>
            <input
              type='text'
              className='form-control'
              id='title'
              name='title'
              value={title}
              
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='text'>Author</label>
            <input
              type='text'
              className='form-control'
              id='author'
              name='author'
              value={author}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='text'>Publication</label>
          <input
            type='text'
            name='publication'
            id='publication'
            value={publication}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Category</label>
          <input
            type='text'
            name='category'
            id='category'
            value={category}
            onChange={onChange}
          />
        </div>
         
          <div className='form-group'>
            <button type='submit' className='black btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default UpdateBook
