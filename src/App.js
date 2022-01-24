import NavBar from "./components/Navbar/NavBar";

import Counter from "./components/Counter/Counter";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Counter />
      <ItemListContainer />
    </div>
  );
}

export default App;
