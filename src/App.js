import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  // Lazy Loading
  const About = lazy(() => import("./components/About"));
  const ProductsPage = lazy(() => import("./components/ProductsPage"));
  const Contact = lazy(() => import("./components/Contact"));
  const SingleProduct = lazy(() => import("./components/SingleProduct"));
  const Cart = lazy(() => import("./components/Cart"));
  const ErrorPage = lazy(() => import("./components/ErrorPage"));

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div
      className={
        "font-sans" +
        (isMenuOpen
          ? " h-screen sm:h-auto overflow-hidden sm:overflow-auto"
          : "")
      }
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense
                fallback={<div className="mt-20 h-[50vh]">Loading...</div>}
              >
                <About />
              </Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <Suspense
                fallback={<div className="mt-20 h-[50vh]">Loading...</div>}
              >
                <ProductsPage />
                <Footer />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense
                fallback={<div className="mt-20 h-[50vh]">Loading...</div>}
              >
                <Contact />
                <Footer />
              </Suspense>
            }
          />
          <Route
            path="/singleproduct/:id"
            element={
              <Suspense
                fallback={<div className="mt-20 h-[50vh]">Loading...</div>}
              >
                <SingleProduct />
                <Footer />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense
                fallback={<div className="mt-20 h-[50vh]">Loading...</div>}
              >
                <Cart />
                <Footer />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense
                fallback={<div className="mt-20 h-[50vh]">Loading...</div>}
              >
                <ErrorPage />
                <Footer />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
