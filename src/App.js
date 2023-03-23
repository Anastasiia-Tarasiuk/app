import './App.css';
import { Routes, Route } from "react-router-dom";
import { RegisterForm } from './components/RegisterForm/RegisterForm';
import { PublicPage } from './pages/PublicPage/PublicPage';
import { PrivateMainPage } from './pages/PrivateMainPage/PrivateMainPage';
import { NotFound } from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import { AppWrapper } from "./App.styled"; 
import { PrivateSearchPage } from './pages/PrivateSearchPage/PrivateSearchPage';
import {PrivateUserPage} from "./pages/PrivateUserPage/PrivateUserPage";
import {SharedLayout} from "./components/SharedLayout/SharedLayout";

function App() {

  return <AppWrapper>
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="register" element={<RegisterForm />} />
      <Route  path="/" element={<SharedLayout/>}>
        <Route path="main" element={
          <PrivateRoute>
            <PrivateMainPage/>
          </PrivateRoute>}
        />
        <Route path="search" element={
          <PrivateRoute>
            <PrivateSearchPage/>
          </PrivateRoute>}
        />
        <Route path="user" element={
          <PrivateRoute>
            <PrivateUserPage/>
          </PrivateRoute>}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </AppWrapper>
}

export default App;
