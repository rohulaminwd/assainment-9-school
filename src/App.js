import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import NavBar from './component/Navbar/NavBar';
import Review from './component/Review/Review';
import Dashboard from "./component/Deshbord/Dashboard"
import Blog from "./component/Blog/Blog"
import About from "./component/About/About"
import ErrHadel from "./component/ErrHadel/ErrHandel"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<ErrHadel></ErrHadel>}></Route>
      </Routes>
    </div>
  );
}

export default App;
