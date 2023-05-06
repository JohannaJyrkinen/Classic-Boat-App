import React from "react"
import { Boat } from "./Boat"
export function Boats ({boat}) {

    const boats= <Boat boat={boat}/>
    /*<input
    type="text"
    value={filter}
    onChange={(ev) => changeFilter(ev.target.value)}
    placeholder="Etsi nimellä.."
    style={{ width: "23%" }}
  />*/

    return(
        
        <>{boats}</>
        
    )

}