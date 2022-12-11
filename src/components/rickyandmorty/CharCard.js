//primero para crear una card con daisyui copiamos el codigode la card que queremos usar, creamos un archivo, hacemos el rafce, borramos el div y pegamos el codigo que trajimos de daisyui, ahora a cambiar todo para armar nuestra card, y llevamos este componente a el componente chardListe, y lo colocamos en el map(), voy a usar todos los parametros del personajes, los puedo pasar con el split operator {...p} con esta sintaxis pasan todas las caracteristicas. ahora a poner los parametrso en la funcion madre y poner estos parametros de los personajes{ name, species, status, image}, de la api, y depues en el title de la card el name, en el parrafo la especie y estatus{todo entre llaves}, y la image en figure




const CharCard = ({ name, species, status, image } ) => {
  return (
            <div className="card w-96 bg-base-100 shadow-xl m-8 ">
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{species} - {status}</p>
            </div>
            <figure><img src= {image} alt="Shoes" /></figure>
            </div>
      
  )
}
export default CharCard