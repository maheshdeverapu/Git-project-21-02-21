import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Header from "./components/header/header";
import Home from "./components/screens/home"
import Signin from "./components/screens/signin";
import Signup from "./components/screens/signup";
import Card from "./components/card/card";
import CreatePost from "./components/screens/createPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/card" element={<Card/>}/>
          <Route path="/createPost" element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
