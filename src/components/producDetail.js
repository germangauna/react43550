import { useEffect, useState } from "react"

const ITEM = { id: 1, name: 'Captus1', descr: "tienen flores amarillas en forma de estrella", stock: 12 },

const producDetail = () => {

    const [items, setItems] = useState({})

    useEffect(() => {
        getItemsDetail().then(resolve => {
            setItems( resolve)
        })
    }, [])

    const getItemsDetail = () => {
        return new Promise(resolve, reject => {
            setTimeout(() => {
                resolve(ITEM)
            }, 2000);
        })
    }

  return (
      <div>
          <h1> detalles del producto</h1>
          <li>{items.name}</li>
          <li>{items.descr}</li>
          <li>{items.stock}</li>
          
    </div>
  )
}
export default producDetail