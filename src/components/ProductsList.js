//PROMESAS vamos hacer una peticion a un servidor externo, hacemos una funcion con ProducList, y dentro de ella un montaje DEL COMPONENTE que se va a ejecutar una sola vez, con corchetes vacio

//const ProductsList = () => { hemos cambiado a randonPromise para hacer lo que oide el desafio. ya que de esa forma hicimos una promesa donde nos marca cada vez que recargamos la pgina y depende el resultado de la condicion if si es satisfactoria o rechazada
//aca llamo a la funcion de la promesa del componente getProducts y a lo ultimo lo importamos ( getProducst se ejecutado al momento del montaje del componente)
//useEffect(() => {
  //getProducts()
  //}, [])

  //a esta funcion la convertimos en una promesa
  //const getProducts = () => {
    //const productsPromise = new Promise((resolve, reject) => {
      //simulamos un numero randon, le hacemos una condicion donde se resuelve cuando hacemos un if con la condicion que sea el rand mayor a 0.5, la consigna decia que se tenia que resaolver 5 segundos despues
      // const rand = Math.random()
      // console.log(rand);
      //if (rand > 0.5) {
        //  resolve('se rosolvio satisfactoriamente')
        //}
        //reject('rechazada')
        
        //lanzamos esta promesa con el metodo .then
        //})
        //Hacemos el .then que recibe el callback, y recibe en elk callback obtenemos una respuesta
        //productsPromise.then((response) => {
          //console.log('RESPUESTA: ', response);
          
          //cuando obtenemos un resultado negativo hacemos un catch, cuando tenemos un error
          
          // }).catch((err) => {
            //console.log('ERROR: ', err);
            //  })
            //}


//import React, { useEffect } from 'react'
            
//const ProductsList = () => {  

  //useEffect(() => {
    //console.log('empieza getProducts');// ponemos un mensaje donde empieza la asyncronia
    //getProducts().then(response => {
      //console.log(response);

    //})
      //console.log('termina getProducts');//termina la asyncronia y luego de 3 segundos muestra el arreglo con los productos
  //}, [])

  //creamos la funcion getProducts, definimos la new promesa, con una funcion que haceos el call back, ponemos el resolve y el reject, hacemos que se resuelva  3 segundos despues tenemos un setTimeout ( es una promesa resive una funcion y un seguendo parametro y ponemos los segundo y es asincronica y el codigo se sigue ejeutando y se ejecuta 3 seg despues(se representa con 3000), y en el resolve de setTimeout ponemos un mensaje, en este caso un arreglo con los productos, luego hacemos un return esta funcion regresa una promesa y resuelve con los productos, me llevo el asincronismo al getProducts de arriba en el useEffect y le encadenado el .then, porque? porque estoy retornando una promesa, hacemos una funcion en .then y recibimos y obtenemos una respuesta, un log de la response(respuesta), una promera que 3 seg despues reciba una lista de productos) 

 // const getProducts = () => {
    //return new Promise((resolve, reject) => {
   //   setTimeout(() => {
      //  resolve(['prod1', 'prod2', 'prod3'])
    //  }, 3000)
   // })

  //}

    //return (
      
      //  <div>ProductsList</div>       
//  )
//}
//export default ProductsList

//MAP()
// Primero hacemos una funcion donde trae como parametros (products y setProducts) esta funcion es igual a useState con una array vacio []
//import React, { useEffect, useState } from 'react'
            
//const ProductsList = () => {  

//const [products, setProducts] = useState([])//(['motorola', 'nokia'])si en vez de tener un <=arrays vacio le ponemos otros productos, en la web apareceran primero los que tenemos en el arrays y cunado se haga render 3 segundos depues apareceran los otros 3.

  // los cambios de estilos se cambian en app.css
 // useEffect(() => {
//   console.log('empieza getProducts');
 //   getProducts().then(response => {
