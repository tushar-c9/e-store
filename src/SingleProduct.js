import styled from "styled-components";
import { useProductContext } from "./context/productcontex";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "./context/cart_context";

const SingleProduct = () => {
  // const prod = useProductContext();
  const products = useProductContext().products;
  const prodId = useParams().id;

  /**** check if product loaded or not ****/
  let isProducts = products.length === 0;      
  let prodLoad = isProducts? true : (products.filter((ele)=> ele.id==prodId));
  // console.log(prodLoad);
  const { state, addToCart } = useCartContext();

  // const [cartProd, setCartProd] = useState([]);
  const [prodQuantity, setProdQuantity] = useState(0);

  function addProd(prod){
    addToCart(prod);
    // console.log(state); 
    // setCartProd((prev)=>[...prev, prod]);
    // console.log(cartProd); 
    // // localStorage.setItem('product',  JSON.stringify(cartProd));
    setProdQuantity(prodQuantity + 1);
  }

  return <>
    {(prodLoad===true) ? <h3 style={{textAlign: 'center', marginTop: '5px'}}>Loading...</h3> : (<section style={{backgroundColor: '#eee'}}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card" style={{borderRadius: '15px'}}>
              <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light">
                <img src={prodLoad[0].image}
                  style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} className="img-fluid"
                  alt="Laptop" />
                <a href="">
                  <div className="mask"></div>
                </a>
              </div>
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <p><a href="" className="text-dark"></a>{prodLoad[0].name}</p>
                    <p className="small text-muted">{prodLoad[0].company}</p>
                  </div>
                  <div>
                    <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="small text-muted">Rated 4.0/5</p>
                  </div>
                </div>
              </div>
              <hr className="my-0" />
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between">
                  <p><a href="" className="text-dark">$3,999</a></p>
                  <p className="text-dark">#### 8787</p>
                </div>
                <p className="small text-muted">VISA Platinum</p>
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                  <a href="/cart" className="text-dark fw-bold">Cart</a>
                  <button type="button" onClick={()=>addProd(prodLoad[0])} className="btn btn-primary">{(prodQuantity==0)? "Add to Cart ": `Added to cart: ${prodQuantity}`}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)}
  </>;
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
