import React from "react";
import Home from "./Home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Speech from "./Recorder/Speech";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { Data } from "./shared/Data";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home products={Data[0].products} />} />
      <Route path="record" element={<Speech />} />
      <Route path="/register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </>,
  ),
);

function Main(props) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Main;
