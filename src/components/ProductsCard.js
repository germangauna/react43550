import React from 'react'

const ProductsCard = ( {id, name, stock, descr} ) => {
  return (
    <div className='m-10'>
      <div>{ id }</div>
      <div>{ name }</div>
      <div>{descr}</div>
      <div>{stock}</div>
    </div>
  )
}
export default ProductsCard