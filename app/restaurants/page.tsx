import logoBlack from "../../public/assets/images/logo-black.svg";
import Image from 'next/image';

const Restaurants = () => {
  return (
    <div>
        <Image src={logoBlack} alt="Munchies Logo Black" width={273.42} height={40} className=" w-[167px] h-[24px] lg:w-[273.42px] lg:h-[40px]" />
    </div>
  )
}

export default Restaurants