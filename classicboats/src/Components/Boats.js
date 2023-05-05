import React, { useEffect, useState } from "react";
import { Boat } from "./Boat"
export function Boats() {

    const boats= <Boat/>
    /*<input
    type="text"
    value={filter}
    onChange={(ev) => changeFilter(ev.target.value)}
    placeholder="Etsi nimellä.."
    style={{ width: "23%" }}
  />*/

    return(
        <div>
        <div className="container py-2">
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <div className="col-lg8 mx-auto">
             
            </div>
          </div>
        </div>
  
      
        <div className="container">
          <div className="row text-center">{boats}</div>
        </div>
        </div>
    )

}