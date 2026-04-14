import BooksContainer from "./components/booksContainer/BooksContainer";
import NewBook from "./components/newBook/NewBook"
import { BOOKS } from "./data";

const App = () => {


  // JSX
  return (
    <>
      <h1>Book champions</h1>
      <p>Bienvenido a la app</p>
      <div className="d-flex align-items-center flex-column">
        <NewBook />
        <BooksContainer books={BOOKS} />
      </div>
    </>
  )

}

export default App;