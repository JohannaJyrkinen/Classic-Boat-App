import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { RouterProvider } from "react-router";
import { router } from "./router";
import { BoatService } from "./redux/boatService";
import { TipService } from "./redux/tipService";

function App() {

  React.useEffect(() => {
    console.log("Haetaan veneet");
    BoatService.getBoats();
  }, []);

  React.useEffect(() => {
    console.log("Haetaan vinkit");
    TipService.getTips();
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
