import React from "react"
import Navigationbar from "../Components/NavigationBar"
import { Boats } from "../Components/Boats"
import { useSelector } from 'react-redux';


export function ConstructionClasses() {

    let boats = useSelector(state => state.boats.boats)
    console.log(boats)

    const constructionClasses = boats
        .filter(boat => boat.type === "Construction")
        .map((boat)=> <Boats key={boat.id} boat={boat}/>)

    return(
        <div>
            <Navigationbar/>
            <header>
            <h1 className="display-4" style={{ marginTop: "10px", marginBottom: "10px" }}>Konstruktioluokat</h1>
            </header>
            <div className="container py-2">
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <div className="col-lg8 mx-auto">
          <p className="lead">Konstruktioluokissa kilpapurjeveneet suunniteltiin luokkasääntöjen mukaan, 
          joissa lasketaan veneiden mittoihin ja purjepinta-alaan perustuva mittaluku. 
          Nopein vene voittaa, eikä tasoituslukuja käytetä tulosten laskemiseen. 
          Konstruktioluokissa myös veneiden suunnittelu oli tärkeä osa kilpailua. 
          Klassiset konstruktioluokat ovatkin edelleen suosittuja kilpaluokkia meillä ja maailmalla</p>
          </div>
        </div>
      </div>
        
        <div className="container">
            <div className="row text-center">
                    {constructionClasses}
            </div>
        </div>
        <footer style={{ marginTop: "10px", marginBottom: "10px" }}>
           Kuvat Wikimedia Commons, lisenssillä CC BY-SA 3.0
        </footer>
        </div>
    )
}