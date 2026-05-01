const CategoryFilter = ({ categorias, onSelect, active }) => {
    return (
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">

            {categorias.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className={`btn ${
                        active === cat ? "btn-dark" : "btn-outline-dark"
                    } rounded-pill px-4 py-2 fw-semibold`}
                    style={{
                        transition: "all 0.3s ease",
                        transform: active === cat ? "scale(1.05)" : "scale(1)"
                    }}
                >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
            ))}

        </div>
    );
};

export default CategoryFilter;