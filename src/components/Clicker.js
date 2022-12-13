// para crear un boton de aumentar, primero hacemos con el rafce de clicker, dentro del div ponemos el clicker en un straog, despues, un boton de aumentar, y por ultimo un strong con un count (contador). le damos stilo al clicker y al boton aumentar, creamos una variable de count igual a 0. el pading con tailwind en clase es 'p-10', y un flex flex -col agrandas el boton. Ahora ponemos en el boton un onClick, y creamos una funcion para que este funcione para que aumente. esat funcion se llamara clickHandler. count = count + 1, este lo ubicamos entre las llaves del onClick del div

import react, { useEffect, useState } from "react";

//los hook se ejecutan dentro de la funcion de mi componente clicker

const Clicker = () => {

    //let count = 0 , aca no tenemos que definir con una variable simple, usaremos esta formula, const [variable, useFuncion] = useState(0), y debajo de la funcion pondremos: setFuncion (variable +1), no se puede hacer variable ++. por ultimo importamos el useState y listo, nuestro contador funciona.
    const [count, setCount] = useState(0)
    

    const clickHandler = () => {
        console.log('se hizo click');

        // count = count + 1 , esto es un aumentador, que no debemos usar, hacemos los componentes state, useState, CON ESTO ESTAMOS SETIANDO EL ESTADO, cuando nostros traemos un valor del estado generara un re render. se altera el estado con el setCount
        
        setCount(count + 1)
    }
        
    //En el montaje y  cada vez que haga render primero va la funcion despues el valor
     useEffect( () => {
     console.log('se hizo render');
     }, undefined)// si le saco el undefined no pasa nada, porque no hay parametros, ya que no recibe parametros se ejecutara cada vez que se aprete el boton

    //solo en el montaje
    useEffect(() => {
        console.log('este efecto solo en montaje');
    }, [] )// este console se ejecuta una sola vez con el primer render despues no se ejecuta mas, por el arrays vacio
    
    
    //solo en el montaje
    useEffect(() => {
        console.log('este en montaje y cuando cambia el count');
    }, [count] )


    //console.log('se hizo render'); si hacemos este console.log nos va a salir doble render,  es por el modo estricto de react, en el index.js, la alteraciones del estado me genera un nuevo render, cuando quiers que tu interfas cambie altera el estado.

    return (
      
      <div className="p-10 flex flex-col">
          
          <button onClick= { clickHandler} className="btn" > Agregar al Carrito </button>
          <strong> { count } </strong>
      </div>
  )
}
export default Clicker