import "./App.css";
import Navbar from "./components/Navbar/";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CheckoutConfirmed from "./components/Checkout/CheckoutConfirmed";

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
            <Route path='/checkout' component={Checkout} />
            <Route
              path='/checkout-confirmed/:orderID'
              component={CheckoutConfirmed}
            />
            <Route exact path='*'>
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
