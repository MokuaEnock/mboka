import { BrowserRouter, Routes, Route } from "react-router-dom";
// App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Landing from "./Pages/general/landing/landing";
import Notfound from "./Pages/general/notfound/notfound";
import Recruiter from "./Pages/recruiter/home/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Landing />} path="/"></Route>
        <Route element={<Notfound />} path="*"></Route>
        <Route element={<Recruiter />} path="/recruiter"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
