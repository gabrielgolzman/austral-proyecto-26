import BookItem from "../bookItem/BookItem";

const BooksContainer = ({ books }) => {
    const booksMapped = books.map(book => <BookItem
        key={book.id}
        title={book.title}
        author={book.author}
        rating={book.rating}
        pageCount={book.pageCount}
        available={book.available}
        imageUrl={book.imageUrl}
    />)

    return (
        <>
            <p>Usted ha seleccionado el libro: <b></b></p>
            <div className="d-flex justify-content-center flex-wrap">
                {booksMapped}
            </div>
        </>
    );

}

export default BooksContainer