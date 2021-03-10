import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [usuario, setUsuario] = useState("");
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    const solicitar = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUsuario(data[contador].name);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    };

    solicitar();
  }, [contador]);

  const aumentar = () => {
    if (contador >= 9) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-dark text-white">
        <h2>Renderizado condicional (Loader)</h2>
      </div>

      <div className="card-body">
        <p>
          Se usa un condicional de tipo{" "}
          <strong>condicion ? positivo : negativo</strong> para mostrar el
          loader o el nombre del usuario.
        </p>

        <hr />

        {isLoading ? (
          <div className="spinner-border d-block" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <span className="d-block h3">{usuario}</span>
        )}

        <button className="btn btn-secondary mt-4" onClick={aumentar}>
          Cambiar
        </button>
      </div>
    </div>
  );
};

export default Loader;
