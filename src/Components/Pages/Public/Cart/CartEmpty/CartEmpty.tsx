import { Link } from "react-router-dom"


interface Props{
  text:string
}

const CartEmpty = ({text}:Props) => {
  return (
    <div className='cart-empty'>
        <img src="images/cart/shopping-cart.svg" className='empty-cart-image'/>
        <p>{text}</p>
        <Link to='/products' className='continue-shopping-button main-button'>Alış-verişə davam et</Link>
    </div>
  )
}

export default CartEmpty