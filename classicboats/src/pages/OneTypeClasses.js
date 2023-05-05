import React from "react"
import Navigationbar from "../Components/NavigationBar"
import { Boats } from "../Components/Boats"
export function OneTypeClasses() {

    return(
        <div>
            <Navigationbar/>
            <header>
                <h3>Yksityyppiluokat</h3>
            </header>
            <Boats/>
        </div>
    )

}