import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import CartContext from "../../context/CartContext";
import { generateOrder } from "../../services/order";

const ModifiedLink = styled(Link)`
  text-decoration: 0;
  color: unset;

  &:hover {
    color: unset;
  }
`;

const CheckoutContainer = styled.div`
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
    /* background-color: pink; */
    height: 400px;
    margin: 1rem auto;
    grid-template-columns: 70% 1fr;
    height: auto;

    .nav-cart {
      /* background-color: orange; */
      /* margin-top: 5rem; */
      /* position: absolute; */
      /* bottom: 0; */
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
        /* background-color: #f3f3f3; */
        background-color: transparent;

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
    .contact-form {
      padding-left: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h4 {
        font-family: "Raleway";
        font-weight: 700;
        font-size: 1.7rem;
        color: #333;
      }
      /* background-color: orange; */

      form {
        margin-top: 1rem;
        /* background-color: pink; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        font-family: Poppins;

        label {
          display: block;
          margin-bottom: 0.2rem;
          font-weight: 300;
          font-size: 0.9rem;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        input {
          width: 95%;
          height: 2.3rem;
          padding: 10px;
          outline: none;
          font-size: 0.9rem;
          /* border-color: #777; */
          border: 1px solid #999;
          color: #333;
          font-size: 0.85rem;

          &::placeholder {
            font-weight: 300;
            /* color: red; */
          }
          &:focus {
            border-color: #555;
          }

          &:valid {
            background-color: #e8eaf6;
          }
        }
      }
    }
    .cart-summary {
      /* background-color: lightgoldenrodyellow; */
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
            /* color: red; */
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

function Checkout() {
  const { cartTotal, cart, clear } = useContext(CartContext);
  // const [orderID, setOrderID] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const finishPurchase = () => {
    generateOrder(cart, cartTotal());
    setLoading(true);

    console.log("Despues");
    setTimeout(() => {
      clear();
      history.push("/checkout-confirmed");
    }, 2000);
  };

  return (
    <CheckoutContainer>
      <div className='header'>
        <div className='breadcrumb'>
          <div className='breadcrumb-item'>
            <ModifiedLink to='/'>Home</ModifiedLink>
          </div>
          <div className='breadcrumb-item'>
            <ModifiedLink to='/cart'>Shoping Cart</ModifiedLink>
          </div>
          <div className='breadcrumb-item active'>Shoping Cart</div>
        </div>

        <h2>Checkout</h2>
      </div>

      <div className='cart'>
        <div className='contact-form'>
          <div>
            <h4>Invoice Address</h4>
            <form id='invoice-form' action=''>
              <div className='form-field'>
                <label htmlFor='name'>Full name</label>
                <input
                  id='name'
                  name='fullname'
                  type='text'
                  required
                  placeholder='Joe Black'
                />
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Email address</label>
                <input
                  id='email'
                  type='text'
                  required
                  placeholder='joe.black@gmail.com'
                  name='email'
                />
              </div>
              <div className='form-field'>
                <label htmlFor='street'>Street</label>
                <input
                  id='street'
                  type='text'
                  required
                  placeholder='123 Main Street'
                  name='street'
                />
              </div>
              <div className='form-field'>
                <label htmlFor='city'>City</label>
                <input
                  id='city'
                  type='text'
                  required
                  placeholder='City'
                  name='city'
                />
              </div>
              <div className='form-field'>
                <label htmlFor='zip'>Zip</label>
                <input
                  id='zip'
                  type='text'
                  required
                  placeholder='Posta Code'
                  name='zipCode'
                />
              </div>
              <div className='form-field'>
                <label htmlFor='phone'>Phone Number</label>
                <input
                  id='phone'
                  type='number'
                  placeholder='Phone Number'
                  name='phoneNumber'
                  required
                />
              </div>
            </form>
          </div>
          <div className='nav-cart'>
            <ModifiedLink to={"/cart"}>
              <button className='goto-shop'>
                <i className='fas fa-chevron-left'></i>
                Back
              </button>
            </ModifiedLink>
            <ModifiedLink to={"/checkout"}>
              <button
                className='goto-checkout d-flex align-items-center'
                onClick={finishPurchase}>
                {loading ? (
                  <>
                    Processing purchase
                    <div
                      className='spinner-border spinner-border-sm'
                      style={{ marginLeft: "1rem" }}
                      role='status'>
                      <span className='sr-only'>Loading...</span>
                    </div>
                  </>
                ) : (
                  <>
                    Purchase
                    <i className='fas fa-chevron-left'></i>
                  </>
                )}
              </button>
            </ModifiedLink>
          </div>
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
    </CheckoutContainer>
  );
}

export default Checkout;
