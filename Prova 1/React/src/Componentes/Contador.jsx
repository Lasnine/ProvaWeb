import { useState, useEffect } from 'react'

function Contador(){
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log("Estado da varável: ", {num})
    }, [num])

    return(
        <>
            <h1>CONTADOR</h1>
            <h1>{num}</h1>
            <button onClick={()=> setNum(num+1)}>INCREMENTAR</button>
            <button onClick={()=> setNum(num-1)}>DESCREMENTAR</button>
        </>
    );
}
export default Contador