import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { initialRegisterErrors, initialRegisterState } from "./Register.data";

const Register = () => {
    const [form, setForm] = useState(initialRegisterState);
    const [errors, setErrors] = useState(initialRegisterErrors)

    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const handleChangeInput = (event, target) => {
        if (errors[target])
            setErrors(prevErrors =>
                ({ ...prevErrors, [target]: false }))
        setForm(prevForm => ({
            ...prevForm,
            [target]: event.target.value
        }))
    }

    const handleRegister = (event) => {
        event.preventDefault();

        if (form.username.length <= 0) {
            usernameRef.current?.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                username: true
            }))
            return;
        }

        if (form.email.length <= 0) {
            emailRef.current?.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                email: true
            }))
            return;
        }
        if (form.password.length <= 0) {
            passwordRef.current?.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                password: true
            }))
            return;
        }

        fetch("https://localhost:7120/api/Authentication/register", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(form)
        })
            .then((res) => res.json())
            .then(() => {
                navigate("/login")
            })
            .catch()

    }

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form onSubmit={handleRegister} >
                    <FormGroup className="mb-4">
                        <Form.Control
                            ref={usernameRef}
                            type="text"
                            className={errors.username ? "border border-danger" : ""}
                            placeholder="Ingresar nombre de usuario"
                            onChange={(event) => handleChangeInput(event, "username")}
                            value={form.username} />
                        {errors.username &&
                            <p className="text-danger">Por favor complete el nombre de usuario</p>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            ref={emailRef}
                            type="email"
                            className={errors.email ? "border border-danger" : ""}
                            placeholder="Ingresar email"
                            onChange={(event) => handleChangeInput(event, "email")}
                            value={form.email} />
                        {errors.email &&
                            <p className="text-danger">Por favor complete el email</p>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            ref={passwordRef}
                            type="password"
                            className={errors.password ? "border border-danger" : ""}
                            placeholder="Ingresar contraseña"
                            onChange={(event) => handleChangeInput(event, "password")}
                            value={form.password} />
                        {errors.password &&
                            <p className="text-danger">Por favor complete la contraseña</p>}
                    </FormGroup>
                    <Row>
                        <Col>
                            <Button onClick={() => navigate("/login")} variant="secondary">
                                Iniciar sesión
                            </Button>
                        </Col>
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default Register;
