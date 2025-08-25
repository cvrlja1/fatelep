import Navigation from "./Navigation";

function Header() {
    return (
        <nav className="flex items-center justify-between w-full h-22 pr-10 pl-30 shadow-md shadow-orange-500/50 ">
            <div className="LOGO">LOGO</div>
            <Navigation/>
        </nav>
    )
}

export default Header