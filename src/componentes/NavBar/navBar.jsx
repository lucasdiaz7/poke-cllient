import SearchBar from "../SearchBar/searchBar"
import { Link } from "react-router-dom"
import style from "./navBar.module.css"
import { AiOutlineBars } from "react-icons/ai";
// import pokeBola from "./pokeBola.png"

export default function NavBar(){

    return(
        <div className={style.div}>
            <nav className={style.nav}>
                <input type="checkbox" id="check" className={style.check}/>

                {/* <label for="check" className={style.checkbtn}>
                    <img className={style.img} src="https://cdn.iconscout.com/icon/free/png-256/bars-1440391-1216351.png" alt="icono" />
                </label> */}
                <label for="check" className={style.checkbtn}>
                    <AiOutlineBars/>
                </label>
                {/* <img src={pokeBola} alt="imgnav" /> */}
                <ul className={style.ul}>
                    {/* <li className={style.li}><a href="/home" className={style.a}>Home</a></li> */}
                    <li className={style.li}><a><Link to="/home" className={style.a}>Home</Link> </a></li>
                    <li className={style.li}><a href="/" className={style.a}>Landing</a></li>
                    {/* <li className={style.li}><a href="" className={style.a}>About</a></li> */}
                    {/* <li className={style.li}><a href="/pokemons" className={style.a}>Create Pokemon</a></li> */}
                    <li className={style.li}><a ><Link to="/pokemons" className={style.a}>Create Pokemon</Link></a></li>
                </ul>
            </nav>
        </div>
    )
}