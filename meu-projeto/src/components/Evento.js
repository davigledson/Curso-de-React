function Evento({numero}){
    function meuEvento(){
        console.log(`Opa! fui ativado! ${numero}`)
    }
    return(
    <div>
        <p>Clique para ativar um evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
    </div>
    )
}

export default Evento