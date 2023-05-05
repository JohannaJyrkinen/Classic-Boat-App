import React from "react"
import Navigationbar from "../Components/NavigationBar"
import { Boats } from "../Components/Boats"

export function AllClasses() {
    return(
        <div>
            <Navigationbar/>
            <header>
                <h3>Kaikki luokat</h3>
            </header>
            <Boats/>
        </div>
    )
}