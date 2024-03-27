import React, { useState } from "react";

function Component(){

    const [inc, setInc] = useState(0);
   

    return(
       <div className="Wrapper">
        <h1>{inc}</h1>
            <div>
            <button onClick={() => setInc(inc + 1)}>Increment</button>
            <button onClick={() => setInc(inc - 1)}>Decrement</button>
            </div>
       </div>
    );
    
    }
export default Component