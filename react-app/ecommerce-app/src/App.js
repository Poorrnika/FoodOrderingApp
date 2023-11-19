import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CartDetails from "./components/CartDetails";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Header />
      <div style={{ padding: "25px" }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </div>
  );
}

export default App;
