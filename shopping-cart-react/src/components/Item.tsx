import { Button } from '@material-ui/core';

// Types
import { CartItemType } from "../App";

// Styles
import { WrapperItem } from "./Item.styles";


type ItemProps = {
    item: CartItemType
    handleAddToCart: (item: CartItemType) => void
}

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => (
    <WrapperItem>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </WrapperItem>
)
export default Item