
import { Box, Button, Flex, Grid, Heading, Image, Input, InputGroup, InputLeftElement, InputRightElement, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { getdata } from '../Redux/Actions_All/action'


const Home = () => {

    const dispatch=useDispatch()

const data=useSelector((state)=>state.MealReducer.mealData)

const isloading=useSelector((state)=>state.MealReducer.isLoading)

const iserror=useSelector((state)=>state.MealReducer.IsError)

console.log(iserror,isloading)

const navigate=useNavigate()

const [search,setsearch]=useState("")

console.log(search,iserror,isloading)
    
const Meals=data.meals

useEffect(()=>{
    dispatch(getdata(search))
},[dispatch,search])


const handle=(id)=>{
  console.log(id)
navigate(`/recipie/${id}`)
}

var  arr=JSON.parse(localStorage.getItem("orderBook"))||[]

const HandleSave=(e)=>{
  console.log(e)
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
    <Box w='98%' m={'auto'}>
    
        <Flex justifyContent={'space-between'} w={["99%","40%"]} m='auto'  border={'1px solid black'}mt='2'  borderRadius={"8px"} onChange={(e)=>setsearch(e.target.value)}>   
        <Input type={'text'} placeholder='Enter Recipie name ' border={'none'}/>
         <Button outline={'1px solid black'} w='120px' bgColor={'green.100'}>Search</Button>
      </Flex>

    <div>
    {
           
           isloading ? <Box w="500%" h="500%" padding='6' boxShadow='lg' bg='white'>
                       <SkeletonCircle size='30' />
                       <SkeletonText mt='4' noOfLines={4} spacing='54' skeletonHeight='4' />
                      </Box>:""
    }
    {
           iserror ? "Something wrong":""
    }
{

    // {/* ----------------------card Container------------------ */}
      <Box  border="1px solid black" mt={2} w='100%' display='grid' gridTemplateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"]} gap={3} >
       {
         Meals && Meals.map((e,i)=>{
        
          return (
             <Box key={e.idMeal} className='cardcontainer' w={["90%","90%",'90%']} border="1px solid red" h="400px" m='auto' mt={5} borderRadius='12px'>
         <Image w='95%' borderRadius='12px' m='auto' mt={1} h="70%" src={e.strMealThumb} alt='img1'onClick={()=>handle(e.idMeal)} cursor='POINTER' />
         <Box>
            <Text fontWeight={'bold'}>{e.strMeal}({e.strCategory})</Text>
        
          <Box  m='auto'mt='2'mb='1'  w='80%' border={'1px solid red'}>
          <Button w='100%' bgColor={"blue.300"} color='white' _hover={{backgroundColor:'green'}} onClick={()=>HandleSave(e)} >ADD-ORDER</Button>
          </Box>
         </Box>
      </Box>  
          )
        })
       }
       
          
      </Box>
    
    
    
    
    
    
    
    
    }


    </div>
</Box>
  )
}

export default Home



















