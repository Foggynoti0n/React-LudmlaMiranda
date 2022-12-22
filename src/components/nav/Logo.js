import { Link} from 'react-router-dom';
const Logo = ()=>{
    return(
        <Link to={'/'} style={{'color': 'gray' ,'textDecoration': 'none'}} ><div id='logo'><h2>Estética Afrodita</h2></div></Link>
    )
}

export default Logo;