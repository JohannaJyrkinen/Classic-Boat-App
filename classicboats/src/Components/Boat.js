import 'bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react'

export function Boat () {
    return (

        <div className="col-xl-3 col-sm6 mb-5" style={{textAlign:"center"}}>
        <div className="bg-white rounded shadow-sm py-5 px-4"  style={{ height: "100%" }}>
          <h5 className="otsikko">Veneen nimi</h5>
          <p></p>
          <p className="mb-1">Lyhyt kuvaus</p>
          <p></p>
          <p className="small text-uppercase text-muted">Pituus</p>
          <p className="small text-uppercase text-muted">Leveys</p>
          <p className="small text-uppercase text-muted">Syväys</p>
          <p className="small text-uppercase text-muted">Purjepinta-ala</p>
          <p className="small text-uppercase text-muted">Paino</p>
          <p className="small text-uppercase text-muted">Suunnittelija, vuosi</p>
            </div>
            </div>
    )
}

