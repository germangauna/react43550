import logo from './logo.svg';
import './App.css';
import '../src/components/footer';

function App() {


  const boton =<button>boton</button>/* se crea el boton con una constante y despues se crea en el DOM con unas llaves en el lugar que lko queremos ubicar*/
  const nombre = 'Mauricio'

  const estilos = { /* a la hora de definir los estilos siempre se usa el camelCase para que funcione en jsx
                       seprados los estilos por una coma, menos el ultimo*/  
    color: 'red',
    backgroundColor: 'yellow',
    padding: 20

  }

  return (

    <div className="App">

      <h1>Hola Mundo  { nombre } </h1>
      
      <strong style={estilos} >Este es un mensaje</strong>
      {boton} 
      
      <li>fresa</li>
      <li>melon</li>
      <li>sandia</li>
      <li>berrys</li>
      <li>bananos</li>
      <footer>footer</footer>
    </div>/* en jsx solo  puede haber un solo div, puede haber un solo padre
              <strong style = { { color: 'blue'} } >Este es un mensaje</strong> esta es otra manera de definir los estilos*/

  );
}

export default App;

/* tambien se puede hacer contenedores de nodos, esto seria como un fragment
<>

<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</>
*/