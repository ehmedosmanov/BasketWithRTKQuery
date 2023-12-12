import React from 'react'
import { useGetAllProductQuery } from '../../redux/features/product/productAPİ'
import Product from '../ProductCard'

const OurProducts = () => {
  const { data, error, isLoading } = useGetAllProductQuery()

  return (
    <>
      <h1>Our Products:</h1>
      <div className='products'>
        {data &&
          data.map(product => <Product product={product} {...product} />)}
      </div>
    </>
  )
}

export default OurProducts
