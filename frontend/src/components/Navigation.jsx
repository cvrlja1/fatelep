    import {NavLink} from "react-router-dom";


    function Navigation() {
        return (
            <div className="flex gap-10 mr-20">
                <NavLink to="/" className={({ isActive }) =>
                `text-[18px] antialiased font-bold font-sans text-white hover:opacity-80 ${isActive ? 
                    "text-[18px] antialiased font-bold font-sans text-amber-600 hover:opacity-80" : ""}`}>FŐOLDAL</NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    `text-[18px] antialiased font-bold font-sans text-white hover:opacity-80 ${isActive ?
                        "text-[18px] antialiased font-bold font-sans text-amber-600 hover:opacity-80" : ""}`}>RÓLUNK</NavLink>
                <NavLink to="/products" className={({ isActive }) =>
                    `text-[18px] antialiased font-bold font-sans text-white hover:opacity-80 ${isActive ?
                        "text-[18px] antialiased font-bold font-sans text-amber-600 hover:opacity-80" : ""}`}>TERMÉKEK</NavLink>
                <NavLink to="/contact" className={({ isActive }) =>
                    `text-[18px] antialiased font-bold font-sans text-white hover:opacity-80 ${isActive ?
                        "text-[18px] antialiased font-bold font-sans text-amber-600 hover:opacity-80" : ""}`}>KAPCSOLAT</NavLink>
            </div>
        )
    }

export default Navigation
