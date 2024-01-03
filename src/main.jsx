import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import About from './Components/About/About.jsx';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Github from './Components/Github/Github.jsx';

const router = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github/>}/>
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {router}
    </Router>
  </React.StrictMode>
);
