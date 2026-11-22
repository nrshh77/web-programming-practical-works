
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserCards from './UserCards.jsx';
import Counter from './Counter.jsx';
import './App.css';

function Home() {
  return (
    <div className="App">
      <h1>Мої практичні роботи з React</h1>
      <p>Оберіть практичну роботу:</p>

      <div className="navigation">
        <Link to="/work7">Практична робота №7</Link>
        <Link to="/work8">Практична робота №8</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work7" element={<UserCards />} />
        <Route path="/work8" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
