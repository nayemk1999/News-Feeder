import { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NewsBoard from "./components/NewsBoard";
import NewsContextProvider from "./context/newsContext";

function App() {
  return (
    <>
      <NewsContextProvider>
        {/* Navbar Starts */}
        <NavBar />

        {/* News Board Components */}
        <NewsBoard />
      </NewsContextProvider>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
