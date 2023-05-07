import store from "./store";
import axios from "axios";
import { setBoats } from "./boatSlice";

export const BoatService= {
    
    getBoats: () => {
        const baseUrl = '/api/boats';
    
        axios.get(baseUrl)
          .then(response => {
            const data = response.data;
            store.dispatch(setBoats(data))
            console.log(data)
          })
          .catch(error => {
            console.error('Error fetching boats:', error);
          });
      }

}

