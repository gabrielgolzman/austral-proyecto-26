import { useState } from "react";
import BooksContainer from "../booksContainer/BooksContainer"
import NewBook from "../newBook/NewBook"
import { BOOKS } from "../../../data";
import { Button, Col, Row } from "react-bootstrap";

const Dashboard = () => {
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
    return (
        <>
            <Row className="w-100">
                <Col md={10}></Col>
                <Col>
                    <Button className="mt-2">Cerrar sesión</Button>
                </Col>
            </Row>
            <NewBook onAddBook={handleAddBook} />
            <BooksContainer books={books} onDelete={handleDeleteBook} />
        </>
    )
}

export default Dashboard