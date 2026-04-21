import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { initialForm } from "./NewBook.data";

const NewBook = ({ onAddBook }) => {
    const [form, setForm] = useState(initialForm)


    const handleChangeValue = (event, inputKey) => {
        setForm((prevForm) => ({
            ...prevForm,
            [inputKey]: event.target.value
        }))
    }

    const handleChangeAvailable = (event) => {
        setForm((prevForm) => ({
            ...prevForm,
            available: event.target.checked
        }))
    }

    const handleAddBook = (event) => {
        event.preventDefault();
        onAddBook(form)
        setForm(initialForm)
    }

    return (
        <Card className="m-4 w-50" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={handleAddBook}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    value={form.title}
                                    onChange={(event) => handleChangeValue(event, "title")}
                                    type="text"
                                    placeholder="Ingresar título" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="author">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    onChange={(event) => handleChangeValue(event, "author")}
                                    value={form.author} type="text" placeholder="Ingresar autor" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="rating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={form.rating}
                                    onChange={(event) => handleChangeValue(event, "rating")}
                                    placeholder="Ingresar cantidad de estrellas"
                                    max={5}
                                    min={0}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="pageCount">
                                <Form.Label>Cantidad de páginas</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={form.pageCount}
                                    onChange={(event) => handleChangeValue(event, "pageCount")}
                                    placeholder="Ingresar cantidad de páginas"
                                    min={1}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control
                                value={form.imageUrl}
                                onChange={(event) => handleChangeValue(event, "imageUrl")}
                                type="text"
                                placeholder="Ingresar url de imagen" />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col
                            md={3}
                            className="d-flex flex-column justify-content-end align-items-end"
                        >
                            <Form.Check
                                type="switch"
                                checked={form.available}
                                onChange={handleChangeAvailable}
                                id="available"
                                className="mb-3"
                                label="¿Disponible?"
                            />
                            <Button variant="primary" type="submit">
                                Agregar lectura
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default NewBook;
