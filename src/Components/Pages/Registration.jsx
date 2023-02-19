


import React, { useState } from 'react';
import { Input,Box,Heading, Button } from '@chakra-ui/react'

import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Registration = () => {

  const [arr,setarr]=useState({})

  const handlechange=(e)=>{
    let name=e.target.name
    let value= e.target.value

    setarr({...arr,[name]:value,Avatar:"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT14xeuHgwvRv4MKwdR24nqQ6541sSRo1l3b-foKW_UQrU05Q8lWhgtVr9GMMVo1Lb3KHXAmwZoxu0UMQY"})

  }
  





  const navigate=useNavigate()
 



  
  const SignupHandle=(e)=>{
    e.preventDefault()
     axios.post("https://ill-pink-dugong-belt.cyclic.app/userData",arr)
    .then((res)=>{
     
      console.log(res.userdata)
    }
  
      )
    .catch((err)=>{
      
      console.log(err)
      navigate("/login")
    })
  }
  
  return (
    <Box>
    <Box  border='1px solid black' w={['95%','60%']} m='auto'mt={['25%','8%']} borderRadius="12" bgColor='pink.900'>
   <Heading textAlign='Center'w='80%' m='auto' fontSize={['20','32']} mt='2' color='white' >Registration</Heading>
 
   <Heading textAlign='left'w='80%' m='auto' fontSize={['15','22']} color='white'>USERNAME *</Heading>
 
   <Input type='type' placeholder='Enter username' size='md' w='80%' m='auto' mt='2' color='black' bgColor='white' name='Username'   onChange={handlechange}/>
   <br/>
   <Heading textAlign='left'w='80%' m='auto' fontSize={['15','22']} color='white'>Email *</Heading>
 
   <Input type='email' placeholder='Enter Email' size='md' w='80%' m='auto' mt='2' color='black' bgColor='white' name='email'   onChange={handlechange}/>
 
   <br/>
   <Heading textAlign='left'w='80%' m='auto' fontSize={['15','22']} color='white' mt='2' >Password *</Heading>
 
   <Input type='password' placeholder='Enter password' size='md' w='80%'color='black' m='auto' mt='2'bgColor='white'name='password'   onChange={handlechange}/>
   <br/>
   
   <Button colorScheme='whatsapp' mt='4'  mb='12' w='40%' onClick={SignupHandle}>Registred</Button>
  
 </Box>
     </Box>
  );
}

export default Registration;