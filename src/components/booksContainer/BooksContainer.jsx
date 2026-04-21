import { useState } from "react";
import BookItem from "../bookItem/BookItem";

const BooksContainer = ({ books }) => {
    const [selectedBookTitle, setSelectedBookTilte] = useState("");

    if (!books.length)
        return <p>No se encontraron libros.</p>

    const handleSelectBook = (title) => {
        setSelectedBookTilte(title)
    }

    const booksMapped = books.map(book => <BookItem
        key={book.id}
        title={book.title}
        author={book.author}
        rating={book.rating}
        pageCount={book.pageCount}
        available={book.available}
        imageUrl={book.imageUrl}
        onSelectBook={handleSelectBook}
    />)

    return (
        <>
            {selectedBookTitle &&
                <p>Usted ha seleccionado el libro: <b>{selectedBookTitle}</b></p>
            }
            <div className="d-flex justify-content-center flex-wrap">
                {booksMapped}
            </div>
        </>
    );

}

export default BooksContainer