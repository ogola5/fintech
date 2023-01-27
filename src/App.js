import './App.css';
// import About from './components/About';
// import ContactPage from './components/ContactPage';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignUp from './components/SignUp';
import { Navbar } from 'react-bootstrap';
import Business from './components/Business';
import Personal from './components/Personal';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/business" element={<Business/>}/>
          <Route path="/personal" element={<Personal/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
