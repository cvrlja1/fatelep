import Header from '../components/Header.jsx';
import { useState, useEffect } from "react";
import Footer from "../components/Footer.jsx";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then (res => res.json())
            .then((data => {
                setProducts(data);
                setLoading(false);
            }))
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="p-4 flex-grow">
                <h1 className="text-2xl font-bold mb-4">Termekeink</h1>
                <div className="grid gap-6 grid-cols-3 justify-items-center gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative rounded-lg hover:shadow-lg transition overflow-hidden flex flex-col"
                        >
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg">{product.name}</h2>
                                <p className="text-gray-600">RSD {product.price}</p>
                                <button className="px-6 py-2 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700 transition">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products