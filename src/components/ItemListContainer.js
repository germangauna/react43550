// crea un componente contenedor ItemListContainer.js con un prop greeting, que muestre un mensaje adentro del contenedor con style integrado. Entonces, hacemos un rafce, dentro de los parentesis de la funsion flecha ponemos entre llaves greeting, y lo mismo entre los div, luego dentro de los div ponemos las clases para agregarle estilos. por ultimo lo importamos al App.jsx donde querramos ponerlo.


const ItemListContainer = ( {greeting} ) => {
  return (
    <div className="text-3m font-bold text-orange-400 underline"> { greeting } </div>
  )
}
export default ItemListContainer