import { useEffect, useState } from "react";
import axios from "axios";

function User(){
    const[users, setUsers] = useState([]);
    const getUsers = async() =>{
        const response = await axios.get('https://avaliacao-bosch.onrender.com/usuario')
        setUsers(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        getUsers()
    }, [])

    return(
        <>
        <div className=" col-end-2">
            <div className="w-100 ml-4 rounded-full">
                <img src='https://img.freepik.com/fotos-gratis/jovem-bonito-vestindo-camiseta-casual-sobre-o-rosto-feliz-de-fundo-azul-sorrindo-com-os-bracos-cruzados-olhando-para-a-camera-pessoa-positiva_839833-12963.jpg?semt=ais_hybrid&w=740&q=80' 
                alt="pessoa"
                style={{
                    borderRadius: 300,
                }}/>
                <br />
                <h1 className=" font-extrabold">{users.nome}</h1>
                <h1 className=" font-light">Programador</h1>
            </div>
            <div  className=" flex-col justify-end align-text-top">
                <p><strong>Age: </strong>{users.idade}</p>
                <br />
                <p><strong>Email: </strong>{users.email}</p>
                <br />
                <p><strong>Status: </strong>{status}</p>
                <br />
                <p><strong>Location: </strong>{users.endereco?.rua}, {users.endereco?.numero} - {users.endereco?.cidade}</p>
                <br />
                <br />
            </div>
            <div className=" flex">
                {/* <p><strong>Habilidades: </strong>{users.habilidades}</p> */}
                <br />
                <p><strong>Projetos: </strong>{users.projetos?.nome} - {users.projetos?.status}</p>
            </div>
        </div>
        </>
    )
}
export default User