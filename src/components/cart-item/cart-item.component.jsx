import { CartItemContainer, Img, ItemDetails, Name } from "./cart-item.styles"
// import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>
                    {quantity} X ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem