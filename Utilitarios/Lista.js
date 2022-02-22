import React from 'react';
import ReactDOM from 'react-dom'; // Sempre importar o DOM

function Car(props) {
  return <li>I am a { props.brand }</li>; // Função Mãe
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi']; // Função que cria a lista
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)} // cars.map (transforma o Array em String; Car brand ={car}, para adicionar na lista
      </ul>
    </>
  )
}

ReactDOM.render(<Garage />, document.getElementById('root'));
