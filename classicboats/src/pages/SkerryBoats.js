import React from "react"
import Navigationbar from "../Components/NavigationBar"
import { Boat } from "../Components/Boat"
import { useSelector } from 'react-redux';

export function SkerryBoats() {

    let boats = useSelector(state => state.boats.boats)
    console.log(boats)

    const skerryBoats = boats
        .filter(boat => boat.type === "Skerry")
        .map((boat)=> <Boat key={boat.id} boat={boat}/>)

    return(
        <div>
            <Navigationbar/>
            <header>
                <h1 className="display-4" style={{ marginTop: "10px", marginBottom: "10px" }}>Saaristoristeilijät</h1>
            </header>

            <div className="container py-2">
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <div className="col-lg8 mx-auto">
          <p className="lead">Saaristoristeilijät ovat rakennettu perustuen Svenska Seglarförbundetin vuonna 1908 vahvistamaan saaristoristeilijäsääntöön. Säännön oli tarkoitus täydentää R-mittasääntöä, 
          jota monet purjehtijat eivät pitäneet sopivaksi Pohjoismaiden saaristo-olosuhteisiin.
          Saaristoristeilijän luokka määräytyy pääsääntöisesti purjepinta-alan mukaan, 
          lisäksi luokissa on muutamia vähimmäismittoja.Veneet ovat tyypillisesti pitkiä ja kapeita.</p>
          </div>
        </div>
      </div>
        
        <div className="container">
            <div className="row text-center">
                    {skerryBoats}
            </div>
        </div>
        <footer style={{ marginTop: "10px", marginBottom: "10px" }}>
           Kuvat Wikimedia Commons,  lisenssillä CC BY-SA 3.0
        </footer>
        </div>
    )

}