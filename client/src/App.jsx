import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import 'flowbite/dist/flowbite.css';
import About from "./Pages/About.jsx"
import Signin from "./Pages/Signin.jsx"
import Signup from "./Pages/Signup.jsx"
import Dashboard from "./Pages/Dashboard.jsx"
import Projects from "./Pages/Projects.jsx"
import Header from "./Component/Header.jsx"
import Footer from "./Component/Footer.jsx";
import PrivateRoute from "./Component/PrivateRoute.jsx";
import OnlyAdminPrivateRoute from "./Component/OnlyAdminPrivateRoute.jsx";
import CreatePost from "./Pages/CreatePost.jsx";
import UpdatePost from "./Pages/UpdatePost.jsx";
import PostPage from "./Pages/PostPage.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";
import Search from './Pages/Search';

// import  "../node_modules/boo"
// import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />} >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />} >
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost/>} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
