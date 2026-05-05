import { useState } from "react";
import BookItem from "../bookItem/BookItem";
import BookSearch from "../bookSearch/BookSearch";

const BooksContainer = ({ books }) => {
    const [selectedBookTitle, setSelectedBookTilte] = useState("");
    const [bookSearch, setBookSearch] = useState("")

    const handleSelectBook = (title) => {
        setSelectedBookTilte(title)
    }

    const handleBookSearch = (searchValue) => {
        setBookSearch(searchValue)
    }

    const booksMapped = books
        .filter(book => book.title.toUpperCase().includes(bookSearch.toUpperCase()))
        .map(book => <BookItem
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
            <BookSearch
                onSearchBook={handleBookSearch}
                bookSearch={bookSearch} />

            {selectedBookTitle &&
                <p>Usted ha seleccionado el libro: <b>{selectedBookTitle}</b></p>
            }
            <div className="d-flex justify-content-center flex-wrap">
                {booksMapped.length > 0 ?
                    booksMapped :
                    <p>No se encontraron libros.</p>}
            </div>
        </>
    );

}

export default BooksContainer