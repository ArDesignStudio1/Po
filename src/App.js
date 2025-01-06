
import About from './About/About.js';
import Home from './Home/Home.js';
import Footer from './NavxF/Footer.js';
import Nav from './NavxF/Nav.js';
import Work from './Work/Work.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router > {/* Adjust this to your repo name  --> basename="" */}
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
