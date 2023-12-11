import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  return(
  <>
    <Router>
      <NavBar />
      <AnimatedRoutes />
    </Router>
  </>)
}

export default App
