import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'

export function Repair({tip}) {

    let repairTip = tip.content
    const formattedRepairTip = repairTip.replace(/\n\n/g, '<br><br>')

    return (

        <div className="col-xl-3 col-sm6 mb-5" style={{textAlign:"center"}}>
        <div className="bg-white rounded shadow-sm py-5 px-4"  style={{ height: "100%", fontSize: "13px" }}>
          <h5 className="otsikko">{tip.header}</h5>
          <br/>
          <p className="mb-1" dangerouslySetInnerHTML={{ __html: formattedRepairTip }}></p>
            </div>
            </div>
    )
}