import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FiHome, FiBook, FiPhone, FiDollarSign, FiTool, FiActivity, FiDroplet, FiZap, FiCoffee, FiStar } from 'react-icons/fi';
import WaterExpenses from './expenses/water';
import ElectricExpenses from './expenses/electricity'; 
import FoodExpenses from './expenses/food';
import MaintenanceExpenses from './expenses/maintenance';
import MiscellaneousExpenses from './expenses/misc';
import './App.css';

// Placeholder components for each page
function Home() {
  return <div style={{ padding: 20 }}>Home Page</div>;
}
const About = () => <div style={{ padding: 20 }}>About Us</div>;
const Contact = () => <div style={{ padding: 20 }}>Contact Us</div>;
const Electric = () => <div style={{ padding: 20 }}>Electric Expenses</div>;
const Food = () => <div style={{ padding: 20 }}>Food Expenses</div>;
const Maintenance = () => <div style={{ padding: 20 }}>Maintenance Expenses</div>;
const Miscellaneous = () => <div style={{ padding: 20 }}>Miscellaneous Expenses</div>;
const Dashboard = () => <div style={{ padding: 20 }}>Dashboard</div>;

function App() {
  const [showExpenses, setShowExpenses] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <h2>BudgetBuddy</h2>
          <ul>
            <li><Link to="/" className="nav-link"><FiHome /> Home</Link></li>
            <li><Link to="/dashboard" className="nav-link"><FiActivity /> Dashboard</Link></li>
            <li onClick={() => setShowExpenses(!showExpenses)} style={{ cursor: 'pointer' }} className="nav-link">
              <FiDollarSign /> Expenses
            </li>
            {showExpenses && (
              <ul>
                <li><Link to="/expenses/water" className="nav-link"><FiDroplet /> Water</Link></li>
                <li><Link to="/expenses/electricity" className="nav-link"><FiZap /> Electricity</Link></li>
                <li><Link to="/expenses/food" className="nav-link"><FiCoffee /> Food</Link></li>
                <li><Link to="/expenses/maintenance" className="nav-link"><FiTool /> Maintenance</Link></li>
                <li><Link to="/expenses/miscellaneous" className="nav-link"><FiStar /> Miscellaneous</Link></li>
              </ul>
            )}
            <li><Link to="/about" className="nav-link"><FiBook /> About</Link></li>
            <li><Link to="/contact" className="nav-link"><FiPhone /> Contact Us</Link></li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/expenses/water" element={<WaterExpenses />} />
            <Route path="/expenses/electricity" element={<ElectricExpenses />} />
            <Route path="/expenses/food" element={<FoodExpenses />} />
            <Route path="/expenses/maintenance" element={<MaintenanceExpenses />} />
            <Route path="/expenses/miscellaneous" element={<MiscellaneousExpenses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
