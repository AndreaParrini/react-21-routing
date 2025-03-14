import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css'

function MainNavigation(){
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        {/* in className accetta un oggetto in ingresso quindi isActive deve essere all'interno delle graffe {} */}
                        {
                        /* per react il link è attivo ogni volta che la rotta inizia con il valore che c'è in to, 
                        per evitare questo e far si che Home sia sempre attiva basta impostare la props end  
                        in questo modo sarà attiva SOLO quando la rotta è quella reale in questo caso solo '/'
                        */
                        }
                        <NavLink to='/' className={({isActive}) => isActive ? classes.active : undefined}  end>Home</NavLink> 
                    </li>
                    <li>
                        <NavLink to='/products' className={({isActive}) => isActive ? classes.active : undefined}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;