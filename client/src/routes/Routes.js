import About from "../Pages/Site/About/About";
import Home from "../Pages/Site/Home/Home";
import ProductDetail from "../Pages/Site/ProductDetail/ProductDetail";
import Products from "../Pages/Site/Products/Products";
import SiteRoot from "../Pages/Site/SiteRoot";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "productdetail",
        element: <ProductDetail />,
      },
    ],
  },
];
