import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="p-2 w-[287px]">
            <Image
                className="bg-[#f6f5fd] w-[286px] h-[320px] rounded-lg"
                src={product.image}
                alt={product.name}
                width={286}
                height={320}
            />
            <div>
                <div className="flex justify-between my-4">
                    <h4 className="">{product.name}</h4>
                    <h2 className="text-[19px] font-semibold">BDT {product.price}</h2>
                </div>
                <button className="btn btn-block text-primary  btn-outline border-primary">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;