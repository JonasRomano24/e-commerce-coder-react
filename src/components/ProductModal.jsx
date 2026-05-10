import Modal from "react-bootstrap/Modal";

function ProductModal({ show, handleClose, producto }) {

    if (!producto) return null;

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">

            <Modal.Header closeButton>
                <Modal.Title>{producto.titulo}</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="row">

                    <div className="col-md-6 text-center">
                        <img
                            src={producto.imagen}
                            alt={producto.titulo}
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-md-6">

                        <h2 className="mb-3">
                            ${producto.precio}
                        </h2>

                        <p>
                            {producto.descripcion}
                        </p>

                        <p>
                            <strong>Existencias:</strong> {producto.stock}
                        </p>

                        <p>
                            <strong>Calificación:</strong> ⭐ {producto.rating}
                        </p>

                        <p>
                            <strong>Marca:</strong> {producto.marca}
                        </p>

                    </div>

                </div>

            </Modal.Body>

        </Modal>
    );
}

export default ProductModal;