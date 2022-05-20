
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (


    <div>
      <Router>
        <Navbar title="TextUtils" />
        <div className='container'>


        {/* for less than v6 */}
          {/* <Switch>
            <Route path="/">
              <TextForm heading="Enter The Text To Analyze" /> 
            </Route>
            <Route path="/about">
            <About />
            </Route>

          </Switch> */}

          <Routes>
        <Route path="/about" caseSensitive={false} element={<About />} />
        <Route path="/" caseSensitive={false} element={<TextForm heading="Enter The Text To Analyze"/>} />
      </Routes>

        </div>
      </Router>
    </div>

  );
}

export default App;
