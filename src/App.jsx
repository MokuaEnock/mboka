import { BrowserRouter, Routes, Route } from "react-router-dom";
// App.js
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Landing from "./Pages/general/landing/landing";
import Notfound from "./Pages/general/notfound/notfound";
import Recruiter from "./Pages/recruiter/home/home";
import ForgotPass from "./Pages/auth/forgot";
import Login from "./Pages/auth/login";
import FinderSignup from "./Pages/auth/signup";
import PosterSignup from "./Pages/auth/poster";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route element={<Landing />} path="/"></Route>
        <Route element={<Notfound />} path="*"></Route>
        <Route element={<Recruiter />} path="/recruiter"></Route>
        <Route path="/auth">
          <Route path="forgot" element={<ForgotPass />} />
          <Route path="login" element={<Login />} />
          <Route path="finder" element={<FinderSignup />} />
          <Route path="poster" element={<PosterSignup />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
