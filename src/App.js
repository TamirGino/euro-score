import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/Navigation/NavBar';
import PagesRouter from './Components/Routes/PagesRouter';
import { AuthContextProvider } from './Context/AuthContex';

function App() {
  return (
    <AuthContextProvider>
      <Router>
          <NavBar />
          <PagesRouter/>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
