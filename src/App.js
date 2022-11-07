// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { PublicPage } from './components/PublicPage';
import { PrivatePage } from './components/PrivatePage';
import { NotFound } from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
// import { Toaster } from 'react-hot-toast';


function App() {
  return <>
    {/* <div><Toaster/></div> */}
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="main" element={
        <PrivateRoute>
          <PrivatePage />
        </PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
      {/* <PrivateRoute path="main"><PrivatePage /></PrivateRoute> */}

      
    </Routes>
    </>
}

export default App;
