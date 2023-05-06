
const Advice = ({temperature, humidity}) => {

    const dateToday = new Date()
    const month = dateToday.getMonth

    if(month >=7 && month<= 10) {
        return (
            <div>
                <p className="mb-1">Onhan vene jo vesillä?</p>
            </div>
        )
    }
    
    if(temperature <= 10 || humidity > 70) {
        return (
            <div>
                <p className="mb-1"style={{ color: "red" }}>Nyt ei kannata avata lakkapurkkia, sääolosuhteet eivät ole suotuisat!</p>
            </div>
        )
    }
    if(temperature > 5 && humidity < 70 ) {
        return (

            <div>
                <br />
                <p className="mb-1" >Nyt voi tarttua lakkapensseliin,  </p>
                <p className="mb-1" >lämpötila ja ilmankosteus ovat sopivat!</p>
            </div>
        )
    } 
    
}

export default Advice