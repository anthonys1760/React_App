import React from 'react'
import { render } from 'react-dom'

let bookList = [
  {"title": "Anthony is the best","author": "Anthony Smith", "pages": 260},
  {"title": "Jim is the best","author": "Anthony Smith", "pages": 260},
  {"title": "Lucy is the best","author": "Anthony Smith", "pages": 260},
]

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} page</p>
    </section>
  )
}

const Library = ({books}) => {
  return (
    <div>
      {books.map(
        (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages}/>
      )}
    </div>
  )
}

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)
