import { Button } from "react-bootstrap";
import { useNavigate } from "react-router"

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoBackDashboard = () => {
        navigate("/library")
    }

    return (
        <div className="text-center mt-3">
            <h2>¡Ups! La página solicitada no existe</h2>
            <Button className="text-center" onClick={handleGoBackDashboard}>
                Volver al menú principal
            </Button>
        </div>
    )
}

export default NotFound