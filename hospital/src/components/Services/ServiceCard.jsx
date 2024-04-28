import { Link } from 'react-router-dom';
import {services} from '../../assets/data/services'
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({item, index}) => {
  const { t } = useTranslation();
    const {name, desc, bgColor, textColor} = item;
    
  return (
    <div className='py-[30px] px-3 lg:px-5'>
    <h2 className='text-[26px] leading-9 text-head font-[700]'>{name}</h2>
    <p className='text-[16px] leading-7 font-[400] text-head mt-4'>{desc}</p>
    <div className='flex item-center justify-between mt-[30px]'>
    <Link to='/crop' className="w-[44px] h-[44px] rounded-full border mt-[30px] border-solid border-[#181A1E] mx-auto flex justify-center items-center group hover:bg-priC hover:border-none">
                  <FaArrowRight className="group-hover:text-white w-5 h-6" />
                  </Link>
    </div>
    </div>
  )
}

export default ServiceCard