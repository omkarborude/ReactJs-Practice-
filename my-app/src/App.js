import { useContext } from 'react';
import './App.css';
import { useCart } from "./Car-Context";

const products = [
  {
    id:1,
    name: "apple",
    price: 99
  },
  {
    id:2,
    name: "mango",
    price: 150
  },
]

export function Cart() {
  const { cartitems , item , setitem } = useCart()

    return ( 
   <>
    <h1>Items in Cart {item}</h1>
    <button
    onClick={() => setitem(item => item + 1)}
    >+</button>
    </>
    )
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
