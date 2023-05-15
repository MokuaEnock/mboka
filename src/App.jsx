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
import RecruiterJobs from "./Pages/recruiter/jobs/jobs";
import RecruiterJobNew from "./Pages/recruiter/jobs/new/newjob";
import RecruiterJobDetail from "./Pages/recruiter/jobs/detail/detail";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route element={<Landing />} path="/"></Route>
        <Route element={<Notfound />} path="*"></Route>
        <Route path="/recruiter">
          <Route element={<Recruiter />} path="" />
          <Route path="jobs">
            <Route element={<RecruiterJobs />} path="" />
            <Route element={<RecruiterJobNew />} path="new"></Route>
            <Route element={<RecruiterJobDetail />} path=":id"></Route>
          </Route>
        </Route>
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
