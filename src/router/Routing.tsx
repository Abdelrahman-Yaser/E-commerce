import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Productlist } from "../components/pages/Product";

import { Home } from "../components/pages/Home";
import { Layout } from "../components/pages/Layout";
import { Error } from "../components/pages/Error";
import Cart from "../components/pages/CArt";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />} errorElement={<Error />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Productlist />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </>
  )
);
