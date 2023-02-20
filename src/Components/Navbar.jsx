import { Box, Flex,Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
const navigate=useNavigate()
  let data=JSON.parse(localStorage.getItem("login"))
// console.log(data[0].Username)
// console.log(data.length)

const handlelogout=(e)=>{
 
  localStorage.removeItem("login")
  navigate("/login")
}


  return (
    <Box >
      <Flex justifyContent={'space-between'} w={["98%","98%"]} m='auto' border="1px solid black" 
      fontSize={["22",'32']} borderRadius='8'  bgColor={"teal.300"}>
        <Link to='/'style={{marginLeft:'2%'}}>Home</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/user'>Profile</Link>
        {
        (!data)?<Link to='/register' style={{marginRight:'2%'}}>Signup/Login</Link>:
        <Flex justifyContent='space-between'>
          <Text style={{marginRight:'2%'}}>{data[0].Username}</Text>
        <Text style={{marginRight:'2%'}} onClick={handlelogout}>Logout</Text>
        </Flex>
        
        }
        
        
      </Flex>
    </Box>
  );
}

export default Navbar;
