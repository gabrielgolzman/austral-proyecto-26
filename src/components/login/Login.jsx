import { useRef, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { initialLoginErrors } from "./Login.data";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState(initialLoginErrors)

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleChangeEmail = (event) => {
        if (errors.email)
            setErrors(prevErrors =>
                ({ ...prevErrors, email: false }))
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        if (errors.password)
            setErrors(prevErrors =>
                ({ ...prevErrors, password: false }))
        setPassword(event.target.value)
    }

    const handleLogin = (event) => {
        event.preventDefault();

        if (email.length <= 0) {
            emailRef.current?.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                email: true
            }))
            return;
        }

        if (password.length <= 0) {
            passwordRef.current?.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                password: true
            }))
            return;
        }

        alert(`El email es: ${email} y el password es: ${password}`)
    }

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form onSubmit={handleLogin} >
                    <FormGroup className="mb-4">
                        <Form.Control
                            ref={emailRef}
                            type="email"
                            className={errors.email ? "border border-danger" : ""}
                            placeholder="Ingresar email"
                            onChange={handleChangeEmail}
                            value={email} />
                        {errors.email &&
                            <p className="text-danger">Por favor complete el email</p>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            ref={passwordRef}
                            type="password"
                            className={errors.password ? "border border-danger" : ""}
                            placeholder="Ingresar contraseña"
                            onChange={handleChangePassword}
                            value={password} />
                        {errors.password &&
                            <p className="text-danger">Por favor complete la contraseña</p>}
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default Login;
