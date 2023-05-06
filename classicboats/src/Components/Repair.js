import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'

export function Repair({tip}) {

    return (

        <div className="col-xl-3 col-sm6 mb-5" style={{textAlign:"center"}}>
        <div className="bg-white rounded shadow-sm py-5 px-4"  style={{ height: "100%" }}>
          <h5 className="otsikko">{tip.header}</h5>
          <br/>
          <p className="mb-1">{tip.content}</p>
            </div>
            </div>
    )
}