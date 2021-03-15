// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/"
import ItemListContainer from "./components/ItemListContainer/index"

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos al Ecommerce"}></ItemListContainer>
    </>
  );
}

export default App;
