import React, {useState} from 'react'
function Color(){


    const [color, setColor] = useState();
    return(
        <>
        <div className='Color' style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
            
        </div>

        <h1>Color Picker</h1>
        <input type="color" value={color} 
        onChange={(e) => setColor(e.target.value)}/>

        </>

    );

}

export default Color