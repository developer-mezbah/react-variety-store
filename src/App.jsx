import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Route/Router";
import UserContextProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";
import {Helmet} from "react-helmet";
import React from "react"

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home || Variety Store</title>
      </Helmet>
      <div className="container mx-auto">
        <UserContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </UserContextProvider>
        <Toaster />
      </div>
    </>
  );
}

export default App;
