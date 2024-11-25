import Image from "next/image";


const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="flex pb-6 justify-between items-center">
            <div>
                <h3 className="text-primary text-[19px]">{subHeading}</h3>
                <h2 className="text-black text-[28px] font-bold">{heading}</h2>
            </div>
            <div className="flex gap-2">
                <button className="btn btn-circle border-primary btn-outline hover:bg-[#8F71E1] hover:bg-opacity-80">
                    <Image src={`/arrow-left.svg`} alt="arrow-left" width={32} height={32} />
                </button>
                <button className="btn btn-circle border-primary btn-outline hover:bg-[#8F71E1] hover:bg-opacity-80">
                    <Image src={`/arrow-right.svg`} alt="arrow-right" width={32} height={32} />
                </button>
            </div>
        </div>
    );
};

export default SectionTitle;