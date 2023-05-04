import React from "react"
import Weather from '../Components/Weather';
import { useState } from 'react'
import Navigationbar from "../Components/NavigationBar"
import { Col, Row} from "react-bootstrap"

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
                <Row>
                    <Col xs lg="3">
                        <Weather lat={userLatitude} long= {userLongitude} />
                    </Col>
                    <Col >
                        <header>
                            <h3>Puuveneen kunnostus</h3>
                        </header></Col> 
                </Row>
        </div>
    )

}