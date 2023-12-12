import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../redux/features/basket/basketSlice'

const Product = ({ id, unitPrice, name, product }) => {
  const dispatch = useDispatch()
  return (
    <>
      <ul className='product'>
        <li>
          <h4>{name}</h4>
        </li>
        <li>
          <h4>Price: {unitPrice}</h4>
        </li>
        <li>
          <button onClick={() => dispatch(addToBasket(product))}>
            Add To Basket
          </button>
        </li>
        <li>
          <button>Add To Wishlist</button>
        </li>
      </ul>
    </>
  )
}

export default Product
