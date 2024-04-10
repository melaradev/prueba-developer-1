import React from "react";
import { BrowserRouter, Routes, Route, Router, Switch } from "react-router-dom";
//import HomePage from "./Components/HomePage/HomePage";
import Menu from "./Components/MenuContainer/Menu/Menu";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/BodySection";
import "./App.css";

//Styles
function App() {
  return (
    <div className="app-container">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path="/" element={<>
           <Header/>
           <Body/>
           {/*<HomePage />*/}
          </>} />
        </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
