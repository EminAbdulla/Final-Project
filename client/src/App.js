import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/Routes";
import { Toaster, toast } from "react-hot-toast";
import "./App.scss";
function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
