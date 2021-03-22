import { useContext } from 'react';
import './App.css';
import { CartContext } from "./Car-Context";

export function Cart() {
  const { cartitems } = useContext(CartContext);
    return <h1>Items in Cart {cartitems}</h1>
}

export function ProductListing() {
  return ["1","2","3","4"].map((items) => <h2>Product {items}</h2>)
}

function App() {
  return (
    <div className="App">
      <h1>Hello  React</h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}

export default App;
