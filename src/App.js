import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResetPasswordLink from "./Component/ResetPasswordLink";
import ResetPasswordform from "./Component/ResetPasswordform";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Redirect from "./Component/Redirect";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route path='/redirect' element={<Redirect/>}/>
      <Route exact path="/resetpasslink" element={<ResetPasswordLink />} />
      <Route exact path="/resetpassform" element={<ResetPasswordform />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
