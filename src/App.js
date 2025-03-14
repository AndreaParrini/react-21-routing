import { createBrowserRouter, RouterProvider, /* createRoutesFromElements, Route */ } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

/* ALTRO MODO PER DEFINIRE LE ROTTE
Se si usa questo modo vanno importati anche {createRoutesFromElements, Route} from "react-router-dom";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
)

const router = createBrowserRouter(routeDefinitions); */

const router = createBrowserRouter([
  {path: '/', element: <HomePage /> },
  {path: '/products', element: <ProductsPage /> },

])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
