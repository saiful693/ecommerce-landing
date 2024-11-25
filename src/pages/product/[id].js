import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';

const ProductDetails = () => {
    const [tab, setTab] = useState('details');

    // Static product data
    const product = {
        id: 1,
        name: 'Indian Saree',
        image: 'https://i.imgur.com/BiE8zdu.png',
        images: [
            'https://i.imgur.com/BiE8zdu.png',
            'https://i.imgur.com/OV5czXs.png',
            'https://i.imgur.com/cGoGPmL.png'
        ],
        price: '2,300',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Red', 'Green', 'Blue'],
        description: 'Elegant Indian saree perfect for weddings and traditional events. Crafted with high-quality fabric to ensure comfort and style.',
        fabric: 'Silk',
        occasion: 'Wedding, Traditional Events',
        stock: 'In Stock',
        rating: 4,
        reviews: [
            { user: 'John Doe', comment: 'Beautiful saree. Loved it!' },
            { user: 'Jane Smith', comment: 'Great quality and fabric.' }
        ]
    };

    // Static related products data
    const relatedProducts = [
        {
            id: 1,
            name: 'Indian Saree',
            image: 'https://i.imgur.com/BiE8zdu.png',
            images: [
                'https://i.imgur.com/BiE8zdu.png',
                'https://i.imgur.com/OV5czXs.png',
                'https://i.imgur.com/cGoGPmL.png'
            ],
            price: '2,300',
            sizes: ['S', 'M', 'L', 'XL'],
            discount: 'Up to 30%',
            rating: 4,
            reviews: 45,
            colors: ['Red', 'Green', 'Blue'],
            description: 'Elegant Indian saree perfect for weddings and traditional events. Crafted with high-quality fabric to ensure comfort and style.',
            fabric: 'Silk',
            occasion: 'Wedding, Traditional Events',
            stock: 'In Stock'
        },
        {
            id: 2,
            name: 'Hoodie',
            image: 'https://i.imgur.com/OV5czXs.png',
            images: [
                'https://i.imgur.com/OV5czXs.png',
                'https://i.imgur.com/BiE8zdu.png',
                'https://i.imgur.com/vo2NbF2.png'
            ],
            price: '2,300',
            sizes: ['M', 'L', 'XL'],
            discount: 'Up to 20%',
            rating: 5,
            reviews: 60,
            colors: ['Black', 'Grey', 'Navy Blue'],
            description: 'Soft and comfortable hoodie perfect for casual outings or lounging. Available in multiple colors and sizes for the best fit.',
            fabric: 'Cotton Blend',
            occasion: 'Casual, Outdoor',
            stock: 'Limited Stock'
        },
        {
            id: 3,
            name: 'Plazu',
            image: 'https://i.imgur.com/cGoGPmL.png',
            images: [
                'https://i.imgur.com/cGoGPmL.png',
                'https://i.imgur.com/OV5czXs.png',
                'https://i.imgur.com/BiE8zdu.png'
            ],
            price: '2,300',
            sizes: ['S', 'M', 'L'],
            discount: 'Up to 25%',
            rating: 4,
            reviews: 30,
            colors: ['White', 'Pink', 'Purple'],
            description: 'Trendy and stylish plazu, perfect for daily wear. Light and breathable fabric for a comfortable fit throughout the day.',
            fabric: 'Cotton',
            occasion: 'Casual, Daily Wear',
            stock: 'In Stock'
        },
        {
            id: 4,
            name: 'Jacket',
            image: 'https://i.imgur.com/vo2NbF2.png',
            images: [
                'https://i.imgur.com/vo2NbF2.png',
                'https://i.imgur.com/cGoGPmL.png',
                'https://i.imgur.com/OV5czXs.png'
            ],
            price: '2,300',
            sizes: ['L', 'XL', 'XXL'],
            discount: 'Up to 40%',
            rating: 3,
            reviews: 25,
            colors: ['Brown', 'Beige', 'Black'],
            description: 'Warm and stylish jacket ideal for winter or evening wear. Offers excellent insulation while maintaining a sleek look.',
            fabric: 'Wool Blend',
            occasion: 'Winter, Evening Wear',
            stock: 'In Stock'
        }
    ];

    return (
        <>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="relative w-full h-96 bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex space-x-4 mt-4">
                            {product.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative w-20 h-20 bg-gray-100 border hover:ring-2 ring-gray-500"
                                >
                                    <Image src={img} alt={`Thumbnail ${idx}`} layout="fill" objectFit="contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <p className='w-[193px] mb-5 py-1 rounded-md text-white text-center bg-[#2F1C59]'>New Arrival</p>
                        <h1 className="text-2xl mb-5  text-black font-semibold ">{product.name}</h1>
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
                                ))}<span className='text-black'>(4.0)</span> <span className='ml-1 text-primary'>121 reviews</span>

                        </div>


                        <p className="text-xl mb-5  font-semibold text-gray-700">BDT {product.price}</p>

                        {/* Size and Color Options */}
                        <div className="mb-4">
                            <p className="text-sm font-semibold">Available Size:</p>
                            <div className="flex space-x-2 mt-2">
                                {product.sizes.map((size, idx) => (
                                    <button
                                        key={idx}
                                        className="px-4 py-2 border rounded-md hover:bg-gray-100"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm font-semibold">Available Color:</p>
                            <div className="flex space-x-2 mt-2">
                                {product.colors.map((color, idx) => (
                                    <button
                                        key={idx}
                                        className="w-8 h-8 rounded-full border"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="mb-4">
                            <p className="text-sm font-semibold">Quantity:</p>
                            <input
                                type="number"
                                min="1"
                                defaultValue="1"
                                className="w-16 border rounded-md text-center py-2 mt-2"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-4 mt-6">
                            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">
                                Buy Now
                            </button>
                            <button className="border px-6 py-3 rounded-md hover:bg-gray-100">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tab Section */}
                <div className="mt-16">
                    <div className="flex border-b mb-4">
                        <button
                            className={`px-4 py-2 ${tab === 'details' ? 'border-b-2 border-purple-600 font-semibold' : ''}`}
                            onClick={() => setTab('details')}
                        >
                            Details
                        </button>
                        <button
                            className={`px-4 py-2 ${tab === 'reviews' ? 'border-b-2 border-purple-600 font-semibold' : ''}`}
                            onClick={() => setTab('reviews')}
                        >
                            Reviews & Rating
                        </button>
                        <button
                            className={`px-4 py-2 ${tab === 'discussions' ? 'border-b-2 border-purple-600 font-semibold' : ''}`}
                            onClick={() => setTab('discussions')}
                        >
                            Discussions
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div>
                        {tab === 'details' && <p>{product.description}</p>}
                        {tab === 'reviews' && (
                            <div>
                                <p className="text-lg font-semibold mb-4">Rating: {product.rating} / 5</p>
                                <div>
                                    {product.reviews.map((review, idx) => (
                                        <div key={idx} className="mb-4">
                                            <p className="font-bold">{review.user}</p>
                                            <p className="text-sm text-gray-600">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {tab === 'discussions' && <p>Discussion content coming soon...</p>}
                    </div>
                </div>

                {/* Related Products */}
                <section className="mt-16">
                    <h2 className="text-xl text-black font-semibold mb-4">Related Products</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-black">
                        {relatedProducts.map((product) => (
                            <Link href={`/product/${product.id}`} key={product.id}>
                                <ProductCard product={product} />
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProductDetails;
