import Image from 'next/image';
import React from 'react';

const DiscountProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg w-[287px] shadow-md">
            <div className="p-2">
                {/* Product Image and Discount Badge */}
                <div className="relative">
                    {product.discount && (
                        <button className="absolute w-11 top-0 right-2 bg-purple-500 text-white text-xs font-bold py-1 px-2 rounded-b-full">
                            {product.discount}
                        </button>
                    )}
                    <Image
                        className="bg-[#f6f5fd] w-full h-[320px] rounded-lg object-cover"
                        src={product.image}
                        alt={product.name}
                        width={286}
                        height={320}
                    />
                </div>

                {/* Product Details */}
                <div className="mt-4">
                    {/* Rating Section */}
                    <div className="flex items-center gap-1">
                        <div className="rating flex">
                            {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                    <input
                                        key={index}
                                        type="radio"
                                        name={`rating-${product.id}`}
                                        className={`w-4 h-4 mask mask-star-2 ${index < product.rating ? "bg-[#FFC700]" : "bg-gray-300"
                                            }`}
                                        defaultChecked={index === product.rating - 1}
                                    />
                                ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>

                    {/* Name and Price */}
                    <div className="flex justify-between my-4 items-center">
                        <h4 className="text-gray-700 font-medium">{product.name}</h4>
                        <h2 className="text-lg font-semibold text-gray-800">BDT {product.price}</h2>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiscountProductCard;