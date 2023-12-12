import React from 'react'
import BasketCard from '../BasketCard'
import { useSelector, useDispatch } from 'react-redux'

const BasketProducts = () => {
  const basket = useSelector(state => state.basket.basket)
  console.log(basket)
  const subTotal = basket.reduce((acc, x) => acc + x.unitPrice * x.quantity, 0)
  return (
    <div className='products'>
      {basket &&
        basket.map(item => <BasketCard {...item} quantity={item.quantity} />)}
      <h1>{subTotal.toFixed(2)}</h1>
    </div>
  )
}

export default BasketProducts
