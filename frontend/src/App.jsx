import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Placeorder from "./pages/Placeorder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const COLORS = {
  primary: "#2C7A7B",
  primaryLight: "#38B2AC",
  primaryDark: "#285E61",
  secondary: "#ED8936",
  secondaryLight: "#F6AD55",
  secondaryDark: "#C05621",
  background: "#FFFFFF",
  backgroundAlt: "#F7FAFC",
  text: "#2D3748",
  textLight: "#718096",
  accent: "#E2E8F0",
};

// Apply global styles
const applyGlobalStyles = () => {
  // Add these styles directly to document head
  if (!document.getElementById("shop-global-styles")) {
    const style = document.createElement("style");
    style.id = "shop-global-styles";
    style.innerHTML = `
      body {
        background-color: ${COLORS.background};
        color: ${COLORS.text};
      }

      .toast-container {
        border-left: 4px solid ${COLORS.primary} !important;
      }

      .btn-primary {
        background-color: ${COLORS.primary};
        color: white;
      }

      .btn-primary:hover {
        background-color: ${COLORS.primaryLight};
      }

      .btn-secondary {
        background-color: ${COLORS.secondary};
        color: white;
      }

      input:focus, select:focus, textarea:focus {
        border-color: ${COLORS.primary};
        box-shadow: 0 0 0 1px ${COLORS.primaryLight};
      }
    `;
    document.head.appendChild(style);
  }
};

const App = () => {
  // Apply global styles when component mounts
  React.useEffect(() => {
    applyGlobalStyles();
  }, []);

  return (
    <div
      style={{
        backgroundColor: COLORS.background,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="toast-container"
      />
      <Navbar />
      <SearchBar />
      <main
        style={{
          flexGrow: 1,
          padding: "1.5rem 5vw",
          backgroundColor: COLORS.backgroundAlt,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productid" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer style={{ backgroundColor: COLORS.primaryDark, color: "white" }} />
    </div>
  );
};

export default App;
