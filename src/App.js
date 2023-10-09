import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import HomePage from './components/HomePage';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CharacterList />} path="/characters" />
      </Routes>
    </main>
  );
}

export default App;
