import React from "react";
import {doctors} from '../assets/data/merged_file.js'
import Doctorcard from "./Doctorcard.jsx";
import useFetchData from "../../../backend/hooks/useFetchData.jsx";

const DoctorList = () => {
  const {data:doctors , loading, error}= useFetchData(`http://localhost:5000/api/v1/doctor`)
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
      {
        doctors.slice(0,3).map((doctor)=>{
            return <Doctorcard key={doctor._id} doctor={doctor}/>
        })
      }
        </div>
    )

}
export default DoctorList;