import Weather from '../Components/Weather';
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navigationbar from '../Components/NavigationBar'

export function FrontPage() {

    const [userLatitude, setUserLatitude] = useState(null)
    const [userLongitude, setUserLongitude] = useState(null)
  
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude)
      console.log("Longitude is :", position.coords.longitude)
      setUserLatitude(position.coords.latitude)
      setUserLongitude(position.coords.longitude)
    })

    return (
        <div className="App">
          <Navigationbar/>
          <header className="App-header">
            
          
          </header>
          <Weather lat={userLatitude} long= {userLongitude} />
        </div>
      )

} 
