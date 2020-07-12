import React from 'react'
import { render } from 'react-dom'

let bookList = [
  {"title": "Anthony is the best","author": "Anthony Smith", "pages": 260},
  {"title": "Jim is the best","author": "Anthony Smith", "pages": 260},
  {"title": "Lucy is the best","author": "Anthony Smith", "pages": 260},
]

const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} page</p>
      <p>Free Bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
    </section>
  )
}

const Hiring = () => 
<div>
    <p>The library is hiring, Go to www.www.com</p>
</div>

const NotHiring = () => 
<div>
    <p>The Library is not hiring. Check back later for more info</p>
</div>

class Library extends React.Component {
  state = { 
      open: true,
      freeBookmark: true,
      hiring: false
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render() {
    console.log(this.state)
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookmark={this.state.freeBookmark} />
        )}
      </div>
    )
  }
}

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)
