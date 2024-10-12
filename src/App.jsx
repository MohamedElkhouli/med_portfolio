import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Layout from './layouts/Layout';
import Projects from './Pages/Projects'
import './App.css'
function App() {

  return (
  <Router>
    <Routes>
      {/* Define a route that uses the layout */}
      <Route path="/" element={<Layout />}>
        {/* Define child routes inside the layout */}
        <Route index element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects/>} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
