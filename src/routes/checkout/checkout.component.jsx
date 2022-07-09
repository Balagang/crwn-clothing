import { useSelector } from 'react-redux'
import { selectCartItems, selectorCartTotal } from '../../store/cart/cart.selector'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectorCartTotal)
    
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='hear-block'>
                    <span>Product</span>
                </div>
                <div className='hear-block'>
                    <span>Description</span>
                </div>
                <div className='hear-block'>
                    <span>Quantity</span>
                </div>
                <div className='hear-block'>
                    <span>Price</span>
                </div>
                <div className='hear-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) =>
                        < CheckoutItem key={cartItem.id} cartItem={cartItem} />
               )}
            <span className='total'>{`Total: ${cartTotal}`}</span>
        </div>
    )
}

export default Checkout