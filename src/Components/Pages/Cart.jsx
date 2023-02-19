import React from 'react';
import { Box, Button, Flex, Text,Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Cart = () => {

let data= JSON.parse(localStorage.getItem("orderBook"))
console.log(data)

const navigate=useNavigate()

const handleAlert=()=>
{
alert("Ordered Succesfully")
navigate("/")
}


  return (
    <Box w="95%" m='auto' >
        <Box mt={['1%']} w={["90%",'100%']} ml={['2','0']} >
      <Box align={'center'} border={'1px solid black'}  w={['98%','80%']} m={'auto'} borderRadius='8'>
      <Button w={['100%','100%']} borderRadius='8'fontSize={'18px'} bgColor='green' color={'white'} onClick={handleAlert}>Orderd</Button>
      </Box>
    </Box>
        {
            data.map((e)=>(

  <Box border={'1px solid red'} m='auto' display={'grid'} gridTemplateColumns='repeat(2,1fr)' h={['95px','190px']}  borderRadius='8'mt='2'>
   
   <Box w={["95%",'100%']} >
          <Image w={['100%',"95%"]} h={['80px','180px']}mt='1'ml='1' borderRadius={'7'} src={e.strMealThumb} alt='1'/>
    
   </Box>

    <Box m='5%' w={["95%",'100%']}  border={'1px solid black'} h={['80px','180px']}mt='1'ml='1'>
    
      <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='5' ml='3'>{e.strIngredient1}:{e.strMeasure1}</Text>
                           <Text fontWeight={'bold'} fontSize={['8px','12px']}mt='1' ml='3'>{e.strIngredient2}:{e.strMeasure2}</Text>
                           <Text fontWeight={'bold'} fontSize={['8px','12px']}mt='1' ml='3'>{e.strIngredient3}:{e.strMeasure3}</Text>
                           <Text fontWeight={'bold'} fontSize={['8px','12px']}mt='1' ml='3'>{e.strIngredient4}:{e.strMeasure4}</Text>
                           <Text fontWeight={'bold'} fontSize={['8px','12px']}mt='1' ml='3'>{e.strIngredient5}:{e.strMeasure5}</Text>
                           <Text fontWeight={'bold'} fontSize={['8px','12px']}mt='1' ml='3'>{e.strIngredient6}:{e.strMeasure6}</Text> 
    </Box>
       
  </Box>

            )

            )
        }
  
    </Box>
  );
}

export default Cart;
