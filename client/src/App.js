import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ListParts from './pages/ListParts';
import ListPurchaseOrders from './pages/ListPOs';
import FindPO from './pages/FindPO';
import ManagePO from './pages/ManagePO'; // Import the combined component

function App() {
  return (
    <Router>
      <div className="page-container">
        <NavBar />
        <div className="content-wrap">
          <Routes>
            <Route path="/list-parts" element={<ListParts />} />
            <Route path="/list-purchase-orders" element={<ListPurchaseOrders />} />
            <Route path="/find-po" element={<FindPO />} />
            <Route path="/manage-po" element={<ManagePO />} />
            <Route path="/" element={
              <div className="container">
                <p>Order parts through our website!</p>
                <p>Welcome to the company X website! We are a company that provides tools and you can submit purchase order using the links at the top of the page.</p>
                <p>Click links on top navigation bar to perform the actions.</p>
              </div>
            } />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
