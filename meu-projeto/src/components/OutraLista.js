function OutraLista( {itens} ){
return (
    <>
    <h3>Listas de coisas boas:</h3>

        {itens.length > 0 ?( // ? = if
        itens.map((item,index) => (
        <p key ={index}> {item}: </p>
        ))) : ( //: =else
            <p>Não há itens na lista!</p>
        )}
    </>
)
}
export default OutraLista