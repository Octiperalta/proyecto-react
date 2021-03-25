// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos al Ecommerce"} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
