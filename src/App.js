import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<DashBoard />} />
          {/* <Route path="/bids" element={<Bids />} />
          <Route path="/user-dashboard" element={<DashBoard />} />
          <Route path="/about_project" element={<About />} />
          <Route path="/cv" element={
            <PrivateRoute component={CV} />
          } />
          <Route path="/preview" element={<Preview />} />
          <Route path="/term" element={<Term />} />
          <Route path="/add_crewing" element={<PrivateRoute component={Add} />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
