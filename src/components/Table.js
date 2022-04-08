import Row from './Row'
const Table = ({items}) =>{
    return(
        <table>
            {items.map(item=>{
                return(
                    <Row key={item.id} item={item}/>
                )
            })}
            
        </table>
    )
}
export default Table