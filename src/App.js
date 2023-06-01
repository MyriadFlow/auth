import { Route, Routes } from 'react-router-dom';
import './App.css';
import ResetPasswordLink from './Component/ResetPasswordLink';
import ResetPasswordform from './Component/ResetPasswordform';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';

function App() {
  return (
      <Routes>
      <Route path="/" element={<SignIn />}  />
      <Route path="/resetpasslink" element={<ResetPasswordLink/>} />
      <Route path="/resetpassform" element={<ResetPasswordform/>} />
      <Route path="/signup" element={<SignUp/>} />
      </Routes>
  
  );
}

export default App;
