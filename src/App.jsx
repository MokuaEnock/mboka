import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
