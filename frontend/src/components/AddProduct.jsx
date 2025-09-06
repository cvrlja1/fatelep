import {useState} from "react";

function AddProduct({ onSubmitSuccess }) {

    const [jwt, setJwt] = useState(null);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productStock, setProductStock] = useState("");

    const logout = () => {
        const token = localStorage.getItem("jwt");
        if (token) {
            localStorage.removeItem("jwt");
        }
        window.location.href = "http://localhost:5173";
    }

    const addProduct = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("jwt");
        try {
            const res = await fetch("http://localhost:5000/api/products/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
                body: JSON.stringify({ productName, productStock, productPrice }),
            })
        } catch (error) {
            console.log(error);
        }
        setProductName("");
        setProductPrice("");
        setProductStock("");
        onSubmitSuccess();
    }

    return (
        <div>
        <form className="flex flex-col w-64 p-10" onSubmit={addProduct}>
            <label htmlFor="productName">Product name: </label>
            <input className="border shadow-sm hover:shadow-lg shadow-orange-200" type="text" id="productName" name="productName" value={productName}
                   onChange={(e) => setProductName(e.target.value)} />
            <label htmlFor="productPrice">Product price: </label>
            <input className="border shadow-sm hover:shadow-lg shadow-orange-200" type="number" id="productPrice" name="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
            <label htmlFor="productStock">Product stock: </label>
            <input className="border shadow-sm hover:shadow-lg shadow-orange-200" type="number" id="productStock" name="productStock" value={productStock} onChange={(e) => setProductStock(e.target.value)} />
            <input type="submit" value="Submit" className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-700 cursor-pointer hover:scale-110 transition easy-in-out duration-150"/>
        </form>
        <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-700 cursor-pointer hover:scale-110 transition easy-in-out duration-150" onClick={logout}>LOGOUT</button>
        </div>
    )
}

export default AddProduct;