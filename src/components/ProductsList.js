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


import React, { useEffect } from 'react'
            
const ProductsList = () => {  

  useEffect(() => {
    console.log('empieza getProducts');// ponemos un mensaje donde empieza la asyncronia
    getProducts().then(response => {
      console.log(response);

    })
      console.log('termina getProducts');//termina la asyncronia y luego de 3 segundos muestra el arreglo con los productos
  }, [])

  //creamos la funcion getProducts, definimos la new promesa, con una funcion que haceos el call back, ponemos el resolve y el reject, hacemos que se resuelva  3 segundos despues tenemos un setTimeout ( es una promesa resive una funcion y un seguendo parametro y ponemos los segundo y es asincronica y el codigo se sigue ejeutando y se ejecuta 3 seg despues(se representa con 3000), y en el resolve de setTimeout ponemos un mensaje, en este caso un arreglo con los productos, luego hacemos un return esta funcion regresa una promesa y resuelve con los productos, me llevo el asincronismo al getProducts de arriba en el useEffect y le encadenado el .then, porque? porque estoy retornando una promesa, hacemos una funcion en .then y recibimos y obtenemos una respuesta, un log de la response(respuesta), una promera que 3 seg despues reciba una lista de productos) 

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['prod1', 'prod2', 'prod3'])
      }, 3000)
    })

  }

    return (
      
        <div>ProductsList</div>       
  )
}
export default ProductsList