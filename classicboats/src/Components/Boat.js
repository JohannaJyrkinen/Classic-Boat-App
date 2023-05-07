import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'

export function Boat ({boat}) {

  
    return (

        <div className="col-xl-3 col-sm6 mb-4" style={{textAlign:"center"}}>
        <div className="bg-white rounded shadow-sm py-5 px-3"  style={{ height: "100%", fontSize: "14px" }}>
         <img 
          src={boat.imgurl}
          style={{height: "20vw", objectFit: "contain", marginBottom: "10px"}}
          alt="boat"/>
          <h5 className="otsikko">{boat.name}</h5>
          <p></p>
          <p className="mb-3">{boat.description}</p>
          <p></p>
          <p className="small text-uppercase text-muted">Pituus {boat.loa}</p>
          <p className="small text-uppercase text-muted">Leveys {boat.beam}</p>
          <p className="small text-uppercase text-muted">Syväys {boat.draft}</p>
          <p className="small text-uppercase text-muted">Purjepinta-ala {boat.sailarea} m2</p>
          <p className="small text-uppercase text-muted">Paino {boat.displacement} kg</p>
          <p className="small text-uppercase text-muted">{boat.designer} {boat.year}</p>
            </div>
            </div>
    )
}

