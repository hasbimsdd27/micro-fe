import React, { useEffect, useState } from "react";
import { cart, clearCart } from "./Cart";
import { currency } from "home/products";

const MiniCart = () => {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  });

  if (!items) return null;
  return (
    <>
      <span onClick={() => setShowCart((prev) => !prev)} id="showcart_span">
        <i
          className="ri-shopping-cart-2-fill text-2xl font-normal"
          id="showcart"
        ></i>
        {items.length}
      </span>
      {showCart && (
        <>
          <div
            className="absolute p-5 border-4 border-blue-800 bg-white rounded-md text-black font-normal"
            style={{
              width: 300,
              top: "2rem",
              left: -250,
            }}
          >
            <div
              className="grid gap-3 text-sm"
              style={{
                gridTemplateColumns: "1fr 3fr 10fr 2fr",
              }}
            >
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <div>{item.quantity}</div>
                  <img src={item.image} alt={item.name} className="" />
                  <div>{item.name}</div>
                  <div className="text-right">
                    {currency.format(item.quantity * item.price)}
                  </div>
                </React.Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div className="font-bold text-black">
                {currency.format(
                  items.reduce((a, v) => a + v.quantity * v.price, 0)
                )}
              </div>
            </div>
            <div className="flex">
              <div className="flex-grow">
                <button
                  id="clearCart"
                  className="bg-white border text-sm border-green-800 text-green-800 py-2 px-5 rounded-md"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex-end">
                <button
                  id="clearCart"
                  className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
                  onClick={clearCart}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MiniCart;
