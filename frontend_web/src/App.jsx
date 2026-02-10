import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Identity from "./pages/identity";
import Details from "./pages/details";
import Recheck from "./pages/recheck";
import Success from "./pages/success";

const App = () => {
  return (
    <Router>
      <div className="flex w-full h-screen justify-center items-center flex-1 bg-[#D8D4FF]">
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/person" element={<Identity />}/>
          <Route path="/person/details/" element={<Details />}/>
          <Route path="/person/details/recheck/" element={<Recheck />}/>
          <Route path="/person/details/recheck/success/" element={<Success />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
