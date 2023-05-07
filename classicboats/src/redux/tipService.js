import store from "./store";
import axios from "axios";
import { setTips } from "./tipSlice";

export const TipService= {
    
    getTips: () => {
        const baseUrl = '/api/tips';
    
        axios.get(baseUrl)
          .then(response => {
            const data = response.data;
            store.dispatch(setTips(data))
            console.log(data)
          })
          .catch(error => {
            console.error('Error fetching boats:', error);
          });
      }

}