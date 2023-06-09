import React from "react";
import styled from "styled-components";
import {useProductContext}  from "./context/productcontex";

const Products =  () => {
  const products =  useProductContext().products;
  console.log(useProductContext());
  return <>
      { (useProductContext().isLoading)===true ? <h2 style={{textAlign: 'center', marginTop: '5px'}}>Loading...</h2> : <section style={{backgroundColor: '#eee'}}>
        <div className="container py-5">
          {products.map((ele, id)=>{
            return (
              <div className="row justify-content-center mb-3" key={id}>
                <div className="col-md-12 col-xl-10">
                  <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                      <div className="row" >
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                          <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src={ele.image}
                              className="w-100" />
                            <a href="">
                              <div className="hover-overlay">
                                <div className="mask" style={{backgroundColor: 'rgb(253, 253, 253)'}}></div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <h5>{ele.name}</h5>
                          <div className="d-flex flex-row">
                            <div className="text-danger mb-1 me-2">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <span>310</span>
                          </div>
                          <div className="mt-1 mb-0 text-muted small">
                            {/* <span>100% cotton</span>
                            <span className="text-primary"> • </span>
                            <span>Light weight</span>
                            <span className="text-primary"> • </span>
                            <span>Best finish<br /></span> */}
                            {ele.colors.map((ele, id)=>{
                              return <span id={id}> • </span>
                            })}
                            
                          </div>
                          <div className="mb-2 text-muted small">
                            <span>Unique design</span>
                            <span className="text-primary"> • </span>
                            <span>For men</span>
                            <span className="text-primary"> • </span>
                            <span>Casual<br /></span>
                          </div>
                          <p className="text-truncate mb-4 mb-md-0">
                            {ele.description}
                          </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                          <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1">Rs.{ele.price}</h4>
                            <span className="text-danger"><s>Rs.{ele.price + 10000}</s></span>
                          </div>
                          <h6 className="text-success">Free shipping</h6>
                          <div className="d-flex flex-column mt-4">
                            <a className="btn btn-primary btn-sm mt-2" href={`/singleproduct/${ele.id}`}>
                              View Product
                            </a>
                            {/* <a className="btn btn-outline-primary btn-sm mt-2" href="/cart">
                              Add to cart
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )})
          }
          
        </div>
      </section> }    
    </>
};



export default Products;
