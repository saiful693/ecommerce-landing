import ShopNowButton from "./Shared/ShopNowButton";

const HeaderBanner = () => {
    return (
        <div
            className="hero h-[50vh] w-full bg-cover bg-no-repeat"
            style={{
                background:
                    "linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url('/banner_img.png')",
                backgroundPosition: "center 10%",
                backgroundSize: "cover",
            }}
        >
            {/* Content */}
            <div className="hero-content text-center text-white px-4 sm:px-8 md:px-0">
                <div className="max-w-xl mx-auto">
                    <h1 className="mt-5 mb-2 text-3xl sm:text-4xl md:text-5xl font-bold">
                        Elevate Your Everyday Style
                    </h1>
                    <p className="mb-4 text-sm sm:text-base md:text-lg">
                        Discover the Latest Trends in Sustainable Fashion
                    </p>
                    <ShopNowButton />
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;

