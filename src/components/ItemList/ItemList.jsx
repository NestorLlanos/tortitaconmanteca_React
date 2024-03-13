import classes from "./ItemList.module.css"
import Item from "../Item/Item"


const ItemList = ({products}) =>{
    return(
        <section className={classes.contenedorCards}> 
            {products.map (product => 
                
                    <Item key={product.id} {... product}/>

                )
            }
        
        </section>
    )
}
export default ItemList 