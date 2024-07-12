import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Signin from "./Component/Signin"
import Signup from "./Component/Signup"
import Dashboard from "./Component/Dashboard"
import Projects from "./Component/Projects"
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-in" element={<Signin/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
  )
}

export default App
