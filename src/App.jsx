import React from 'react';
import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return <div className="main-content">
    <>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  </div>;
}

export default App;
