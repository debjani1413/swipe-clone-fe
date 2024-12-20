import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Banner from "./components/banner";
import Invoice from "./pages/invoice";
import Customer from "./pages/customer";
import Product from "./pages/product";
import TabManager from "./components/tabManager";
import "./App.css";

function App() {
  const location = useLocation();
  const hideLayoutRoutes = ["/create"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        {!shouldHideLayout && <Sidebar />}
        <div className="sub-container">
          {!shouldHideLayout && <Banner />}
          <Routes>
            <Route path="/" element={<Invoice />} />
            <Route path="/products" element={<Product />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/create" element={<TabManager />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
