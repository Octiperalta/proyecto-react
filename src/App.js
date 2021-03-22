// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/";
import ItemListContainer from "./components/ItemListContainer/index";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer
        greeting={"Bienvenidos al Ecommerce"}></ItemListContainer>
    </div>
  );
}

export default App;
