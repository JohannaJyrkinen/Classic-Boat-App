
const Advice = ({temperature, humidity}) => {

    const dateToday = new Date()
    const month = dateToday.getMonth

    if(month >=7 && month<= 10) {
        return (
            <div>
                <p>Onhan vene jo vesillä?</p>
            </div>
        )
    }
    
    if(temperature <= 5 || humidity > 70) {
        return (
            <div style={{ color: "red" }}>
                <p>Nyt ei kannata avata lakkapurkkia!</p>
            </div>
        )
    }
    if(temperature > 5 && humidity < 70 ) {
        return (

            <div>
                <br />
                <p>Nyt voi tarttua lakkapensseliin,  </p>
                <p>lämpötila ja ilmankosteus ovat sopivat!</p>
            </div>
        )
    } 
    
}

export default Advice