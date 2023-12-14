import { useState } from "react";
import { useQuery } from "react-query";
// Components
import { Drawer } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Badge from "@material-ui/core";
import Item from "./components/Item";
// styles
import { Wrapper } from "./App.styles";
// types
export type CartItemType = {
  id: number
  category: string
  title: string
  price: number
  image: string
  description: string
  amount: number
}


const fetchProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json()

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>("product",
    fetchProducts
  )
  const getTotalProduct = () => null;
  const handleAddToCart = (item: CartItemType) => null;
  if (isLoading) return <LinearProgress />
  if (error) {
    return <div>{`Error ${error}`}</div>
  }
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}></Item>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default App;
