import React from 'react'
import img4 from '../assets/images/rice.jpg'
import { Link } from 'react-router-dom'

import Home from '../pages/Home'
import { useTranslation } from 'react-i18next'

const About = () => {
  const {t}= useTranslation();
  return (
    <section>
    <div className='container'>

        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-10 flex-col  lg:flex-row'>
        <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1' > 
        {<img src={img4} className='w-1/1 h-1/1' alt=''/>}
        </div>
        <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'> 
            <h2 className='heading'>{t("AH")}</h2>
            
          
            <li className='text-[20px] font-[500] text-head'>{t("line1")}</li>
          
            <li  className='text-[20px] font-[500] text-head'>{t("line2")}</li>
          <li className='text-[20px] font-[500] text-head'>{t("line3")}</li> 
         
            <Link to='/s2' >
            <button className='btn bg-green-600'>{t("re")}</button></Link>
        </div>
        
        </div>
        
    </div>
    
    </section>
  )
}

export default About