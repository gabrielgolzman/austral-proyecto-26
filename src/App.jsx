import BooksContainer from "./components/booksContainer/BooksContainer";
import { BOOKS } from "./data";

const App = () => {


  // JSX
  return (
    <>
      <h1>Book champions</h1>
      <p>Bienvenido a la app</p>
      <BooksContainer books={BOOKS} />
    </>
  )

}

export default App;