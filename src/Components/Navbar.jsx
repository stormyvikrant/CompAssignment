import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box >
      <Flex justifyContent={'space-between'} w={["98%","98%"]} m='auto' border="1px solid black" 
      fontSize={["22",'32']} borderRadius='8'  bgColor={"teal.300"}>
        <Link to='/'style={{marginLeft:'2%'}}>Home</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/user'>Profile</Link>
        <Link to='/register' style={{marginRight:'2%'}}>SignUp/Login</Link>
        
      </Flex>
    </Box>
  );
}

export default Navbar;
