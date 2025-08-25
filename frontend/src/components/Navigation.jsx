    import {NavLink} from "react-router-dom";


    function Navigation() {
        return (
            <div className="flex gap-3 bg-">
                <NavLink className={({isActive}) => isActive ? "linkActive" : "link"} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "linkActive" : "link"} to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "linkActive" : "link"} to="/products">Products</NavLink>
                <NavLink className={({isActive}) => isActive ? "linkActive" : "link"} to="/contact">Contact</NavLink>
            </div>
        )
    }

export default Navigation
