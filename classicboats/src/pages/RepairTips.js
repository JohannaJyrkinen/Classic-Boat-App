import React from "react"
import Weather from '../Components/Weather';
import { useState } from 'react'
import Navigationbar from "../Components/NavigationBar"


export function Repairtips() {

    const [userLatitude, setUserLatitude] = useState(null)
    const [userLongitude, setUserLongitude] = useState(null)
  
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude)
      console.log("Longitude is :", position.coords.longitude)
      setUserLatitude(position.coords.latitude)
      setUserLongitude(position.coords.longitude)
    })

    return(
        <div>
            <Navigationbar/>
            <br/>
            <div>
        <div className="container py-2">
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <div className="col-lg8 mx-auto">
             
            </div>
          </div>
        </div>
  
        <div className="container">
          <div className="row text-center"><Weather lat={userLatitude} long= {userLongitude} /></div>
        </div>
        </div>
                   
                       
        </div>
    )

}