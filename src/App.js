import './App.css';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar/>}/>
          <Route path="/about" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/about" element={<ContactPage/>}/>
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
