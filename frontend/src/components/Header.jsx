import Navigation from "./Navigation";

function Header() {
    return (
        <nav className="flex justify-between w-full h-22 p-10 shadow-xl bg-[#161b33]">
            <div className="LOGO text-white">FATELEP</div>
            <Navigation/>
        </nav>
    )
}

export default Header