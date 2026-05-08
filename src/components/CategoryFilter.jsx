import { Link } from "react-router-dom";

function CategoryFilter({
    categorias,
    active
}) {

    return (
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">

            {categorias.map((categoria) => {

                const isActive =
                    active === categoria;

                return (

                    <Link
                        key={categoria}
                        to={
                            categoria === "todos"
                                ? "/"
                                : `/categoria/${categoria}`
                        }
                        className={`btn ${
                            isActive
                                ? "btn-dark"
                                : "btn-outline-dark"
                        } rounded-pill px-4 py-2 fw-semibold`}
                        style={{
                            transition:
                                "all 0.3s ease",

                            transform: isActive
                                ? "scale(1.05)"
                                : "scale(1)"
                        }}
                    >
                        {categoria.charAt(0)
                            .toUpperCase() +
                            categoria.slice(1)}

                    </Link>

                );
            })}

        </div>
    );
}

export default CategoryFilter;