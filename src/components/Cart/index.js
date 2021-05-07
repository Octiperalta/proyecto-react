import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartContext from "../../context/CartContext";

function Cart() {
  const { cart, cartTotal, removeItem } = useContext(CartContext);

  return (
    <ShoppingCart>
      <div className='header'>
        <div className='breadcrumb'>
          <div className='breadcrumb-item'>
            <ModifiedLink to='/'>Home</ModifiedLink>
          </div>
          <div className='breadcrumb-item active'>Shoping Cart</div>
        </div>

        <h2>Shopping Cart</h2>
      </div>

      <div className='cart'>
        <div className='cart-list'>
          <div>
            <div className='cart-header'>
              <div>Item</div>
              <div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
              </div>
            </div>
            <div className='cart-body'>
              <ul style={{ margin: 0, padding: 0 }}>
                {cart.length ? (
                  cart.map(cartItem => (
                    <li
                      className='cart-item'
                      key={cartItem.item.productID}
                      id={cartItem.item.productID}>
                      <div className='item-info'>
                        <img src={cartItem.item.imageUrl} alt='product' />
                        <div>
                          <h5 style={{ margin: 0, padding: 0 }}>
                            {cartItem.item.productName.shortName}
                          </h5>
                          <span>Size: Large</span>
                          <span>Color: Black</span>
                        </div>
                      </div>
                      <div className='purchase-info'>
                        <div>${cartItem.item.productPrice}</div>
                        <div>{cartItem.quantity}</div>
                        <div>
                          ${cartItem.quantity * cartItem.item.productPrice}
                        </div>
                        <div
                          className='button'
                          onClick={() => removeItem(cartItem.item.productID)}>
                          <button>
                            <i className='fas fa-times'></i>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className='empty-cart'>
                    Your cart is empty!
                    <div>
                      <ModifiedLink to='/'>
                        <i className='fas fa-chevron-left'></i>
                        Go shopping
                      </ModifiedLink>
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </div>
          {Boolean(cart.length) && (
            <div className='nav-cart'>
              <ModifiedLink to={"/"}>
                <button className='goto-shop'>
                  <i className='fas fa-chevron-left'></i>
                  Continue shopping
                </button>
              </ModifiedLink>
              <ModifiedLink to={"/checkout"}>
                <button className='goto-checkout'>
                  Proceed to Checkout
                  <i className='fas fa-chevron-left'></i>
                </button>
              </ModifiedLink>
            </div>
          )}
        </div>
        <div className='cart-summary'>
          <h5>Order summary</h5>
          <p>
            Shipping and additional costs are calculated based on values you
            have entered.
          </p>

          <div className='summary'>
            <div>
              <div className='details'>Order Subtotal</div>
              <span>${cartTotal()}.00</span>
            </div>
            <div>
              <div className='details'>Shipping and handling</div>
              <span>$20.00</span>
            </div>
            <div>
              <div className='details'>Tax</div>
              <span>$0.00</span>
            </div>
            <div>
              <div className='details'>Total</div>
              <strong>${cartTotal() + 20}.00</strong>
            </div>
          </div>
        </div>
      </div>
    </ShoppingCart>
  );
}

export default Cart;

const ShoppingCart = styled.div`
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.85rem;
    flex-direction: column;

    h2 {
      margin: 0 0 1.5rem;
      color: #333;
      font-size: 3.5rem;
      font-family: "Raleway";
      font-weight: 700;
    }
  }

  .cart {
    display: grid;
    gap: 1rem;
    width: 75%;
    height: 400px;
    margin: 1rem auto;
    grid-template-columns: 70% 1fr;

    .cart-list {
      position: relative;
      max-height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .cart-header {
        display: grid;
        grid-template-columns: 40% 60%;
        text-align: center;
        text-transform: uppercase;
        font-family: Poppins;
        padding: 0.8rem 0;
        font-weight: 600;
        font-size: 0.9rem;
        letter-spacing: 1.5px;
        background-color: #eff0f1;
        border-radius: 8px 0 0 0;

        & > div:last-child {
          display: grid;
          grid-template-columns: repeat(3, 2fr) 1fr;
        }
      }

      .cart-body {
        max-height: 300px;
        overflow: auto;
        .cart-item {
          display: grid;
          grid-template-columns: 40% 60%;
          margin: 0.5rem 1.2rem;

          & + * {
            border-top: 1px solid #e0e0e0;
          }

          .item-info {
            display: flex;
            padding: 1rem;
            gap: 1rem;

            img {
              width: 60px;
            }

            h5 {
              font-family: Poppins;
              font-size: 0.85rem;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1.1px;
            }

            span {
              &:first-of-type {
                margin-top: 4px;
              }

              display: block;
              font-size: 0.75rem;
              line-height: 1.2;
              opacity: 0.8;
            }
          }
          .purchase-info {
            display: grid;
            text-align: center;
            grid-template-columns: repeat(3, 2fr) 0.5fr;

            & > div {
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 300;
              font-size: 0.9rem;
              font-family: Poppins;

              input {
                width: 50%;
                text-align: center;
                padding: 0.5rem;
                outline: none;
                border: 1px solid #998;
                font-size: inherit;
                font-weight: 300;
              }

              button {
                border: none;
                outline: none;
                background-color: transparent;
                margin: 5px;
                font-weight: 500;
                color: #555;
              }
            }
          }
        }

        .empty-cart {
          height: 200px;
          display: flex;
          align-items: center;
          font-size: 3rem;
          justify-content: center;
          flex-direction: column;
          color: #b0bec5;
          font-family: Poppins;

          & > div {
            font-size: 0.9rem;
            font-weight: 500;
            color: #455a64;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: Poppins;

            &:hover {
              text-decoration: underline;
              color: #78909c;
            }
            i {
              margin-right: 10px;
              font-size: 0.75rem;
            }
          }
        }
      }
    }

    .nav-cart {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
      font-family: Poppins;

      .goto-shop {
        text-transform: uppercase;
        border: 0;
        outline: none;
        letter-spacing: 1.5px;
        opacity: 0.75;
        background-color: transparent;
        &:hover {
          text-decoration: underline;
        }

        i {
          margin-right: 5px;
          font-size: 0.75rem;
        }
      }

      .goto-checkout {
        padding: 2px 15px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-weight: 600;
        color: #ed6c5b;
        border: 1px solid #ed6c5b;
        border-radius: 3px;
        outline: none;
        background-color: #f3f3f3;

        &:hover {
          filter: brightness(95%);
        }

        i {
          transform: scaleX(-1);
          margin-left: 5px;
          font-size: 0.75rem;
        }
      }
    }

    .cart-summary {
      background-color: #eff0f1;
      padding: 1rem;
      height: 350px;
      border-radius: 0 8px 0 0;
      font-family: Poppins;

      h5 {
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 1px;
      }

      p {
        font-size: 0.75rem;
        opacity: 0.8;
        color: #333;
        margin-top: 1rem;
      }

      .summary {
        & > div {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          padding: 1rem 0;

          & + div {
            border-top: 1px solid #dde2e6;
          }

          strong {
            font-size: 0.85rem;
          }
        }
      }
    }
  }
`;

const ModifiedLink = styled(Link)`
  text-decoration: 0;
  color: unset;

  &:hover {
    color: unset;
  }
`;
