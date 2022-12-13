// vamos a utilizar una API de rickyandMorty, para traerlos aqui, traemos la url, primewro utilizamos el useEffect y creamos el call back con un arrays vacio, al momento del montaje,  hacemos un getChars() em el useEffects, despues creamos otra funcion donde ponemos el getChars y dentro otra funcion con el URL pondremos la url de los charactes de la api,traemos el fetch y le damos la url y y a este el .then dentro de este pondremos la respuesta(response) con un console.log, esto me traera la resouesta, sacamos el console log por return y tenemos 2 promesas por re4solver, en este return pondremos la respuesta en texto(response.text), crea,os otro den y dentro de este la data con una funcion flecha, y un console.log con la respuesta, que le llamamos data, como yo la estoy llamando como text, me trae todo el texto plano de api, ahpra cambaimos en forma de texto como JSON y obtendremos un objeto de javascript, de esta forma me trajo todos los caracteres de forma de la cual la queremos para utilizar, nos brinda toda la info de la API. Y PARA SIMPPLIFICAR PODEMOS SACR EL SEGUNDO RETURN con las llaves, y si en la data del console,log le pomgo data.results ya me traera todos los personajes, sin la otra info, ahora para verlos directamente en nuestra aplicaion, temdrias aue tgraerlo al estado y luego al jsx, hacemos un useState con los dos parametro por ejemplo [personajes, setPersonajes] entre corchetes y con el arrays vacio, depues en el .then data pondremos el setPersonajes(data.results), depues vamos al div donde hace el ultimo return, utilizamos el div como separador, un h1 ´para el titulo, y luego un personajes.map, y dentro pondremos un lista(<li>) derntrpo de la lista entre llaves un p.name, conn esto temdriamos que ver una lista de los nombres de los persinajes, me los traera a la aplicacion como una lista. supongamos que queremos que la lista nos tarde 1 segundos, poenmos un nsetTimeout en el useEffect como funcion y dentro del setTimeout dejamos el getCrats, esto se produce porque seteo el render con el estado, en la data. para traer la card de el compoennte charsCard lo ponemos en el map() y lo vamos a utilizar el id que es unico para que nos deje de salir el error de la key. y los ponemos en el componente charsListe, en el map(), adelante de donde pusismos el componente charsCard key={p.id} 

import { useEffect, useState } from "react"
import CharCard from "./CharCard";

const ChartList = () => {

    const [personajes, setPersonajes]= useState([])

  useEffect(() => {
      setTimeout(() => {
        getChars()
        
      }, 1000);
        
   }, [] )

    const getChars = () => {
        const URL = ''
        fetch(URL)
            .then(response => response.json()//return{}
            )
            .then(data => {
                console.log(data.results);
                setPersonajes(data.results);
        } )
}

  return (
      <div>
          <h1 className="text-3m font-bold text-orange-400 underline" > </h1>
          {
            personajes.map(p => <CharCard key={p.id} {...p} />)//traemos el componente chardCard 
              //personajes.map(p => <li>{p.name}</li>) este es para traer la lista de personajes dee la api
          }
    </div>
  )
}
export default ChartList