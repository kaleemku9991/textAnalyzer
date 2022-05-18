
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <div>
    <Navbar title="TextUtils"/>
    <div className='container'>
      <TextForm heading="Enter The Text To Analyze"/>
    </div>
    </div>
  );
}

export default App;
