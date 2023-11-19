import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardData.js";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Home = () => {
  const [cardsData, setCardData] = useState(Cardsdata);
  const dispatch = useDispatch();

  //handling add to cart

  const handleAddToCart = (e) => {
    console.log(e);
    dispatch(addToCart(e));
    toast.success("Item is added to cart successfully!");
  };
  return (
    <>
      <section className="item-section mt-4 container">
        <div></div>
        <h2 className="px-4" style={{ fontWeight: "400" }}>
          Order your food from your fav restaurants !!
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cardsData.map((element) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />
                  <div className="card_body">
                    <div className="first-part d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span>{element.rating}&nbsp;★</span>
                    </div>
                    <div className="second-part d-flex justify-content-between">
                      <h5>{element.address}</h5>
                      <span className="text-right">₹&nbsp;{element.price}</span>
                    </div>
                    <div className="extra"></div>
                    <div className="third-part d-flex justify-content-center align-items-center">
                      <Button
                        style={{
                          width: "150px",
                          background: "coral",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={() => handleAddToCart(element)}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
