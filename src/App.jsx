import { useState } from "react";
import BooksContainer from "./components/booksContainer/BooksContainer";
import NewBook from "./components/newBook/NewBook"
import { BOOKS } from "./data";
import Login from "./components/login/Login";

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
      <div className="d-flex align-items-center flex-column">
        {/* <Login /> */}
        <NewBook onAddBook={handleAddBook} />
        <BooksContainer books={books} />
      </div>
    </>
  )

}

export default App;