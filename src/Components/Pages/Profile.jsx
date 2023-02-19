import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Box, Button, Flex, Text,Image } from '@chakra-ui/react';
const Profile = () => {
  return (
    <Box w="65%" m='auto'   background= "linear-gradient(to right, #603813, #b29f94)">
    <Box border={'1px solid red'} m='auto' display={'grid'} gridTemplateColumns='repeat(2,1fr)' height={'350px'}  borderRadius='8'mt='10%' background= "linear-gradient(to right, #348f50, #56b4d3)">
   <Box w={["95%",'55%']} m='auto' >
          <Image w={['100%',"100%"]} borderRadius={"180px"} h='280px' m='5%'  src='http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT14xeuHgwvRv4MKwdR24nqQ6541sSRo1l3b-foKW_UQrU05Q8lWhgtVr9GMMVo1Lb3KHXAmwZoxu0UMQY' alt='1'/>
    
   </Box>

    <Box m='auto' w={["95%",'95%']}  border={'1px solid black'}  h='220px' borderRadius={12} textAlign='left'  background= "linear-gradient(to right, #f09819, #edde5d)">
      <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='5' ml='3'>Name : Salman Khan</Text>
      <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='2' ml='3'>Email : salmon@gmail.com</Text>
      <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='2' ml='3'>Age : 52</Text>
      <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='2' ml='3'>Address : Mumbai,Bandrea</Text>
      
    </Box>
    
  </Box>
    </Box>
  );
}

export default Profile;
