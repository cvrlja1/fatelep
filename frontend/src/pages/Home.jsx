import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';
import ProductsPreview from "../components/ProductsPreview.jsx";


function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Hero />
            </main>
            <Footer />
        </div>
    )
}

export default Home