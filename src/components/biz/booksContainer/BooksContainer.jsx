import { useState } from "react";
import BookItem from "../bookItem/BookItem";
import BookSearch from "../bookSearch/BookSearch";
import DeleteModal from "../../shared/deleteModal/DeleteModal";
import { initialBookToDelete } from "./BooksContainer.data";

const BooksContainer = ({ books, onDelete }) => {
    const [selectedBookTitle, setSelectedBookTilte] = useState("");
    const [bookToDelete, setBookToDelete] = useState(initialBookToDelete)
    const [bookSearch, setBookSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSelectBook = (title) => {
        setSelectedBookTilte(title)
    }

    const handleBookSearch = (searchValue) => {
        setBookSearch(searchValue)
    }

    const handleDeleteBook = (id, title) => {
        setShowModal(true);
        setBookToDelete({
            id,
            title
        })
    }

    const handleHideModal = () => {
        setShowModal(false);
        setBookToDelete(initialBookToDelete)
    }

    const handleFinalDeleteBook = () => {
        if (bookToDelete.id <= 0)
            return;

        onDelete(bookToDelete.id)
        setShowModal(false)
    }

    const booksMapped = books
        .filter(book => book.title.toUpperCase().includes(bookSearch.toUpperCase()))
        .map(book => <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            available={book.available}
            imageUrl={book.imageUrl}
            onSelectBook={handleSelectBook}
            onDelete={handleDeleteBook}
        />)

    return (
        <>
            <DeleteModal
                modalTitle="Eliminar libro"
                modalDescription={`¿Está seguro que desea eliminar el libro ${bookToDelete.title}?`}
                show={showModal}
                onClose={handleHideModal}
                onDelete={handleFinalDeleteBook} />
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