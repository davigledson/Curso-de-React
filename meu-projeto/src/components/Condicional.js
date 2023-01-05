import { useState } from "react"
function Condicional(){

    const [email,setEmail] =useState()
    const [userEmail, setUserEmail] =useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        

    }
    function limparEmail(){
        
        setUserEmail('')
       

    }
return(
    <div>
        <h2>Cadastre o seu email:</h2>
        <form>
            <input type='email' placeholder="Digite o seu email..." onChange={(e) =>setEmail(e.target.value) }/>
            <button type="submit" onClick={enviarEmail}>Enviar email</button>
            
            {userEmail && ( //&& = and = E
            <div>
                <p>O email do usuário é {userEmail}</p>
                <button onClick={limparEmail}>Limpar Email</button>
            </div>
        )}
        </form>
        
    </div>
)
}

export default Condicional