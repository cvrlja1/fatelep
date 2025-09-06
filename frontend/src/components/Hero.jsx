import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate();

    const openProducts = () => {
        navigate('/products');
    }

    return (
        <div className="w-full flex justify-evenly pt-24">
            <div className="flex flex-col items-center max-w-2xl p-6 gap-5">
                <h1 className="text-3xl font-bold font-sans antialiased leading-snug text-gray-800">
                    Meleg, ami tartós – <span className="text-amber-600">Prémium tűzifa és építőanyagok</span> egy helyen, gyors kiszállítással
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Maradjon otthona melege és építkezése zavartalan a fenntartható forrásból származó, tiszta, hosszú égésű tűzifánkkal, valamint kiváló minőségű cementtel, homokkal, vasalattal és minden építőanyaggal, ami a sikeres munkához kell. <br />
                    Versenyképes árak, szakszerű kiszolgálás és megbízhatóság, amire számíthat.
                </p>

                <button  onClick={openProducts} className="px-6 py-2 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700 transition">
                    Shop Now
                </button>
            </div>
            <div className="flex">
                <img src="/images/hero_0.png" alt="Firewood" className="rounded-lg object-cover h-[350px] w-full"/>
            </div>
        </div>

    )
}

export default Hero