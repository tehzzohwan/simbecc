import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Review/Review';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Review/>
      <Services/>
    </div>
  );
}

export default App;
