import React from "react"
import Weather from '../Components/Weather';
import { useState } from 'react'
import Navigationbar from "../Components/NavigationBar"
import { Repair } from "../Components/Repair";
import { useSelector } from 'react-redux';

export function Repairtips() {

    const [userLatitude, setUserLatitude] = useState(null)
    const [userLongitude, setUserLongitude] = useState(null)
  
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude)
      console.log("Longitude is :", position.coords.longitude)
      setUserLatitude(position.coords.latitude)
      setUserLongitude(position.coords.longitude)
    })

    let repairTips = useSelector(state => state.tips.tips)

    const tips = repairTips.map((tip) => <Repair key={tip.id} tip={tip}/>)

    //<Weather lat={userLatitude} long= {userLongitude} />

    return(
        <div>
            <Navigationbar/>
            <header>
            <h1 className="display-4" style={{ marginTop: "10px", marginBottom: "10px" }}>Kevätkunnostus</h1>
            </header>
            <div>
        <div className="container py-2">
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <div className="col-lg8 mx-auto">
            <p className="lead"> Puuveneen keväthuoltoon kuuluu pintakäsittelyjen huoltaminen. 
            Vene kannattaa laskea vesille hyvissä ajoin, ettei vene kuivu ja haristu. 
            Pienet vuodot heti vesillelaskun jälkeen ovat puuveneille ominaisia, 
            mutta hyväkuntoinen vene tiivistyy yleensä jo vesillelaskupäivänä.</p>
            </div>
          </div>
        </div>
  
        <div className="container">
          <div className="row text-center">
          <Weather lat={userLatitude} long= {userLongitude} />

            {tips}
            </div>
        </div>
        </div>
        <footer style={{ marginTop: "10px", marginBottom: "10px" }}>
          Weather data: https://openweathermap.org/
        </footer>         
                       
        </div>
    )

}