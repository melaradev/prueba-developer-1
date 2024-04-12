import React from "react";

//import HomePage from "./Components/HomePage/HomePage";
import "./App.css";
import AppRouter from "./router/AppRouter";

//Styles
function App() {
  return (
    <div className="app-container">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>
      <AppRouter />
      {/*<BrowserRouter>
      <Menu />
        <Routes>
          <Route path="/" element={<>
           <Header/>
           <Body/>
           <HomePage 
          </>} />
        </Routes>
      </BrowserRouter>/>*/}
    </div>
  );
}

export default App;
