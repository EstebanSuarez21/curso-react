import NavBar from "./components/Navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
        <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route path="/category/:categoryid">
            <ItemListContainer/>
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
