import {Home, Property} from './pages';
import {Navbar, Footer} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={<Property />} />
    </Routes>
    <Footer />
  </Router>
}

export default App;
