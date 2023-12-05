import { Routes, Route } from "react-router-dom"
import { NavbarComponent } from "./components/NavbarComponent"
import { Home } from "./pages/Home"
import { Movie } from "./pages/Movie"

function App() {

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movie />}/>
      </Routes>
    </>
  )
}

export default App
