import Image from 'next/image';
import burgerImage from "../public/assets/images/burger.svg"

const FilterCard = () => {
  return (
    <div className="shrink-0 w-[160px] h-[80px] border border-munchies-gray bg-white rounded-lg px-3 py-4 flex flex-row relative">
      <div className='text-wrap'>
        <p className='text-sm'>Hamburger</p>
      </div>
      <div className='w-[80px] h-[80px]'>
        <Image src={burgerImage} width={80} height={80} alt="Card Image" className='absolute -top-1 -right-1'/>
      </div>

  </div>
  )
}

export default FilterCard