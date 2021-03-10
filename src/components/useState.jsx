import { useState } from "react";

const UseState = () => {
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    setNumero(numero + 1);
  };
  const disminuir = () => {
    setNumero(numero - 1);
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-dark text-white">
        <h2>UseState</h2>
      </div>

      <div className="card-body">
        <p>
          Se utilisa el <strong>useState</strong> para cambiar el numero
        </p>
        <hr />
        <span className="d-block h3">{numero}</span>
        <div className="mt-3">
          <button className="btn btn-secondary me-2" onClick={aumentar}>
            Aumentar
          </button>
          <button className="btn btn-secondary" onClick={disminuir}>
            Disminuir
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
