import { useState } from "react";

function Count (){
    const [count, setCount] = useState(110);
    function Incrementar() {
        setCount(count + 1);
        }
        function Decrementar() {
        setCount(count - 1);
        }
   
    return(
    <>
     <h2>Count: {count}</h2>
     <button onClick={Incrementar}>Incrementar</button>
     <button onClick={Decrementar}>Decrementar</button>
    </>
       
    )
}

export default Count;