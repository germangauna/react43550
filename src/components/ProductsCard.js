import React from 'react'

const ProductsCard = ( {id, name, stock} ) => {
  return (
    <li>{id}. {name} - stock: {stock}</li>
  )
}
export default ProductsCard