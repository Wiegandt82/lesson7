import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './contents/SignUp';
import SignIn from './contents/SignIn';
import Products from './contents/Products';
import AppLayout from './contents/AppLayout';
import ContactUs from './contents/ContactUs';
import Dashboard from './contents/Dashboard';
import CreateProduct from './contents/CreateProduct';
import Orders from './contents/Orders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="Products" element={<Products />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="CreateProduct" element={<CreateProduct />} />
        <Route path='Orders' element={<Orders />} />
      </Routes>
    </AppLayout>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
