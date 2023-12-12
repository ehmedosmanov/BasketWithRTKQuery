import React from 'react'
import { useDispatch } from 'react-redux'
import {
  dec,
  inc,
  removeFromBasket
} from '../../redux/features/basket/basketSlice'
const BasketCard = ({ id, unitPrice, name, product, quantity }) => {
  const dispatch = useDispatch()

  return (
    <div className='basketCard'>
      <ul className='product'>
        <li>
          <h4>Name: {name}</h4>
        </li>
        <li>
          <h4>Price: {unitPrice.toFixed(2)}</h4>
        </li>
        <li>
          <h4>
            {quantity} x ${quantity * unitPrice.toFixed(2)}
          </h4>
        </li>
        <li>
          <button onClick={() => dispatch(removeFromBasket(id))}>
            remove from Basket
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(inc(id))}>+</button>
        </li>
        <li>
          <span>{quantity}</span>
        </li>
        <li>
          <button onClick={() => dispatch(dec(id))}>-</button>
        </li>
      </ul>
    </div>
  )
}

export default BasketCard
