import { useState, useContext } from "react";

import Context from "./config";

const UseContext = () => {
  const [mensaje, setMensaje] = useState("");
  const { message, setMessage } = useContext(Context);

  const cambiarMensaje = () => {
    setMessage(mensaje);
  };

  return (
    <>
      <div className="card mb-4">
        <div className="card-header bg-dark text-white">
          <h2>UseContext</h2>
        </div>
        <div className="card-body">
          <p>
            Se usa el <strong>useContext</strong> para llamar a un valor desde
            un proveedor, y este valor se cambia con el input de tipo texto y el
            botón.
          </p>
          <hr />
          <p className="h3">{message}</p>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Introduce un texto"
            onChange={(e) => setMensaje(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={cambiarMensaje}>
            Cambiar mensaje
          </button>
        </div>
      </div>
    </>
  );
};

export default UseContext;
