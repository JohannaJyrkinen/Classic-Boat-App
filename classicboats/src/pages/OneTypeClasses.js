import React from "react"
import Navigationbar from "../Components/NavigationBar"
import { Boat } from "../Components/Boat"
import { useSelector } from 'react-redux';

export function OneTypeClasses() {

    let boats = useSelector(state => state.boats.boats)
    console.log(boats)

    const onedesignClasses = boats
        .filter(boat => boat.type === "Onedesign")
        .map((boat)=> <Boat key={boat.id} boat={boat}/>)

    return(
        <div>
            <Navigationbar/>
            <header>
                <h1 className="display-6" style={{ marginTop: "80px" }}>Yksityyppiluokat</h1>
            </header>
            <div className="container py-2">
                <div style={{ marginBottom: "10px" }}>
                    <div className="col-lg8 mx-auto">
                        <p className="lead" style={{ fontSize: "1rem" }}>Yksityyppiluokissa kaikki veneiden mitat, materiaalit, purjeet ja sallitut säädöt ovat luokan säännöillä tarkasti määritelty ja rajoitettu. 
                        Samanlaisilla veneillä purjehdittaessa yksityyppikilpailut korostavat miehistön taitoja, eivätkä niinkään venekohtaisia eroja.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    {onedesignClasses}
                </div>
            </div>
        <footer style={{ marginTop: "10px", marginBottom: "10px" }}>
           Kuvat Wikimedia Commons,  lisenssillä CC BY-SA 3.0
        </footer>
        </div>
    )

}