import successIcon from '@/public/assets/CONTACTS PAGE/site icons-08.png'
import { Metadata } from 'next';
import Image from "next/image";
import ReactGA from "react-ga4"
ReactGA.initialize('AW-11366499654');

export const metadata: Metadata = {
    title: "Thank You | WeMakeBrands",
    description: "Based in London UK, we specialize in timeless logo design and systematic brand solutions. Helping companies connect with their audiences and scale their business.",
  };

const page = () => {


    return (
        <div className={`bg-[#1A1A1A] text-white [font-family:MadeOuterSansRegular] w-screen h-screen flex flex-col justify-center items-center`}>
            <div className="flex flex-col gap-11 sm:p-4">
                <div className="flex items-center justify-center gap-6 sm:items-end sm:justify-start">
                    <p className="text-[#FF9F1C] text-5xl sm:text-7xl text-center">GOT IT!</p>
                    <Image src={successIcon} alt="submit" width={70} />
                </div>
                <div className="text-[32px] text-pretty font-semibold flex flex-col text-center leading-9 sm:text-start sm:text-[35px] sm:leading-10">
                    <p>We will be <br className='sm:hidden'/> in touch asap.</p>
                    <p>Looking forward to working together!</p>
                </div>
            </div>

        </div>
    )
}
export default page