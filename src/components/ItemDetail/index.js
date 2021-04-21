import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemCount from "../ItemCount";

const ModifiedLink = styled(Link)`
  color: unset;
  text-decoration: none;

  &:hover {
    color: initial;
    text-decoration: underline;
  }
`;
function ItemDetail({ item }) {
  const [count, setCount] = useState();

  return (
    <section className='item-section'>
      <div className='item-img'>
        <img src={item.imageUrl} alt='asd' />
      </div>
      <div className='item-info'>
        <div className='breadcrumb'>
          <div className='breadcrumb-item'>
            <ModifiedLink to={"/"}>Home</ModifiedLink>
          </div>
          <div className='breadcrumb-item'>
            <ModifiedLink to={`/category/${item.category.categoryID}`}>
              {item.category.categoryName}
            </ModifiedLink>
          </div>
          <div className='breadcrumb-item'>{item.productName.shortName}</div>
        </div>
        <div className='item-body'>
          <h3 className='item-name'>{item.productName.longName}</h3>
          <div className='price-n-rate'>
            <span>${item.productPrice}</span>
            <div className='rating'>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star dif'></i>
            </div>
          </div>
          <p>{item.description.shortDescription}</p>
          {item.freeShipping && (
            <div>
              <i className='fa fa-truck mx-2'></i>
              Envio{" "}
              <strong className='text-success font-weight-bold text-uppercase'>
                GRATIS
              </strong>{" "}
              en Argentina
            </div>
          )}
        </div>
        <div className='purchase-details'>
          <div className='purchase-option'>
            <h5>
              Size <span>(required)</span>
            </h5>
            <select name='size' id='size' defaultChecked={"Select Size"}>
              <option>Select Size</option>
              {item.stock.sizes.map(size => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className='purchase-option'>
            <h5>
              Color <span>(required)</span>
            </h5>
            <select name='szie' id='size'>
              <option value='s'>Negro</option>
              <option value='m'>Blanco</option>
            </select>
          </div>
          <div className='purchase-option'>
            <h5>
              Quantity <span>(required)</span>
            </h5>
            <ItemCount
              initial={0}
              stock={item.stock.stockAvailable}
              onAdd={setCount}
              item={item}
            />
            <button
              className='button submit-purchase button-main-outline'
              disabled={!count}>
              <Link
                to='/cart'
                style={{ textDecoration: "none", color: "unset" }}>
                Terminar mi Compra
              </Link>
              <i className='fas fa-chevron-right'></i>
            </button>
          </div>
        </div>
      </div>

      <div className='item-details'>
        <div className='wrap'>
          <div className='tabset'>
            <input
              type='radio'
              name='tabset'
              id='tab1'
              aria-controls='description'
              defaultChecked
            />
            <label htmlFor='tab1'>Description</label>

            <input
              type='radio'
              name='tabset'
              id='tab2'
              aria-controls='aditional-info'
            />
            <label htmlFor='tab2'>Aditional Information</label>

            <input
              type='radio'
              name='tabset'
              id='tab3'
              aria-controls='review'
            />
            <label htmlFor='tab3'>Review</label>

            <div className='tab-panels'>
              <section id='description' className='tab-panel'>
                <h2>About</h2>
                <p>{item.description.longDescription}</p>

                <h4>Features:</h4>
                <ul className='features'>
                  <li>
                    Ellip-Tec II Ratchet System for easy, secure, tool-less face
                    shield changes in seconds
                  </li>
                  <li>
                    Optically-clear, anti-scratch hardened coating, 100% UV
                    protected face shield with state-of-the art fog free
                    technology
                  </li>
                  <li>
                    Removable and washable KwikWick II anti-microbial fabric
                    keeps you cool and dry in warm weather, warm in cool weather
                  </li>
                  <li>
                    Kwikfit cheek pads allow easy on and off of the most common
                    styles of eye glasses
                  </li>
                  <li>
                    Tabs located on the neck roll allow easy removal of the
                    cheek pads by trained emergency medical personnel
                  </li>
                  <li>
                    Aero tuned ventilation system uses a large top vent and
                    mouth vents engineered to allow more airflow to the riders
                    head while maintaining low noise levels
                  </li>
                  <li>
                    Face shield lock system securely locks the face shield in
                    place
                  </li>
                  <li>Speaker pockets</li>
                  <li>2 shell sizes (XS-MD, LG-3XL)</li>
                  <li>SNELL M2015 (XS-2XL only) and DOT approved</li>
                </ul>
              </section>

              <section id='aditional-info' className='tab-panel'>
                <h2>Aditional information</h2>
                <div className='table'>
                  <div className='column'>
                    <div className='fila'>
                      <h4>PRODUCT #</h4>
                      <span>orem ipsum dolor sit amet</span>
                    </div>
                    <div className='fila'>
                      <h4>AVAILABLE PACKAGING</h4>
                      <span>LOLDuis aute irure dolor in reprehenderit</span>
                    </div>
                    <div className='fila'>
                      <h4>WEIGHT</h4>
                      <span>dolor sit amet Lorem, ipsum.</span>
                    </div>
                    <div className='fila'>
                      <h4>SUNT IN CULPA QUI</h4>
                      <span>Lorem ipsum dolor sit amet</span>
                    </div>
                  </div>
                  <div className='column'>
                    <div className='fila'>
                      <h4>WEIGHT</h4>
                      <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                    <div className='fila'>
                      <h4>SUNT IN CULPA QUI</h4>
                      <span>Lorem ipsum dolor sit amet</span>
                    </div>
                    <div className='fila'>
                      <h4>WEIGHT</h4>
                      <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                    <div className='fila'>
                      <h4>AVAILABLE PACKAGING</h4>
                      <span>LOLDuis aute irure dolor in reprehenderit</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id='review' className='tab-panel'>
                <div className='reviewer'>
                  <div className='reviewer__image'>
                    <div className='img-wrapper'>
                      <img src='//i.pravatar.cc/300?img=3' alt='' />
                    </div>
                    <span className='date'>December 2020</span>
                  </div>
                  <div className='reviewer__data'>
                    <h4 className='name'>Han Solo</h4>
                    <div className='stars'>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star dif'></i>
                    </div>
                    <p className='review'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sint voluptatibus debitis, aliquid totam nisi esse!
                      Corporis deserunt vitae fuga porro blanditiis maxime
                      architecto at explicabo.
                    </p>
                  </div>
                </div>
                <div className='reviewer'>
                  <div className='reviewer__image'>
                    <div className='img-wrapper'>
                      <img src='//i.pravatar.cc/300?img=17' alt='' />
                    </div>
                    <span className='date'>July 2020</span>
                  </div>
                  <div className='reviewer__data'>
                    <h4 className='name'>Luke Skywalker</h4>
                    <div className='stars'>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                    </div>
                    <p className='review'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Neque facilis dolores laboriosam, odio ipsum impedit est,
                      quisquam quam beatae consequatur debitis distinctio
                      officia rem eum!
                    </p>
                  </div>
                </div>

                <div className='reviewer'>
                  <div className='reviewer__image'>
                    <div className='img-wrapper'>
                      <img src='//i.pravatar.cc/300?img=21' alt='' />
                    </div>
                    <span className='date'>October 2019</span>
                  </div>
                  <div className='reviewer__data'>
                    <h4 className='name'>Princess Leia</h4>
                    <div className='stars'>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star dif'></i>
                    </div>
                    <p className='review'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sint voluptatibus debitis, aliquid totam nisi esse!
                      Corporis deserunt vitae fuga porro blanditiis maxime
                      architecto at explicabo.
                    </p>
                  </div>
                </div>

                <div className='reviewer'>
                  <div className='reviewer__image'>
                    <div className='img-wrapper'>
                      <img src='//i.pravatar.cc/300?img=13' alt='' />
                    </div>
                    <span className='date'>August 2019</span>
                  </div>
                  <div className='reviewer__data'>
                    <h4 className='name'>Jabba Hut</h4>
                    <div className='stars'>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star dif'></i>
                      <i className='fas fa-star dif'></i>
                      <i className='fas fa-star dif'></i>
                    </div>
                    <p className='review'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sint voluptatibus debitis, aliquid totam nisi esse!
                      Corporis deserunt vitae fuga porro blanditiis maxime
                      architecto at explicabo.
                    </p>
                  </div>
                </div>

                <div className='reviewer'>
                  <div className='reviewer__image'>
                    <div className='img-wrapper'>
                      <img src='//i.pravatar.cc/300?img=10' alt='' />
                    </div>
                    <span className='date'>January 2018</span>
                  </div>
                  <div className='reviewer__data'>
                    <h4 className='name'>Han Solo</h4>
                    <div className='stars'>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star dif'></i>
                      <i className='fas fa-star dif'></i>
                    </div>
                    <p className='review'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sint voluptatibus debitis, aliquid totam nisi esse!
                      Corporis deserunt vitae fuga porro blanditiis maxime
                      architecto at explicabo.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* End Tabset */}
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
