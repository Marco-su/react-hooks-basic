import { useEffect, useState } from "react";

const UseEffect = () => {
  const [random, setRandom] = useState(0);
  const [usuario, setUsuario] = useState("");

  const numeroRandom = () => {
    setRandom(Math.floor(Math.random() * 10));
  };

  useEffect(() => {
    const solicitar = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsuario(data[random].name))
        .catch((err) => console.log(err));
    };
    solicitar();
  }, [random]);

  return (
    <div className="card mb-4">
      <div className="card-header bg-dark text-white">
        <h2>UseEffect</h2>
      </div>
      <div className="card-body">
        <p>
          Se usa el <strong>useEffect</strong> para hacer un llamado a la API de
          JSONplaceholder cada vez que se cambia el número. Además se usa el
          número como posición en el arreglo de usuarios solicitado
        </p>
        <hr />
        <span className="d-block h3">{usuario}</span>
        <span className="d-block h3">{random}</span>
        <button className="btn btn-secondary" onClick={numeroRandom}>
          Numero Random
        </button>
      </div>
    </div>
  );
};

export default UseEffect;
