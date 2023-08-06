import React, { useState } from "react"

export const Header = () => {

    const [name, setname] = useState('-')
    const [lname, setlname] = useState('--')
    const [age, setage] = useState('--')

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setname(event.target.value)
    }

    const handlelname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setlname(event.target.value)
    }

    const handleAge = (event:React.ChangeEvent <HTMLInputElement>) => {
        setage(event.target.value)
    }



    return (
        <div>
            <label htmlFor="Nome">Nome</label>
            <input type="text" onChange={handleName} /><br />
            <label htmlFor="Sobrenome">Sobrenome</label>
            <input type="text" name="Sobrenome" onChange={handlelname}/><br />
            <label htmlFor="Idade">Idade</label>
            <input type="text" name="Idade" onChange={handleAge}/><br />
            <hr />
            <p>Olá {name} {lname}, tudo bem?</p>
            <p>Você tem {age} anos</p>

            

        </div>
    )
}