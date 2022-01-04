import React, { useState } from "react";
import Nav from "./Components/Nav";
import "./App.css";
import ItemPage from "./Components/ItemPage";
import { items } from "./static-data";
import CartPage from "./Components/CartPage";

const App = () => {
  const [activeTab, setActiveTab] = useState("Items");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const removeItem = (item) => {
    var index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      setCart((prevCart) => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }
  };
  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          onRemoveItem={removeItem}
          cart={summarizeCart(cart)}
        />
      </main>
    </div>
  );
};
export default App;

const Content = ({ tab, onRemoveItem, onAddToCart, cart }) => {
  switch (tab) {
    case "Items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    // break;
    case "Cart":
      return (
        <CartPage
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}
        />
      );
    // break;
    default:
  }
};

const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0,
    };
    summary[item.id].count++;
    return summary;
  }, {});
  return Object.values(groupedItems);
};
