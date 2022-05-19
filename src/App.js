
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (


    <div>
      <Router>
        <Navbar title="TextUtils" />
        <div className='container'>

          <Switch>
            <Route path="/">
              <TextForm heading="Enter The Text To Analyze" />
            </Route>
            <Route path="/about">
              <About />
            </Route>

          </Switch>

        </div>
      </Router>
    </div>

  );
}

export default App;
