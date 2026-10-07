import { useState } from 'react';

function Bookshelf() {
    const [books, setBooks] = useState([
        {title:'The Choice', author:'Ahmed Deedat'},
        {title:'Tao of Jeet Kune Do', author:'Bruce Lee'}
    ])
    const [newBook, setNewBook] = useState({title: '', author: ''})

    function handleInputChange(event){
        setNewBook({...newBook,[event.target.name]:event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()

        setBooks([...books,newBook])
        setNewBook({title: '', author: ''})
    }

  return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titleInput">Title:</label>
                <input 
                name='title' 
                value={newBook.title} 
                onChange={handleInputChange} 
                id='titleInput' 
                type="text" 
                />

                <label htmlFor="authorInput">Author:</label>
                <input 
                name='author' 
                value={newBook.author} 
                onChange={handleInputChange} 
                id='authorInput' 
                type="text" 
                />

                <br />
                <button>Add Book</button>
            </form>
        </div>

        <div className="bookCardsDiv">
            {books.map((oneBook)=>
                <div className='bookCard'>
                <p>Title: {oneBook.title} <br /> Author:{oneBook.author}</p>
                </div>
            )}
        </div>
    </div>

  )
}

export default Bookshelf