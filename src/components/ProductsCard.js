import React from 'react'

const ProductsCard = ( {id, name, stock, descr} ) => {
  return (
    <div>
      <li>{id}. {name} - stock: {stock}</li>
    </div>
  )
}
export default ProductsCard