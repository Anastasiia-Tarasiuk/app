import './App.css';
import { Routes, Route } from "react-router-dom";
import { RegisterForm } from './components/RegisterForm';
import { PublicPage } from './components/PublicPage/PublicPage';
import { PrivatePage } from './components/PrivatePage/PrivatePage';
import { NotFound } from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import {AppWrapper} from "./App.styled";

function App() {
   return <AppWrapper>
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="main" element={
        <PrivateRoute>
          <PrivatePage />
        </PrivateRoute>} />
      <Route path="*" element={<NotFound />} />      
    </Routes>
    </AppWrapper>
}

export default App;
