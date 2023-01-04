import Item from "./Item"
function List(){
    return(
        <>

        <ul>
        <Item marca='Ferrari' ano_lancamento={1985}/>
        <Item marca='Renault' />
        <Item marca='Fiat' ano_lancamento={1964}/>
        <Item marca='Chevrolet' ano_lancamento={1999}/>
        <Item />
        </ul>
        
        </>

    )
}
export default List