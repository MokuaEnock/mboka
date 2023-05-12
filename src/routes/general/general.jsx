import { Route, Routes } from "react-router-dom";
import Footer from "../../Components/footer/footer";
import Header from "../../Components/header/header";
import ForgotPass from "../../Pages/auth/forgot";
import Login from "../../Pages/auth/login";
import PosterSignup from "../../Pages/auth/poster";
import FinderSignup from "../../Pages/auth/signup";
import Notfound from "../../Pages/general/notfound/notfound";
import Landing from "../../Pages/general/landing/landing";

export default function GeneralRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Notfound />} path="*" />
        <Route path="/auth">
          <Route path="forgot" element={<ForgotPass />} />
          <Route path="login" element={<Login />} />
          <Route path="finder" element={<FinderSignup />} />
          <Route path="poster" element={<PosterSignup />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
