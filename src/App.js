import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__page">
        <Sidebar />

        <Recommended />
      </div>
      <Footer />
    </div>
  );
}

export default App;
