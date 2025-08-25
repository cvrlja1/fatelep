import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import ProductsPreview from "../components/ProductsPreview.jsx";


function Home() {
    return (
        <div className="w-full h-screen">
            <Header />
            <Hero />
            <ProductsPreview />
        </div>
    )
}

export default Home