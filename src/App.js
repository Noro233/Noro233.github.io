import React from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Contacts from "./Components/Contacts/Contacts";
 

function App() {


  return (
    <div className="  w-full h-auto bg-black text-lightText  ">

      <div className="mx-auto bg-black ">
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Contacts />
      </div>

    </div>
  )


}

export default App;
