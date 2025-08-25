import Header from '../components/Header.jsx';
import { useState, useEffect } from "react";

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

    if (loading) return <p>Loading products...</p>;

    return (
        <div className="products">
            <Header/>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Products</h1>
                <div className="grid gap-6 grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg">{product.name}</h2>
                                <p className="text-gray-600">${product.price}</p>
                                <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products