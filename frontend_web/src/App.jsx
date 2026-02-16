import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/protectedRoutes";
import Welcome from "./pages/welcome";
import Identity from "./pages/identity";
import Details from "./pages/details";
import Recheck from "./pages/recheck";
import Success from "./pages/success";
import Login from "./pages/login";
import Admindetails from "./pages/admindetails";
import Adminhome from "./pages/adminhome";

const App = () => {
  return (
    <Router>
      <div className="flex w-full h-screen justify-center items-center flex-1 bg-[#D8D4FF]">
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/person" element={<Identity />}/>
          <Route path="/person/details/" element={<Details />}/>
          <Route path="/person/details/recheck/" element={<Recheck />}/>
          <Route path="/person/details/recheck/success/" element={<Success />}/>

          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Adminhome />} />
            <Route path="/home/details" element={<Admindetails />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
