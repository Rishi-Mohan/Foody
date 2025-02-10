import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  // how to read the cart item? ANswer : we have to subscribe to the store 
  // using useSelector

  // always subscribe to the right portion of the store, we should avoid using subscribing whole store
  const cartItems = useSelector((store) => store.cart.items);

  // when want some write action in the slice
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the cart </h1>
        )}
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;

/**
onClick = {add}: Passes the function reference to be called on click.

onClick = {() => add(a)}: Passes an arrow function that calls add(a) on click, allowing you to pass arguments.

onClick = {add(a)}: Incorrect usage; calls add(a) immediately on render, not on click.
 */