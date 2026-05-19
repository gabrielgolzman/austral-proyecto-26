import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = ({
    modalTitle = "Título modal",
    modalDescription = "Descripción del modal",
    show,
    onClose,
    onDelete
}) => {

    return (
        <>
            <Modal
                show={show}
                onHide={onClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalDescription}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={onDelete}>Eliminar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default DeleteModal