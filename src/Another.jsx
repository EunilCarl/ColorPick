import React, {useState} from "react";

function Another(){

    const [name, setName] = useState("");
    const [quan, setQuan] = useState();
    const [ship, setShip] = useState();
    function nameChange(e){
       
    }
    
    function quanChange(event){
        setQuan(event.target.value);
    }
    return(
        <div>
            <h1>Name: {name}</h1>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <p>Tite: {quan}</p>
            <input value={quan} onChange={quanChange} type="number"/>
            <p>Shipping: {ship}</p>

            <input type="radio" value="Niga" checked={ship === "Niga"}
            onChange={(e) => setShip(e.target.value)} />


            <label>Niga</label>
            <input type="radio" value="oten" checked={ship === "oten"}
          onChange={(e) => setShip(e.target.value)}/>
            <label>oten</label>
           
           
        </div>
    );

}

export default Another