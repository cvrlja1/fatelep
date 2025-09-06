import Header from '../components/Header.jsx';
import plus from "../assets/plus.svg";
import AddProduct from '../components/AddProduct.jsx';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'


function Admin() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const navigate = useNavigate();

        fetch("http://localhost:5000/api/products", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then (res => {
                if (res.status === 401) {
                    localStorage.removeItem("jwt");
                    navigate("/admin");
                    return null;
                }
                return res.json();
            })
            .then((data => {
                setProducts(data);
                setLoading(false);
            }))
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [update]);

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
                }
            });
            if (response.ok) {
                setProducts(prev => prev.filter(product => product.id !== id));
            } else {
                const data = await response.json();
                console.error(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = () => {
        setUpdate(prev => !prev);
    }


    return (
        <div className="products">
            <Header/>
            <div className="flex flex-col items-center p-4">
                <h1 className="text-2xl font-bold mb-4">Products</h1>
                <div className="grid gap-4 grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative border rounded-lg shadow hover:shadow-lg transition overflow-hidden w-110"
                        >
                            <button className="absolute top-2 right-2 text-black hover:cursor-pointer" onClick={() => deleteProduct(product.id)}>X</button>
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg">{product.name}</h2>
                                <p className="text-gray-600">${product.price}</p>
                                <button className="px-6 py-2 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700 transition">
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="relative border rounded-lg shadow hover:shadow-lg transition overflow-hidden w-80 h-70 hover: cursor-pointer">
                        <img src={plus} alt="plus" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin