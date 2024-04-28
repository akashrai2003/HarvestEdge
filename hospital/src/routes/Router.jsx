import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Dashboard'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Doctors from '../pages/Doctors/Diseases'
import DoctorDetail from '../pages/Doctors/DiseasesDeatail'
import Chatbot from '../pages/Chatbot'

import {Routes , Route } from 'react-router-dom'
import MedicalReport from '../pages/Crop'
import Dashboard from '../pages/Chatbot'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/disease" element={<Doctors />} />
      {/* <Route path="/users/profile/me" element={<MyAccount />} /> */}
      <Route path="/Chatbot" element={<Chatbot />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />
      <Route path='/crop' element={<MedicalReport />} />  
      {/* <Route path ="/sos" element = {<Contact />} /> */}
    </Routes>
  )
}

export default Router