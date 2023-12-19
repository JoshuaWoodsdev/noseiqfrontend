import React, { useEffect, useState } from "react";
import PerfumerTable from "./appBackendTable";
//import PerfumerTable from "./PerfumerTable";



const BackendTableDisplay = () => {
    //set state for each card in the array of data
    const [perfumers, setPerfumer] = useState([]);
    
    //api call goes here to fit the datapo
    useEffect(() => {
     const fetchdata = async () =>{

     }
    }) 
    
    //then call the function fetchdata
  return(
    <div>
        {perfumers.map((perfumers) =>(
              key={perfumer.id} // Assuming each perfumer has a unique id
              attachment={perfumer.attachment}
              name={perfumer.name}
              bio={perfumer.bio}
              />
        )}
    </div>
  );
};





export default BackendTableDisplay;