
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Host from './pages/Host';
import Join from './pages/Join';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/host" element={<Host />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
