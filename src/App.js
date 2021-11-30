import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
        
          <Route path="/" element={<Home />}/> {/* Home */}
          <Route path="/search" element={<SearchPage />}/> {/* Search Page */}
            
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
