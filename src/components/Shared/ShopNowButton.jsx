import Image from 'next/image';
import React from 'react';

const ShopNowButton = () => {
    return (
        <div className="flex items-center justify-center space-x-1">
            <button className="btn font-normal border-none text-xl bg-[#8F71E1] text-white rounded-3xl hover:bg-[#8F71E1] hover:bg-opacity-80">
                Shop Now
            </button>
            <button className="btn bg-[#8F71E1] border-none btn-circle btn-outline hover:bg-[#8F71E1] hover:bg-opacity-80">
                <Image src={`/arrow-up.svg`} alt='' width={24} height={24} />
            </button>
        </div>
    );
};

export default ShopNowButton;