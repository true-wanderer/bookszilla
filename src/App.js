
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<BookList/>}></Route>
        <Route path="/book/:id" element={<BookDetails/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
