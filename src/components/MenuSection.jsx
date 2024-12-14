import Cart from "./menu/Cart";
import Checkout from "./menu/Checkout";
import Header from "./menu/Header";
import Meals from "./menu/Meals";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import "./menu/index.css";

function App() {
  const cartState = useSelector((state) => state.cart);
  const userProgress = useSelector((state) => state.userProgress);

  return (
    <section className="section-menu">
      {console.log(cartState)}
      {console.log(userProgress)}

      {/* <Header /> */}
      <Meals />
      <Cart />
      <Checkout />
    </section>
  );
}

export default App;
