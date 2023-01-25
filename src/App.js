import './App.css';
import About from './components/About';
// import ContactPage from './components/ContactPage';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
