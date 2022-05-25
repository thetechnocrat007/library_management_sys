import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBook } from '../features/books/bookSlice'

function BookForm() {
  // const [title, setTitle] = useState('')

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publication:'',
    category:''
});

const { title, author,publication,category } = formData;


  const dispatch = useDispatch()


  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createBook({ ...formData }))
    // setTitle('')
    setFormData({
      title: '',
      author: '',
      publication:'',
      category:''

  })
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Book</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Author</label>
          <input
            type='text'
            name='author'
            id='author'
            value={author}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>publication</label>
          <input
            type='text'
            name='publication'
            id='publication'
            value={publication}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>category</label>
          <input
            type='text'
            name='category'
            id='category'
            value={category}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='black btn btn-block' type='submit' data-bs-dismiss="modal">
            Add Book
          </button>
        </div>
      </form>
    </section>
  )
}

export default BookForm
