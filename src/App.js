import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';

function App() {
  return (
    <div className="App">
        <Navbar />


        <div className='apps'>
          <Sidebar />
          <Videos />
        </div>
    </div>

  );
}

export default App;
