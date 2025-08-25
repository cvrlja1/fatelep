import wood_img from "../assets/fa_0.jpg";
import wood_img2 from "../../public/images/fa_01.jpg";
import wood_img3 from "../assets/fa_02.jpg";



function ProductsPreview() {
    return (
        <div className="products-preview">
            <div className="productBox">
                <img src={wood_img} alt="Fa_00" className="w-full h-full object-contain rounded-lg shadow-md shadow-orange-500/50" />
                <button
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-700 cursor-pointer hover:scale-110 transition easy-in-out duration-150">
                    Buy Now
                </button>
            </div>
            <div className="productBox">
                <img src={wood_img2} alt="Fa_01" className="w-full h-full object-contain rounded-lg shadow-sm shadow-orange-500/50"/>
                <button
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-700 cursor-pointer hover:scale-110 transition easy-in-out duration-150">
                    Buy Now
                </button>
            </div>
            <div className="productBox">
                <img src={wood_img3} alt="Fa_01" className="w-full h-full object-contain rounded-lg shadow-sm shadow-orange-500/50"/>
                <button
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-700 cursor-pointer hover:scale-110 transition easy-in-out duration-150">
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default ProductsPreview;