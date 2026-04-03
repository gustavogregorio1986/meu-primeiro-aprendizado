import { useState } from "react";

function Contador(){
    
    const [contador, setContador] = useState(0);
    
    return(
        <div>
            <h2>Contador</h2>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={() => setContador(contador - 1)}>-</button>
        </div>
    )
}

export default Contador;