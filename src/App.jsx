import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Landing from "./Pages/general/landing/landing";
import Notfound from "./Pages/general/notfound/notfound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Landing />} path="/"></Route>
        <Route element={<Notfound />} path="*"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
