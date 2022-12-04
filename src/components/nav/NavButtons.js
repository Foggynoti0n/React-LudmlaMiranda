import CartWidget from "../cart/CartWidget";
import Search from "./Search";
const NavButtons=()=>{
    return(
        <>
        <div id='buttons' className='d-flex'>
        <Search/>
        <CartWidget/>
        </div>
        </>
    )
}

export default NavButtons;