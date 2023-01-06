function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, Tudo bem?`
    }
    return <>
    {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
}

export default Saudacao