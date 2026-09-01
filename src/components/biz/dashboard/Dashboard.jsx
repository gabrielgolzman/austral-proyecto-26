import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BooksContainer from "../booksContainer/BooksContainer"
import NewBook from "../newBook/NewBook"
import { Button, Col, Row } from "react-bootstrap";
import { deleteBook } from "./Dashboard.server";
import { AuthenticationContext } from "../../../services/auth/authenticationContext/AuthenticationContext";

const Dashboard = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { onLogout } = useContext(AuthenticationContext);

    const navigate = useNavigate();

    useEffect(() => {
        // Promise
        // isPending
        // resolved 200 204
        // rejected 400, 401, 403, 404, 405, 500
        setIsLoading(true);
        fetch('https://localhost:7120/api/book', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("book-champions-token")}`
            }
        })
            .then((res) => res.json())
            .then(({ result }) => {
                setIsLoading(false);
                setBooks(result.map((res) => ({
                    id: res.id,
                    title: res.title,
                    author: res.authors[0]?.name,
                    rating: res.rating,
                    pageCount: res.pagesAmount,
                    available: res.isAvailable,
                    summary: res.summary,
                    imageUrl: res.imageUrl
                })))
            })
            .catch(() => {
                setIsLoading(false);
            })

    }, [])

    const handleAddBook = (book) => {
        fetch("https://localhost:7120/api/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                title: book.title,
                rating: book.rating,
                pagesAmount: book.pageCount,
                imageUrl: book.imageUrl,
                isAvaliable: book.available
            })
        })
            .then(res => res.json())
            .then(() => {
                setBooks((prevBooks) => [{
                    ...book,
                    id: Math.max(...prevBooks.map(book => book.id)) + 1
                }, ...prevBooks])
            })
            .catch(() => { });

    }

    const handleDeleteBook = (id) => {
        deleteBook(`https://localhost:7120/api/book/${id}`, () => {
            setBooks((prevBooks) =>
                prevBooks.filter(book => book.id !== id))
        })

    }

    const handleLogout = () => {
        onLogout()
        navigate("/login");
    }


    return (
        <>
            <Row className="w-100">
                <Col md={10}></Col>
                <Col>
                    <Button className="mt-2" onClick={handleLogout}>Cerrar sesión</Button>
                </Col>
            </Row>
            <NewBook onAddBook={handleAddBook} />
            <BooksContainer isLoading={isLoading} books={books} onDelete={handleDeleteBook} />
        </>
    )
}

export default Dashboard