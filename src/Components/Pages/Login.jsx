import React, { useState } from 'react';
import { Input,Box,Heading, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import axios from 'axios';
// import { login } from '../redux/Authenticationredux/action';




const Login = () => {
  
  const navigate=useNavigate()

  const [data,setdata]=useState([])

const [arr,setarr]=useState([])

  const handlechange=(e)=>{
    let name=e.target.name
    let value= e.target.value
    setarr({...arr,[name]:value})
  }


const HandleLogin=(e)=>{
  e.preventDefault()
  axios.get("https://ill-pink-dugong-belt.cyclic.app/userData")
.then((res)=>setdata(res.data))

.catch((err)=>console.log(err))
console.log(data)
navigate("/")
let auth=data.filter(function(v, i) {
  return ((v["Username"] === arr.Username) && v.password === arr.Password);
})

console.log(auth)

 
  }
  
  return (
    <Box>
   <Box  border='1px solid black' w={['95%','60%']} m='auto'mt={['25%','8%']} borderRadius="12" bgColor='blue.900'>
  <Heading textAlign='Center'w='80%' m='auto' fontSize={['20','32']} mt='2' color='white' >Login-Page</Heading>

   <Heading textAlign='left'w='80%' m='auto' fontSize={['15','22']} color='white'>Email *</Heading>

  <Input type='email' placeholder='Enter Email' size='md' w='80%' m='auto' mt='2' color='black' bgColor='white' name='Username'   onChange={handlechange}/>

  <br/>
  <Heading textAlign='left'w='80%' m='auto' fontSize={['15','22']} color='white' mt='2' >Password *</Heading>

  <Input type='password' placeholder='Enter password' size='md' w='80%'color='black' m='auto' mt='2'bgColor='white' name='password'   onChange={handlechange}/>
  <br/>
  
  <Button colorScheme='whatsapp' mt='4'  mb='12' w='40%' onClick={HandleLogin}>Login</Button>
 
</Box>
    </Box>
  );
}

export default Login;