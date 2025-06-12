
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Host from './pages/Host';
import Join from './pages/Join';
import GameHome from './pages/GameHome';
import HostGame from './pages/HostGame';
import Learn from './pages/Learn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/host" element={<Host />} />
        <Route path="/join" element={<Join />} />
        <Route path="/gamehome" element={<GameHome />} />
        <Route path="/hostgame" element={<HostGame />} />
      </Routes>
    </Router>
  );
}

export default App;
