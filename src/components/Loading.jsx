import Spinner from "react-bootstrap/Spinner";

const Loading = ()=> {
    return (
        <div className="text-center mt-5">
            <Spinner animation="border" variant="info" />
            <p className="mt-3">Cargando productos...</p>
        </div>
    );
};

export default Loading