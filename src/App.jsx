import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Shop from "./components/Shop";
import CarsPage from "./pages/MoviesPage";
import Bikes from "./pages/BikesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="shop" element={<Shop />}>
          <Route
            index
            element={
              <h1 style={{ color: "#fff", fontSize: "1.2rem" }}>Choose any Category</h1>
            }
          />
          <Route path="movies" element={<CarsPage />} />
          <Route path="bikes" element={<Bikes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
