import React from "react"
import Navigationbar from "../Components/NavigationBar"
import { Boats } from "../Components/Boats"
export function MetreClasses() {
    return(
        <div>
            <Navigationbar/>
            <header>
                <h3>Metriluokat</h3>
            </header>
        
            <Boats/>
                     
        </div>
    )
}