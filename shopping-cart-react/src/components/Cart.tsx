import CartItem from "./CartItem";

import { WrapperCart } from "./Cart.styles";
import { CartItemType } from "../App";

type CartProps = {
    cartItems: CartItemType[]
    addToCart: (item: CartItemType) => void
    removeFromCart: (id: number) => void
}

const Cart: React.FC<CartProps> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotalPrice = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + (item.price * item.amount), 0).toFixed(2)

    return < WrapperCart >
        <h2>Your cart</h2>
        {cartItems.length === 0 ? <p>No item in cart</p> : null}
        {
            cartItems.map(item => (
                <CartItem key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                ></CartItem>
            ))
        }
        <h2>Total price ${calculateTotalPrice(cartItems)}</h2>
    </ WrapperCart >
}
export default Cart