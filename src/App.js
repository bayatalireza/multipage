import { BrowserRouter , Routes, Route, NavLink, Navigate } from 'react-router-dom'
import "./App.css"


import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Articles from "./pages/Articles"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
      <h2>Articles </h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:id" element={<Articles />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
