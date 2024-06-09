import React from 'react';


const handleClick1 = () => {
  alert('hola como estas!');
};

const handleClick2 = () => {
  alert('Hola que tal como a estado tu dia!');
};

const handleClick3 = () => {
  alert('HOLA que tengas un buen dia que te vaya bien en todo eres el/la mejor en todo!');
};

function Botones() {
  return (
    <div>
      <button className="mi-boton" onClick={handleClick1}>
        Presiona este boton
      </button>
      <button className="mi-boton" onClick={handleClick2}>
        Presiona este boton
      </button>
      <button className="mi-boton" onClick={handleClick3}>
        Presiona este boton :D
      </button>
    </div>
  );
}

export default Botones;


