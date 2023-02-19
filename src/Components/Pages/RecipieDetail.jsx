


import { Box, Button, Flex, Heading, Image, Select, Text, Wrap, WrapItem  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getsingledata } from '../Redux/Actions_All/action';




const RecipieDetail = () => {


  const { idMeal } = useParams();
  console.log(idMeal)
 
let data=useSelector((state)=>state.MealReducer.SinglemealData)
let dispatch=useDispatch()
let item=data
console.log(item)
useEffect(() => {
dispatch(getsingledata(idMeal))
}, [dispatch,idMeal]);



  var  arr=JSON.parse(localStorage.getItem("orderBook"))||[]
  const HandleSave=(e)=>{
  let f=true
    // console.log("yes ",arr[0].idMeal,e.idMeal)
    if(arr.lenght>=0){
    for(let i=0;i<arr.length;i++){
      if(arr[i].idMeal==e.idMeal){
        f=false
        alert("already in the Book")
      }
      
    }
    if(f){
      arr.push(e)
      localStorage.setItem("orderBook",JSON.stringify(arr))
       alert("Data added Succesfully")
    }
  }else{
    arr.push(e)
    localStorage.setItem("orderBook",JSON.stringify(arr))
     alert("Data added Succesfully")
  }

  
  
}

  return (
    <Box className='body'w='99%' >


{/* ----------------------card Container------------------ */}
{
                (!item) ? "" :
      <Box  mb='4' mt={2} w='100%' display='grid' gridTemplateColumns={["repeat(1, 1fr)","repeat(2, 1fr)"]} gap={8}>
        
      

        {/* //Image containe ONLY */}


        <Box className='detailfoodcardcontainer' w={["90%","90%",'90%']} border="1px solid red" h={["230px","400px"]} m='auto' mt={5} borderRadius='12px'>
         <Image w='95%' borderRadius='12px' m='auto' mt={1} h={["90%","98%"]} src={item.strMealThumb} alt='img1' />
        
      </Box>  

 {/* //Food Detail containe ONLY */}

        <Box className='detailfoodcardcontainer2'  w={["90%","90%",'90%']} border="1px solid red"  height={'fit-content'} m='auto' mt={5} borderRadius='12px'>
        <Text fontWeight={'bold'} mt='6' fontSize={'28px'} color="teal.200">Food-Item-Detail </Text>
        <Box  m='auto'mt='2'mb='5'  w='95%' border={'3px solid yellow'} borderRadius='10px' >

         
          <Box  m='auto'mt='2'  w='95%' mb={5} border={'2px solid yellow'}>
          <Box m='auto' w={["95%",'100%']}  border={'1px solid black'}  borderRadius={12} textAlign='left'
           background= "linear-gradient(to right, #f09819, #edde5d)" >
     
                           <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='5' ml='3'>{item.strIngredient1}:{item.strMeasure1}</Text>
                           <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='5' ml='3'>{item.strIngredient2}:{item.strMeasure2}</Text>
                           <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='5' ml='3'>{item.strIngredient3}:{item.strMeasure3}</Text>
                           <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='5' ml='3'>{item.strIngredient4}:{item.strMeasure4}</Text>
                           <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='5' ml='3'>{item.strIngredient5}:{item.strMeasure5}</Text>
                           <Text fontWeight={'bold'} fontSize={['12px','22px']}mt='5' ml='3'>{item.strIngredient6}:{item.strMeasure6}</Text> 
    </Box>
          </Box>
          <Box  m='auto'mt='2'mb='5'  w='80%' border={'1px solid red'}>
          <Button w='100%' bgColor={"blue.300"} color='white' _hover={{backgroundColor:'green'}} onClick={()=>HandleSave(item)}>ADD-FOOD</Button>
          </Box>
         </Box> 
      </Box>
    </Box>

}
    </Box>
  );
}

export default RecipieDetail;
