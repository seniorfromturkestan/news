import Header from './components/Header/Header';
import './index.css';
import Main from './pages/Main/Main';
import Company from './pages/Company/Company';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} />
      </Routes>
    </>
  );
}

export default App;
