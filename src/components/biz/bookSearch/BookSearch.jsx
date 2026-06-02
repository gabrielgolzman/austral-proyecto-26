import { Form } from "react-bootstrap"

const BookSearch = ({ bookSearch, onSearchBook }) => {

    const handleSearchChange = (event) => {
        onSearchBook(event.target.value)
    }

    return (
        <Form.Group className="mb-3" controlId="searchBook">
            <Form.Control
                type="text"
                placeholder="Buscar libros..."
                onChange={handleSearchChange}
                value={bookSearch} />
        </Form.Group>
    )
}

export default BookSearch