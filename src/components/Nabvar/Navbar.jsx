import CartWidget from "../CartWidget/CartWidget"

const Navbar = () =>{
    return(
        <header>
            <h2>Tortita con Manteca</h2>
            <nav className="d-grid gap-2 col-2 mx-auto ">
            
                <a className="btn btn-primary ">Tortas</a>
                <a className="btn btn-primary ">Alfajores</a>
                <a className="btn btn-primary ">Tartas</a>
                <a className="btn btn-primary ">Box</a>
                        
            </nav>
            <CartWidget />
        </header>
    )
}
export default Navbar