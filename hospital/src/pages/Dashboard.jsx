import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MediaControlCard from './Dashboard/Card.jsx'


const Api_Key='7bf19de835b211567ac76e80886180fd';
const API_end ='https://api.openweathermap.org/data/2.5/onecall?'

const Contact = () => 

{const [lat,setLat] = useState([]);
  const [long,setLong] = useState([]);
  const [loc,setLoc] = useState([]);  
  const [temp,setTemp]= useState([]);
  const [humid,setHumid]= useState([]);
  const [name,setName]= useState([]);
  const [timezone,setTimezone]= useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position)=> {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    })
    // let final= `${API_end}lat=${lat}&lon=${long}&appid=${Api_Key}`
    axios.get(`${API_end}lat=${lat}&lon=${long}&appid=${Api_Key}`).then((response) => {
      console.log(response.data);
      

    })

  },[])
  // useEffect(() => {
  //   axios.get("http://localhost:3001/getData").then((response) => {
  //     console.log(response.data);
  //     // setTemp(response.data.main.temp);
  //     // setHumid(response.data.main.humidity);
  //     // console.log(temp);
  //     // console.log(humid);
  //   }).catch((error) => {
  //     console.log(error);
  //   })

  // },[])


  return (
    <>
    <section className="bg-[#fff9ea]">
      <div className='container text-center'>
        <h2 className='heading'>
       welcome to the Dashboard
        </h2>
      </div>
    </section>
    <section>
      <div className='heading justify-center items-center '>
      <h1>Dashboard</h1>
      </div>
      <div className='cards flex flex-row gap-10 mt-16 text-[24px] justify-center items-center'><h1 className='text-[45px]'> Your City is {timezone}</h1></div>
      <div className=' justify-between items-center mt-16'>
      <div className='cards flex flex-row gap-10'>
      <MediaControlCard lat={lat} long={long}/>
      </div>
      </div>

      
    </section>
    </>
  )
}

export default Contact