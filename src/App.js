import NavBar from "./components/Navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./components/context/cartContext";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartTicket from "./components/CartTicket/CartTicket";
import Test from "./components/Test/Test";

function App() {

  return (
    <div>
      <CartProvider>
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryid/:categoryid2" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cartTicket/:orderId" element={<CartTicket/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <Footer/>
          <Test/>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
