import React from "react";
import Home from "./Home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Speech from "./Recorder/Speech";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="record" element={<Speech />} />
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
