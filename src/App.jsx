import BookItem from "./components/bookItem/BookItem";
import { BOOKS } from "./data";

const App = () => {
  const booksMapped = BOOKS.map(book => <BookItem
    key={book.id}
    title={book.title}
    author={book.author}
    rating={book.rating}
    pageCount={book.pageCount}
    imageUrl={book.imageUrl}
  />)

  // JSX
  return (
    <>
      <h1>Book champions</h1>
      <p>Bienvenido a la app</p>
      {booksMapped}
    </>
  )

}

export default App;