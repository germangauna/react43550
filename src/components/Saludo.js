const Saludo = ({ name, lastname, age, action }) => { // entre los parentesis ponemos los props, los destructuramos como variables sueltas. tambien podemos agregar estilos desde aca. todo esto seria  UN COMPONENTE DE PRESENTACION, se limita a mostrar datos. todos los componentes son funcionales, y no tienen  estados, action se ejecuta en la consola cada vez que damos click en el boton.

    const title = {
        border: 'solid black 2px',
        margin: '20px',
        padding:'20px'
    }

    return (    
    <div style= {title}>          
      <div >Saludos {name} {lastname} </div>
      <div>tienes {age} años </div>
      <button onClick={action}>click</button>
    </div>     
    )
}

export default Saludo