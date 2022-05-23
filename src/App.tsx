import React from "react";
import Basket from "./components/Basket/Basket";
import Order from "./components/Order/Order";
import { Route, Routes } from "react-router-dom";
import OrdersHistory from "./components/OrdersHistory/OrdersHistory";
import Content from "./components/Content/Content";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Content />} />
        <Route path="basket" element={<Basket />} />
        <Route path="order" element={<Order />} />
        <Route path="history-order" element={<OrdersHistory />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
