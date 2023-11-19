import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
  emptyCart,
} from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import "./cardstyle.css";
import { toast } from "react-hot-toast";

const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  //handling decrement quantity in cart
  const handleDecrementQty = (e) => {
    console.log(e);
    if (e.qnty >= 2) {
      console.log("decrement qty", e);
      dispatch(decrementQuantity(e));
    } else {
      console.log("decrement qty", e);
      document.getElementById("decrementBtn").disabled = true;
    }
  };
  //handling increment quantity in cart
  const handleIncrementQty = (e) => {
    document.getElementById("decrementBtn").disabled = false;
    console.log(e);
    dispatch(incrementQuantity(e));
  };
  //handling deletion from  cart
  const handleDeleteFromCart = (e) => {
    console.log(e);
    dispatch(deleteProduct(e));
    toast.success("Item is removed from cart");
  };
  //emptying cart
  const emptyCarthandler = () => {
    dispatch(emptyCart());
    toast.success("Cart is emptied ! :(");
  };

  const summarizedValues = () => {
    let tempTotalQty = 0;
    let tempTotalPrice = 0;
    carts.map((element) => {
      tempTotalQty = tempTotalQty + element.qnty;
    });
    carts.map((element1) => {
      tempTotalPrice = tempTotalPrice + element1.qnty * element1.price;
    });
    setTotalPrice(tempTotalPrice);
    setTotalQty(tempTotalQty);
    console.log("totalQty", totalQty);
    console.log("totalPrice", totalPrice);
  };

  useEffect(() => summarizedValues(), [summarizedValues]);
  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 carddetails">
          <div className="card">
            <div className="card-header bg-dark p-3 ">
              <div className="card-header-flex">
                <h5 className="text-white m-0">Cart Calculation</h5>
                {carts.length > 0 ? (
                  <button
                    className="btn btn-danger mt-0 btn-sm"
                    onClick={() => emptyCarthandler()}
                  >
                    <i className="fa fa-trash-alt mr-2"></i>
                    <span>Empty Cart</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {carts.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p>Your cart is empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((item) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <button
                                className="prdct-delete"
                                onClick={() => handleDeleteFromCart(item)}
                              >
                                <i className="fa fa-trash-alt"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={item.imgdata} alt={item.dish} />
                              </div>
                            </td>
                            <td>
                              <div className="product-name">
                                <p>{item.dish}</p>
                              </div>
                            </td>
                            <td>{item.price}</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button
                                  className="prdct-qty-btn"
                                  id="decrementBtn"
                                  type="button"
                                  onClick={() => handleDecrementQty(item)}
                                >
                                  <i className="fa fa-minus" />
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  value={item.qnty}
                                  disabled
                                />
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={() => handleIncrementQty(item)}
                                >
                                  <i className="fa fa-plus" />
                                </button>{" "}
                              </div>
                            </td>
                            <td className="text-right">
                              ₹&nbsp;{item.qnty * item.price}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Items In Cart <span className="ml-2 mr-2">:</span>
                        <span style={{ fontWeight: "1000" }}>{totalQty}</span>
                      </th>
                      <th className="text-right">
                        Total Price<span className="ml-2 mr-2">:</span>
                        <span style={{ fontWeight: "1000" }}>
                          ₹ {totalPrice}
                        </span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
