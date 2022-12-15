
import './App.css';
import Clicker from './components/Clicker';
import Footer from './components/Footer';

import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import ChartList from './components/rickyandmorty/ChartList';
import Saludo from './components/Saludo';



function App() {


  const boton =<button></button>/* se crea el boton con una constante y despues se crea en el DOM con unas llaves en el lugar que lko queremos ubicar*/
  const nombre = 'Mauricio'
  
  const estilos = { /* a la hora de definir los estilos siempre se usa el camelCase para que funcione en jsx seprados los estilos por una coma, menos el ultimo. los cambios siempre van del padre al children. A qui dentro de App podemos definir una funcion, y a la funcion podemos pasarla como props, el Action es una referencia a la funcion*/  
  color: 'red',
  backgroundColor: 'yellow',
  padding: 20
  
}

   const mensaje = () => {
    console.log('mostrar mensaje en la consola');
  }
  

  
  return (


    <div className="App">

      <Navbar/>
      <ItemListContainer greeting='Hola Amantes de los Cactus'/>
  
     <Clicker/>
      <ProductsList />
      <ChartList/>


      {boton}

      <Saludo/>
      <Saludo />

      <Footer>
     
      </Footer>  
  
    </div> /*en jsx solo  puede haber un solo div, puede haber un solo padre
              <strong style = { { color: 'blue'} } >Este es un mensaje</strong> esta es otra manera de definir los estilos*/

  );
}

export default App;
/*tambien se puede hacer contenedores de nodos, esto seria como un fragment
<>

<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</>
*/