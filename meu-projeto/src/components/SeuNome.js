function SeuNome({setNome}){
    return(
        <div>
            <p>
                Digite o seu nome:
            </p>
            <input type='text' placeholder="Qual o seu nome:" onChange={(e) => setNome(e.target.value)}/>
        </div>

    )

}
export default SeuNome