import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; /*enrutamiento */
import productos from "./data/productos";
import ProductoView from "./views/ProductoView";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];
/* Recorrido de rutas */
productos.forEach((producto) => { 
  routes.push({
    path: producto.name,
    element: <ProductoView producto={producto} />,
  });
});

const router = createBrowserRouter(routes); //enrutamiento

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
