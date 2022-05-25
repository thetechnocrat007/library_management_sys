import { useDispatch } from 'react-redux'
import { deleteBook, updateBook } from '../features/books/bookSlice'

import { Link, useNavigate } from 'react-router-dom'
// import BookUpdateForm from '../components/BookUpdateForm'

function BookItem({ book }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const bookCopy = { ...book };

  
  return (
    <div className='book'>
      <div>{book.title}</div>
      <h2>{book.author}</h2>
      <h3>{book.created_on}</h3>
      {/* <button type="button" class="btn btn-primary" onClick={navigate('updatebook', { id: book.id, title: book.title, author: book.author })}>
        Update22
      </button> */}
      <div className=''>
       
        {/* <Link className='btn btn-block' to='/updatebook/${book.id}'>Update99</Link> */}
          
       
      </div>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookUpdateModal">
        Update
      </button>

      <button onClick={() => dispatch(deleteBook(book.id))} className='close'>
        X
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="bookUpdateModal" tabindex="-1" aria-labelledby="bookUpdateModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bookUpdateModalLabel">Book Update Form</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* <BookUpdateForm book={bookCopy} /> */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>






    </div>


  )
}

export default BookItem
