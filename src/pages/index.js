import DiscountProductCard from "@/components/DiscountProductCard";
import HeaderBanner from "@/components/HeaderBanner";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/Shared/SectionTitle";
import ShopNowButton from "@/components/Shared/ShopNowButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
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


  const [discountProduct, setDiscountProduct] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setDiscountProduct(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      {/* Header Banner */}
      <HeaderBanner />

      {/* Service Banner */}
      <div className="hero md:h-[82px] w-full bg-cover bg-no-repeat"
        style={{
          background: `linear-gradient(0deg, rgba(100, 65, 194, 0.90) 0%, rgba(100, 65, 194, 0.90) 100%), url('/option.png') lightgray`,
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="py-4 flex flex-wrap gap-8 text-white   lg:justify-between px-4">
          <div className="flex gap-4 items-center">
            <Image src={`/truck-delivery.svg`} alt="free shipping" width={32} height={32} />
            <div>
              <h3 className="text-sm lg:text-lg font-semibold">FREE SHIPPING</h3>
              <p className="text-xs lg:text-sm">BUY BDT 3000+ & GET FREE DELIVERY</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={`/exchange.png`} alt="exchange" width={32} height={32} />
            <div>
              <h3 className="text-sm lg:text-lg font-semibold">7 DAYS EXCHANGE</h3>
              <p className="text-xs lg:text-sm">EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={`/payment.png`} alt="payment" width={32} height={32} />
            <div>
              <h3 className="text-sm lg:text-lg font-semibold">100% PAYMENT SECURE</h3>
              <p className="text-xs lg:text-sm">CASH ON DELIVERY AND SECURED ONLINE PAYMENT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Product Section */}
      <div className="px-4 sm:px-6 lg:px-20">
        <SectionTitle heading="New Arrivals" subHeading="FEATURED PRODUCT"></SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-black">
          {relatedProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="btn w-full sm:w-auto border-none bg-[#7E53D4] text-white px-6 py-2">See more</button>
        </div>
      </div>

      {/* Big Deal Section */}
      <div className="mt-8 lg:mt-[77px] px-4 lg:px-20">
        <div className="hero bg-[#EEECFB] flex flex-col lg:flex-row lg:justify-between items-center">
          <Image className="mb-4 lg:mb-0" src={`https://i.imgur.com/EOx1mob.png`} alt="new-customer-discount-img" width={427} height={360} />
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-primary text-[19px] italic font-pacifico">Big Deal</h4>
            <h1 className="text-3xl lg:text-5xl text-black font-semibold"><span className="text-primary">30%</span> Off for New Customers</h1>
            <ShopNowButton />
          </div>
        </div>
      </div>

      {/* Collection Section */}
      <div className="bg-[#F8F9FF] px-4 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="bg-[#EEECFB] w-full lg:w-[420px] h-[390px] flex justify-center">
            <Image src="https://i.imgur.com/NwPcZo9.png" alt="Men Collection" width={357} height={457} />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-black">MEN COLLECTION</h2>
            <ShopNowButton />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row-reverse gap-12 mt-12 items-center">
          <div className="bg-[#EEECFB] w-full lg:w-[420px] h-[390px] flex justify-center">
            <Image src="https://i.imgur.com/v3vHXLA.png" alt="Women Collection" width={276} height={459} />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-black">WOMEN COLLECTION</h2>
            <ShopNowButton />
          </div>
        </div>
      </div>

      {/* Summer Deals Section */}
      <div className="px-4 lg:px-20 py-16">
        <SectionTitle heading="Big Deal" subHeading="SUMMER"></SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-black">
          {discountProduct.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <DiscountProductCard key={product.id} product={product} />
            </Link>

          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="btn w-full sm:w-auto border-none bg-[#7E53D4] text-white px-6 py-2">See more</button>
        </div>
      </div>
    </>
  );
}