//      console.log(response);
//Tenemos que hacer el setProducts una vez que tengamos la respuesta de empieza getProducts.  en vez de que siga como un arreglo vacio, que obtenga la respuesta de getProducts entre sus parentesis y despues se genera la promesa 3 segundos despues y va cambiar, y para llamarlo en js vamos hasta el final del ejercicio.
  //    setProducts(response)
 //   })
 //     console.log('termina getProducts');
 // }, [])

//    const getProducts = () => {
//    return new Promise((resolve, reject) => {
 //     setTimeout(() => {
//        resolve(['Ipone', 'Galaxy', 'Xiaomi'])
   //   }, 3000)
   // })

  //}

 // return (
//Primero ponemos todo en un div, y al producList lo poenemos en un h1, cuando hace el render, cambia el estado de products y cambiamos a cada elemento de esta lista. una vez que hayamos terminado con esto, el mensaje aparecera 3 segundos despues en la pantalla.      
 //     <div>
            
 //     <h1>ProductsList</h1>
       
//{ products.map( (p, i) => <li key={ i }>{ p }</li> )  }
      
//      </div>
//una vez hecho esto salta un cartel rojo en la consola donde dice que necesitamos usar la key, para esto dentro del map a la p le poenemos un  nombre entre parentesis (p, i), y dentro del li Key igual al nombre de la p.
  //)
//}
//export default ProductsList


// Agregamos una funcion PRODUCTS con un arrays de objetos, sacamos del resolve del getProducts que tenia nuestro arrays de objetos, para poner el arrays en una constante aparte con stock y en la promise cambiamos a 2 segundos(2000), despues del setTimeout. para ue aparesca en pantalla y deje de salir en consola con errores errores, en el products.map(), le vamos a poner p.name, que son los nombres de nuestros productos ern nuestro arrays, despues haremos otro componente con un rpoductsCard, y asi empezaremos una nueva logica, intergrampos en ProductsCard.js al products.map() por el <li>, quitamos el p.name ahora. y hacemos un ProductsCard por cada producto de nuestros componente y en la Key lo vamos a psar como p.id, que es donde esta toda la informacion de nuestros productos, lo importamos a PruductsCard y le pasamos cada parametro de cada producto en el map(), mas props, le agrgamos mas props, primero el name= {p.name}, despues los destructuramos a los props desde el componente productsCard, entre llaves como parametros, deepues lo traemos como <li> en productsCard sacamos el div para que adquiera los estilos del <li>, solo aparecera el nombre, pero si queremos traer  todas las propiedades de los objetos del array, haceremos un  sintaxis de todo poniendo en el map(), cambiamos esto name= {p.name} por esto {...p}, y agregamos en los parametros de productsCard las propiedades de nuestros objetos {id, name, stock} y nen el return que cambiamos el div por el li, entre llaves {id} - {name} - stock: {stock}, separados por un guion por puntos, lo mque quieran.
import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'

const PRODUCTS = [
  { id: 1, name: 'Captus1', descr: "tienen flores amarillas en forma de estrella", stock: 12 },
  { id: 2, name: 'Captus2', descr: "no tiene flores pero les crecen muchos brasitos", stock: 14 },
  { id: 3, name: 'Captus3', descr: "tienen flores rojas", stock: 23 },
  { id: 4, name: 'Captus4', descr: "estos son tunas traidas de jujuy", stock: 18 },
  { id: 5, name: 'Captus5', descr: "este es uno de los captus mas resistentes, viven con poca agua", stock: 11 },
  { id: 6, name: 'Captus6', descr: "estos a medida que crecen las ramitas son bolitas que se enciman una arriba de la otra", stock: 10 },
]
            
const ProductsList = () => {  

  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('empieza getProducts');
    getProducts().then(response => {
      console.log(response);    
  setItems(response)
    }).catch( err => { console.log(err);})// se untiliza el cacht por cualuier cuestion de error
      console.log('termina getProducts');
  }, [])

    const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( PRODUCTS )
      }, 2000)
    })

  }

  return (      

     <div>
            
          <h1 className='text-3m font-bold text-orange-400 underline'>Lista de Productos</h1>
       
          { items.map( p => <ProductsCard key={ p.id } {...p} /> )  }
      
    </div>


  )
}
export default ProductsList