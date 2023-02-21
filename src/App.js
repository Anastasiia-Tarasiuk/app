import './App.css';
import { Routes, Route } from "react-router-dom";
import { RegisterForm } from './components/RegisterForm';
import { PublicPage } from './components/PublicPage/PublicPage';
import { PrivateMainPage } from './components/PrivateMainPage/PrivateMainPage';
import { NotFound } from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import { AppWrapper } from "./App.styled"; 
import { PrivateSearchPage } from './components/PrivateSearchPage/PrivateSearchPage';
import { MODAL_SIZE } from './variables/variables';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

function App() {

  let modalWidthAndHeight = null;

  function setModalSize(modalSize) {
    const screenWidth = window.innerWidth;
    const keys = Object.keys(modalSize);
    for (const key of keys) {
      if (key <= screenWidth) {
        modalWidthAndHeight = modalSize[key];
      }
    }
  }

  setModalSize(MODAL_SIZE);


  return <AppWrapper>
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="main" element={
        <PrivateRoute>
          <PrivateMainPage modalSize={modalWidthAndHeight} />
        </PrivateRoute>}
      />
      <Route path="search" element={
        <PrivateRoute>
          <PrivateSearchPage modalSize={modalWidthAndHeight}/>
        </PrivateRoute>}
      />
      <Route path="*" element={<NotFound />} />      
    </Routes>
    </AppWrapper>
}

export default App;
