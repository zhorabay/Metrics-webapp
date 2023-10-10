import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import HomePage from './components/HomePage';
import NotReady from './components/NotReady';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CharacterList />} path="/characters" />
        <Route element={<NotReady />} path="/comics" />
        <Route element={<NotReady />} path="/games" />
        <Route element={<NotReady />} path="/videos" />
      </Routes>
    </main>
  );
}

export default App;
