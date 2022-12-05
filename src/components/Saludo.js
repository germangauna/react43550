
const Saludo = ({ name, lastname, age, action }) => { // entre los parentesis ponemos los props, los destructuramos como variables sueltas. tambien podemos agregar estilos desde aca. todo esto seria  UN COMPONENTE DE PRESENTACION, se limita a mostrar datos. todos los componentes son funcionales, y no tienen  estados, action se ejecuta en la consola cada vez que damos click en el boton.

    const title = {
        border: 'solid black 2px',
        margin: '20px',
        padding:'20px'
    }

    return (    
    <div style= {title}>          
      <h1 className="text-3m font-bold text-orange-700 italic ... underline">Saludos {name} {lastname} </h1>
      <div>tienes {age} años </div>
      <button onClick={action}>click</button>
    </div>     
    )
}

export default Saludo