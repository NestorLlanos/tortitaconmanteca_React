import classes from "./ItemList.module.css"
import Item from "../Item/Item"

const ItemList = ({products}) =>{
    return(
        <div className={classes.contenedorCards}> 
            {products.map (product => {
        return(
            <Item key={product.id} {... product}/>
            
        )
    })}
        
        </div>
    )
}
export default ItemList 