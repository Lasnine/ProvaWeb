import { useEffect, useState } from "react";
import axios from "axios";


function Api(){
    const[divas, setDivas] = useState({});
    const getDivas = async() =>{
        const response = await axios.get('https://avaliacao-bosch.onrender.com/all')
        setDivas(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        getDivas()
    }, [])

    return(
        <>
        <div className=" border-0 bg-fuchsia-200 rounded-lg">
            <h1>DIVAS</h1>
            <div className="flex">
                <p><strong>ID: </strong>{divas.id}</p>
                <br />
                <p><strong>Nome: </strong>{divas.nome}</p>
                <br />
                <p><strong>Sobrenome: </strong>{divas.sobrenome}</p>
                <br />
                <p><strong>Apelido: </strong>{divas.apelido || "Não tem"}</p>
                <br />
                <p><strong>Status: </strong>{divas.status}</p>
                <br />
                <p><strong>Apelido: </strong>{divas.apelido}</p>
                <br />
                <img src={divas.imagem} alt={divas.nome} className="w-100 ml-4 rounded-lg" />
            </div>
        </div>
        </>
    )
}
export default Api