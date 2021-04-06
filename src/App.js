// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";

const Content = styled.div`
  margin-top: calc(4vh);
`;

const Error = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Poppins, sans-serif;
  font-weight: 300;
`;

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Content>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route path='/category/:id'>
            <ItemListContainer />
            {/* <div>ADS</div> */}
          </Route>

          <Route path='/item/:id'>
            <ItemDetailContainer />
          </Route>

          <Route exact path='/cart'>
            <h1>Carrito</h1>
          </Route>

          <Route exact path='*'>
            <Error>
              <h2 className='display-3'>404 Error</h2>
              <p>No pudimos encontrar la página que estas buscando.</p>
            </Error>
          </Route>
        </Switch>
      </Content>
    </div>
  );
}

export default App;
