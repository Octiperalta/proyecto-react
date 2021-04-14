import "./App.css";
import Navbar from "./components/Navbar/";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

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
    <CartProvider>
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
              <Cart />
            </Route>
            <Route path='/cart' component={Cart} />
            <Route exact path='*'>
              {/* <Redirect to='/error' /> */}
              <Error>
                <h2 className='display-3'>404 Error</h2>
                <p>No pudimos encontrar la página que estas buscando.</p>
              </Error>
            </Route>
          </Switch>
        </Content>
      </div>
    </CartProvider>
  );
}

export default App;
