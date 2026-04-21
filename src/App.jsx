import { useState } from "react";
import BooksContainer from "./components/booksContainer/BooksContainer";
import NewBook from "./components/newBook/NewBook"
import { BOOKS } from "./data";

const App = () => {
  const [books, setBooks] = useState(BOOKS);

  const handleAddBook = (book) => {
    setBooks((prevBooks) => [{
      ...book,
      id: Math.max(...prevBooks.map(book => book.id)) + 1
    }, ...prevBooks])
  }

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) =>
      prevBooks.filter(book => book.id !== id))
  }

  // JSX
  return (
    <>
      <h1>Book champions</h1>
      <p>Bienvenido a la app</p>
      <div className="d-flex align-items-center flex-column">
        <NewBook onAddBook={handleAddBook} />
        <BooksContainer books={books} />
      </div>
    </>
  )

}

export default App;