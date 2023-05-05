import React, { useEffect, useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { RouterProvider } from "react-router";
import { router } from "./router";
import { BoatService } from "./redux/boatService";


function App() {

  React.useEffect(() => {
    console.log("Haetaan veneet");
    BoatService.getBoats();
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
